import axios from 'axios';
import fs from 'fs';

async function run() {
  console.log("Reading existing globalCatholicData.ts to extract percentages...");
  const existingRaw = fs.readFileSync('src/data/globalCatholicData.ts', 'utf-8');
  
  // Clean the TS so we can parse it as JS
  const match = existingRaw.match(/export const globalCatholicData.*?=\s*(\{[\s\S]*?\});/);
  if (!match) throw new Error("Could not parse object literal");
  const cleanJs = match[1];
  
  const existingData = eval('(' + cleanJs + ')');
  
  console.log("Fetching World Bank Population Data (1960-2022) for all countries...");
  // World bank API: SP.POP.TOTL is total population
  // per_page=20000 ensures we get all records (usually ~16,000 for 266 countries * 62 years)
  const wbUrl = 'https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json&per_page=20000&date=1960:2022';
  
  let wbData = [];
  try {
    const res = await axios.get(wbUrl);
    if (!res.data || !res.data[1]) {
        throw new Error("Invalid World Bank Response");
    }
    wbData = res.data[1];
  } catch (err) {
    console.error("Error fetching WB data:", err.message);
    return;
  }
  
  console.log(`Fetched ${wbData.length} total records from World Bank.`);
  
  // Group WB data by ISO3
  const wbByIso = {};
  for (const record of wbData) {
    const iso3 = record.countryiso3code; // World Bank includes ISO3 code!
    if (!iso3) continue;
    
    if (!wbByIso[iso3]) wbByIso[iso3] = {};
    const year = parseInt(record.date, 10);
    const pop = record.value; // can be null
    
    if (pop !== null) {
      wbByIso[iso3][year] = pop;
    }
  }
  
  // Now, merge with our existing dataset
  const finalDataset = {};
  let count = 0;
  
  for (const [iso, info] of Object.entries(existingData)) {
    // Get the most recent percentage we have (from 2020)
    const dataPoints = info.data;
    if (!dataPoints || dataPoints.length === 0) continue;
    
    // Find the percentage (it was added in the previous script)
    const pctPoint = dataPoints.find(d => d.percentage !== undefined);
    const percentage = pctPoint ? pctPoint.percentage : null;
    
    if (percentage === null) {
      // If no percentage, just copy the old data as fallback
      finalDataset[iso] = info;
      continue;
    }
    
    const historicPops = wbByIso[iso];
    if (!historicPops) {
      // If WB has no data (e.g. Taiwan TWN is notoriously missing from World Bank), fallback to old data
      finalDataset[iso] = info;
      continue;
    }
    
    const newData = [];
    // Generate data from 1960 to 2022
    for (let year = 1960; year <= 2022; year++) {
      const totalPop = historicPops[year];
      if (totalPop !== undefined) {
        const catholicPop = Math.round(totalPop * (percentage / 100));
        newData.push({
          year,
          population: catholicPop,
          percentage: percentage
        });
      }
    }
    
    // Sort by year just in case
    newData.sort((a, b) => a.year - b.year);
    
    finalDataset[iso] = {
      ...info,
      notes: "WB Historic Pop × Current Catholic %",
      data: newData
    };
    count++;
  }
  
  console.log(`Successfully merged ${count} countries with World Bank data.`);
  
  // Save as JSON
  fs.writeFileSync('src/data/globalCatholicData.json', JSON.stringify(finalDataset, null, 2));
  console.log("Saved to src/data/globalCatholicData.json");
}

run();
