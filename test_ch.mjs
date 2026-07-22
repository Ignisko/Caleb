import axios from 'axios';
import * as cheerio from 'cheerio';

async function testScrape() {
  const url = 'http://www.catholic-hierarchy.org/country/sc1.html';
  console.log(`Fetching ${url}`);
  const { data } = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  
  const $ = cheerio.load(data);
  const rows = $('tr').filter(function() {
    return $(this).find('td').length >= 3;
  });
  
  console.log(`Found ${rows.length} rows`);
  rows.slice(0, 15).each((i, el) => {
    const tds = $(el).find('td');
    if (tds.length >= 5) {
      const catholicPop = $(tds[1]).text().trim();
      const totalPop = $(tds[2]).text().trim();
      const percent = $(tds[3]).text().trim();
      const country = $(tds[4]).text().trim();
      console.log(`${country}: ${percent} (${catholicPop} / ${totalPop})`);
    }
  });
}

testScrape();
