import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

function levenshtein(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
      }
    }
  }
  return matrix[b.length][a.length];
}

function findBestMatch(target, candidates) {
  let bestScore = Infinity;
  let bestMatch = null;
  const t = target.toLowerCase().replace(/[^a-z]/g, '');
  
  for (const c of candidates) {
    const candidateStr = c.toLowerCase().replace(/[^a-z]/g, '');
    if (t === candidateStr) return c; // exact match
    
    const dist = levenshtein(t, candidateStr);
    if (dist < bestScore) {
      bestScore = dist;
      bestMatch = c;
    }
  }
  // Allow a match if it's close enough
  if (bestScore <= 3) return bestMatch;
  return null;
}

const manualMap = {
  'Mxico': 'Mexico',
  'USA': 'United States',
  'Congo (Dem. Rep.)': 'Democratic Republic of the Congo',
  'Cte d\'Ivoire': "Côte d'Ivoire",
  'Korea (South)': 'South Korea',
  'Tanzania': 'United Republic of Tanzania',
  'Great Britain': 'United Kingdom',
  'Dominican Rep.': 'Dominican Republic',
  'Syria': 'Syrian Arab Republic',
  'Czech Republic': 'Czechia',
  'Papua-New Guinea': 'Papua New Guinea',
  'Bosnia & Herzegov.': 'Bosnia and Herzegovina'
};

async function run() {
  console.log("Loading existing data...");
  const existingPath = 'src/data/globalCatholicData.json';
  const existingRaw = fs.readFileSync(existingPath, 'utf-8');
  const existingData = JSON.parse(existingRaw);
  
  const existingNames = Object.values(existingData).map(d => d.name);
  const nameToIso = {};
  for (const [iso, d] of Object.entries(existingData)) {
    nameToIso[d.name] = iso;
  }
  
  console.log("Fetching Catholic-Hierarchy.org stats...");
  const url = 'http://www.catholic-hierarchy.org/country/sc1.html';
  const { data } = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  
  const $ = cheerio.load(data);
  const rows = $('tr').filter(function() { return $(this).find('td').length >= 5; });
  
  const newPercentages = {};
  
  rows.each((i, el) => {
    const tds = $(el).find('td');
    let country = $(tds[4]).text().trim();
    if (manualMap[country]) country = manualMap[country];
    
    let percentStr = $(tds[3]).text().trim().replace('%', '');
    let percent = parseFloat(percentStr);
    if (isNaN(percent)) return;
    
    const matchedName = findBestMatch(country, existingNames);
    if (matchedName) {
      const iso = nameToIso[matchedName];
      newPercentages[iso] = percent;
    } else {
      console.log(`Could not match CH country: ${country}`);
    }
  });
  
  console.log(`Successfully mapped ${Object.keys(newPercentages).length} countries from CH to ISO codes.`);
  
  let countReplaced = 0;
  for (const [iso, chPercent] of Object.entries(newPercentages)) {
    const countryData = existingData[iso];
    if (!countryData || !countryData.data || countryData.data.length === 0) continue;
    
    // We update every year in the dataset
    for (let i = 0; i < countryData.data.length; i++) {
      const point = countryData.data[i];
      const oldCatholicPop = point.population;
      const oldPercent = point.percentage;
      
      if (oldPercent && oldCatholicPop > 0) {
        // Reverse engineer total population from the WB merge
        const totalPop = oldCatholicPop / (oldPercent / 100);
        const newCatholicPop = Math.round(totalPop * (chPercent / 100));
        
        point.population = newCatholicPop;
        point.percentage = chPercent;
      }
    }
    
    countryData.notes = "Vatican Official Catholic % (Catholic-Hierarchy) × WB Historic Pop";
    countReplaced++;
  }
  
  console.log(`Updated ${countReplaced} countries with new CH percentages.`);
  fs.writeFileSync(existingPath, JSON.stringify(existingData, null, 2));
  console.log("Saved to src/data/globalCatholicData.json");
}

run().catch(console.error);
