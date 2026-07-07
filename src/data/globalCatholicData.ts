// Catholic Population by Country (1980, 2000, 2020)
// Sources: Vatican Annuario Pontificio, Pew Research Center (2011/2025),
//          national censuses (IBGE Brazil, INEGI Mexico, PSA Philippines,
//          ABS Australia, Statistics Canada, Statistik Austria, Kenya 2019),
//          Catholic-Hierarchy.org, CARA, Aid to the Church in Need
//
// NOTE: "Catholic" definition varies by source.
// Vatican Annuario (baptismal records) = higher. Pew self-ID = lower.
// Countries marked [est] = estimated from total population × % Catholic.
// Countries marked [cen] = national census. Countries marked [chr] = Church rolls.
// Countries marked [unc] = highly uncertain (restricted/closed state).

export interface CountryEntry {
  name: string;
  region: string;
  notes?: string;
  data: { year: number; population: number }[];
}

export const globalCatholicData: Record<string, CountryEntry> = {

  // ══════════════════════════════════════════════════
  // LATIN AMERICA — SOUTH AMERICA
  // ══════════════════════════════════════════════════

  "BRA": { name: "Brazil",      region: "Latin America",
    notes: "IBGE census; 2022 IBGE ~56.7% Catholic",
    data: [ { year: 1980, population: 96800000 }, { year: 2000, population: 125000000 }, { year: 2020, population: 105000000 } ] },

  "MEX": { name: "Mexico",      region: "Latin America",
    notes: "INEGI census; 2020 exact: 90,224,559",
    data: [ { year: 1980, population: 60300000 }, { year: 2000, population: 84800000 }, { year: 2020, population: 90224559 } ] },

  "ARG": { name: "Argentina",   region: "Latin America",
    notes: "[est] ~90% → ~62% Catholic (surveys, no religious census)",
    data: [ { year: 1980, population: 26000000 }, { year: 2000, population: 31000000 }, { year: 2020, population: 28500000 } ] },

  "COL": { name: "Colombia",    region: "Latin America",
    notes: "[est] ~95% → ~75% Catholic",
    data: [ { year: 1980, population: 23000000 }, { year: 2000, population: 34500000 }, { year: 2020, population: 38500000 } ] },

  "PER": { name: "Peru",        region: "Latin America",
    notes: "[est] ~92% → ~75% Catholic",
    data: [ { year: 1980, population: 15500000 }, { year: 2000, population: 22500000 }, { year: 2020, population: 24500000 } ] },

  "VEN": { name: "Venezuela",   region: "Latin America",
    notes: "[est] ~92% → ~88% Catholic",
    data: [ { year: 1980, population: 15700000 }, { year: 2000, population: 21500000 }, { year: 2020, population: 25500000 } ] },

  "CHL": { name: "Chile",       region: "Latin America",
    notes: "[est] Sharp decline: ~80% → ~44% (2020 survey)",
    data: [ { year: 1980, population: 10000000 }, { year: 2000, population: 11200000 }, { year: 2020, population: 8300000 } ] },

  "ECU": { name: "Ecuador",     region: "Latin America",
    notes: "[est] ~95% → ~74% Catholic",
    data: [ { year: 1980, population: 7700000 }, { year: 2000, population: 10100000 }, { year: 2020, population: 13000000 } ] },

  "BOL": { name: "Bolivia",     region: "Latin America",
    notes: "[est] ~95% → ~72% Catholic",
    data: [ { year: 1980, population: 5200000 }, { year: 2000, population: 6800000 }, { year: 2020, population: 8200000 } ] },

  "PRY": { name: "Paraguay",    region: "Latin America",
    notes: "[est] ~96% → ~88% Catholic",
    data: [ { year: 1980, population: 2800000 }, { year: 2000, population: 4900000 }, { year: 2020, population: 6300000 } ] },

  "URY": { name: "Uruguay",     region: "Latin America",
    notes: "[est] Historically secular; ~57% → ~44% Catholic",
    data: [ { year: 1980, population: 1700000 }, { year: 2000, population: 1600000 }, { year: 2020, population: 1500000 } ] },

  // ══════════════════════════════════════════════════
  // LATIN AMERICA — CENTRAL AMERICA & CARIBBEAN
  // ══════════════════════════════════════════════════

  "GTM": { name: "Guatemala",         region: "Central America",
    notes: "[est] Dramatic shift: ~95% → ~45% due to evangelical growth",
    data: [ { year: 1980, population: 6200000 }, { year: 2000, population: 6800000 }, { year: 2020, population: 7900000 } ] },

  "HND": { name: "Honduras",          region: "Central America",
    notes: "[est] ~95% → ~46% Catholic",
    data: [ { year: 1980, population: 3300000 }, { year: 2000, population: 5600000 }, { year: 2020, population: 4700000 } ] },

  "SLV": { name: "El Salvador",       region: "Central America",
    notes: "[est] ~95% → ~43% Catholic",
    data: [ { year: 1980, population: 4400000 }, { year: 2000, population: 4700000 }, { year: 2020, population: 2700000 } ] },

  "NIC": { name: "Nicaragua",         region: "Central America",
    notes: "[est] ~93% → ~55% Catholic",
    data: [ { year: 1980, population: 2500000 }, { year: 2000, population: 4000000 }, { year: 2020, population: 3400000 } ] },

  "CRI": { name: "Costa Rica",        region: "Central America",
    notes: "[est] ~90% → ~50% Catholic",
    data: [ { year: 1980, population: 2100000 }, { year: 2000, population: 3100000 }, { year: 2020, population: 2600000 } ] },

  "PAN": { name: "Panama",            region: "Central America",
    notes: "[est] ~87% → ~72% Catholic",
    data: [ { year: 1980, population: 1800000 }, { year: 2000, population: 2600000 }, { year: 2020, population: 3100000 } ] },

  "CUB": { name: "Cuba",              region: "Caribbean",
    notes: "[est/unc] Communist suppression; wide range of estimates",
    data: [ { year: 1980, population: 4100000 }, { year: 2000, population: 5000000 }, { year: 2020, population: 5600000 } ] },

  "DOM": { name: "Dominican Republic", region: "Caribbean",
    notes: "[est] ~89% → ~50% Catholic",
    data: [ { year: 1980, population: 5100000 }, { year: 2000, population: 7400000 }, { year: 2020, population: 5300000 } ] },

  "HTI": { name: "Haiti",             region: "Caribbean",
    notes: "[est] Vodou syncretism; ~78% → ~58% Catholic",
    data: [ { year: 1980, population: 4000000 }, { year: 2000, population: 5600000 }, { year: 2020, population: 7300000 } ] },

  // ══════════════════════════════════════════════════
  // EUROPE — WESTERN
  // ══════════════════════════════════════════════════

  "ITA": { name: "Italy",       region: "Europe",
    notes: "[est] ISTAT surveys; ~92% → ~82% Catholic",
    data: [ { year: 1980, population: 52000000 }, { year: 2000, population: 50000000 }, { year: 2020, population: 49000000 } ] },

  "ESP": { name: "Spain",       region: "Europe",
    notes: "[est] Strong secularization; ~93% → ~60% (CIS surveys)",
    data: [ { year: 1980, population: 35000000 }, { year: 2000, population: 35500000 }, { year: 2020, population: 28000000 } ] },

  "FRA": { name: "France",      region: "Europe",
    notes: "[est] Laïcité; cultural Catholics included; ~75% → ~38%",
    data: [ { year: 1980, population: 40000000 }, { year: 2000, population: 35000000 }, { year: 2020, population: 25000000 } ] },

  "DEU": { name: "Germany",     region: "Europe",
    notes: "[chr] Kirchensteuer system; Deutsche Bischofskonferenz official data",
    data: [ { year: 1980, population: 29900000 }, { year: 2000, population: 27500000 }, { year: 2020, population: 22600000 } ] },

  "POL": { name: "Poland",      region: "Europe",
    notes: "[est] Strong national-Catholic identity; 2021 census ~77%",
    data: [ { year: 1980, population: 35000000 }, { year: 2000, population: 36000000 }, { year: 2020, population: 30000000 } ] },

  "PRT": { name: "Portugal",    region: "Europe",
    notes: "[est] 2021 census ~80% Catholic",
    data: [ { year: 1980, population: 9200000 }, { year: 2000, population: 9100000 }, { year: 2020, population: 8300000 } ] },

  "IRL": { name: "Ireland",     region: "Europe",
    notes: "[cen] 2022 census: 69% Catholic; rapid secularization since 1990s",
    data: [ { year: 1980, population: 3450000 }, { year: 2000, population: 3700000 }, { year: 2020, population: 3600000 } ] },

  "AUT": { name: "Austria",     region: "Europe",
    notes: "[chr] Statistik Austria official church membership",
    data: [ { year: 1980, population: 6370000 }, { year: 2000, population: 5910000 }, { year: 2020, population: 4930000 } ] },

  "BEL": { name: "Belgium",     region: "Europe",
    notes: "[est] High nominal but very low practice; ~83% → ~50%",
    data: [ { year: 1980, population: 8200000 }, { year: 2000, population: 7200000 }, { year: 2020, population: 5500000 } ] },

  "NLD": { name: "Netherlands", region: "Europe",
    notes: "[chr] Church membership records; major secularization",
    data: [ { year: 1980, population: 5200000 }, { year: 2000, population: 5100000 }, { year: 2020, population: 3600000 } ] },

  "CHE": { name: "Switzerland", region: "Europe",
    notes: "[chr] Swiss Federal Statistics; ~36% → ~33% Catholic",
    data: [ { year: 1980, population: 2900000 }, { year: 2000, population: 3100000 }, { year: 2020, population: 2900000 } ] },

  "MLT": { name: "Malta",       region: "Europe",
    notes: "[est] One of Europe's most Catholic nations; ~97% → ~88%",
    data: [ { year: 1980, population: 330000 }, { year: 2000, population: 360000 }, { year: 2020, population: 420000 } ] },

  // ══════════════════════════════════════════════════
  // EUROPE — CENTRAL & EASTERN
  // ══════════════════════════════════════════════════

  "HUN": { name: "Hungary",         region: "Europe",
    notes: "[est] 2022 census: ~29% Catholic; Soviet era suppressed data",
    data: [ { year: 1980, population: 6800000 }, { year: 2000, population: 5800000 }, { year: 2020, population: 3200000 } ] },

  "CZE": { name: "Czech Republic",  region: "Europe",
    notes: "[cen] Most secular EU country; 2021 census: 9% (~910K)",
    data: [ { year: 1980, population: 5000000 }, { year: 2000, population: 3000000 }, { year: 2020, population: 1100000 } ] },

  "SVK": { name: "Slovakia",        region: "Europe",
    notes: "[cen] 2021 census: ~56% Roman Catholic (~3.1M)",
    data: [ { year: 1980, population: 3800000 }, { year: 2000, population: 4000000 }, { year: 2020, population: 3100000 } ] },

  "HRV": { name: "Croatia",         region: "Europe",
    notes: "[est] Strong national-Catholic identity; ~87%",
    data: [ { year: 1980, population: 3600000 }, { year: 2000, population: 3800000 }, { year: 2020, population: 3500000 } ] },

  "SVN": { name: "Slovenia",        region: "Europe",
    notes: "[est] 2002 census: ~58% Catholic; secularization ongoing",
    data: [ { year: 1980, population: 1350000 }, { year: 2000, population: 1150000 }, { year: 2020, population: 1100000 } ] },

  "LTU": { name: "Lithuania",       region: "Europe",
    notes: "[est] Strong Catholic tradition; ~74%",
    data: [ { year: 1980, population: 2100000 }, { year: 2000, population: 2300000 }, { year: 2020, population: 2100000 } ] },

  "LVA": { name: "Latvia",          region: "Europe",
    notes: "[est] Catholic minority ~21%; alongside Lutherans and Orthodox",
    data: [ { year: 1980, population: 480000 }, { year: 2000, population: 500000 }, { year: 2020, population: 430000 } ] },

  "ROU": { name: "Romania",         region: "Europe",
    notes: "[cen] Latin + Greek Catholic; 2021 census: ~741K + 115K",
    data: [ { year: 1980, population: 1300000 }, { year: 2000, population: 1200000 }, { year: 2020, population: 860000 } ] },

  // ══════════════════════════════════════════════════
  // NORTH AMERICA
  // ══════════════════════════════════════════════════

  "USA": { name: "United States", region: "North America",
    notes: "[chr] Official Catholic Directory; Pew self-ID is ~52M adults",
    data: [ { year: 1980, population: 53000000 }, { year: 2000, population: 62000000 }, { year: 2020, population: 72000000 } ] },

  "CAN": { name: "Canada",        region: "North America",
    notes: "[cen] Statistics Canada; 2021 census: 10.9M",
    data: [ { year: 1980, population: 11400000 }, { year: 2000, population: 12800000 }, { year: 2020, population: 10900000 } ] },

  // ══════════════════════════════════════════════════
  // ASIA — SOUTHEAST
  // ══════════════════════════════════════════════════

  "PHL": { name: "Philippines",     region: "Asia",
    notes: "[cen] PSA census; largest Catholic nation in Asia",
    data: [ { year: 1980, population: 39000000 }, { year: 2000, population: 61860000 }, { year: 2020, population: 85645362 } ] },

  "VNM": { name: "Vietnam",         region: "Asia",
    notes: "[chr] Post-reunification restrictions; ~7% of population",
    data: [ { year: 1980, population: 2500000 }, { year: 2000, population: 5000000 }, { year: 2020, population: 7000000 } ] },

  "IDN": { name: "Indonesia",       region: "Asia",
    notes: "[est] ~3% Catholic; concentrated in Flores, Papua, East Nusa Tenggara",
    data: [ { year: 1980, population: 3000000 }, { year: 2000, population: 6000000 }, { year: 2020, population: 8300000 } ] },

  "TLS": { name: "Timor-Leste",     region: "Asia",
    notes: "[est] Massive growth during Indonesian occupation; ~97% Catholic",
    data: [ { year: 1980, population: 530000 }, { year: 2000, population: 830000 }, { year: 2020, population: 1340000 } ] },

  // ══════════════════════════════════════════════════
  // ASIA — EAST
  // ══════════════════════════════════════════════════

  "KOR": { name: "South Korea",   region: "Asia",
    notes: "[chr] Explosive growth; ~3% → ~11% Catholic",
    data: [ { year: 1980, population: 1200000 }, { year: 2000, population: 4000000 }, { year: 2020, population: 5800000 } ] },

  "IND": { name: "India",         region: "Asia",
    notes: "[est] ~1.5% Catholic; concentrated in Kerala, Goa, Northeast",
    data: [ { year: 1980, population: 13000000 }, { year: 2000, population: 17000000 }, { year: 2020, population: 19000000 } ] },

  "CHN": { name: "China",         region: "Asia",
    notes: "[unc] Split between state CPCA & underground Church. Estimates range 6M–12M",
    data: [ { year: 1980, population: 3000000 }, { year: 2000, population: 5000000 }, { year: 2020, population: 10000000 } ] },

  "JPN": { name: "Japan",         region: "Asia",
    notes: "[chr] Very small stable minority; ~0.35%",
    data: [ { year: 1980, population: 390000 }, { year: 2000, population: 450000 }, { year: 2020, population: 430000 } ] },

  "LBN": { name: "Lebanon",       region: "Asia",
    notes: "[est] Maronite + Latin + other Eastern Catholics; ~35% Christian total",
    data: [ { year: 1980, population: 1200000 }, { year: 2000, population: 1000000 }, { year: 2020, population: 900000 } ] },

  "PRK": { name: "North Korea",   region: "Asia",
    notes: "[unc] Open Doors/ACN estimates; state claims ~800 (propaganda). Real community likely 1,000–10,000",
    data: [ { year: 1980, population: 3000 }, { year: 2000, population: 3000 }, { year: 2020, population: 3000 } ] },

  // ══════════════════════════════════════════════════
  // AFRICA — EAST
  // ══════════════════════════════════════════════════

  "KEN": { name: "Kenya",     region: "Africa",
    notes: "[cen] 2019 Kenya census: 9,726,169 Catholics (~20.6%)",
    data: [ { year: 1980, population: 2500000 }, { year: 2000, population: 5700000 }, { year: 2020, population: 9730000 } ] },

  "TZA": { name: "Tanzania",  region: "Africa",
    notes: "[est] ~33% Catholic; strong growth",
    data: [ { year: 1980, population: 3500000 }, { year: 2000, population: 9500000 }, { year: 2020, population: 19000000 } ] },

  "UGA": { name: "Uganda",    region: "Africa",
    notes: "[est] ~40% Catholic; strong growth",
    data: [ { year: 1980, population: 4700000 }, { year: 2000, population: 8500000 }, { year: 2020, population: 16500000 } ] },

  "RWA": { name: "Rwanda",    region: "Africa",
    notes: "[est] ~44% Catholic; affected by 1994 genocide",
    data: [ { year: 1980, population: 2200000 }, { year: 2000, population: 3500000 }, { year: 2020, population: 5500000 } ] },

  "BDI": { name: "Burundi",   region: "Africa",
    notes: "[est] ~60%+ Catholic; one of highest rates in Africa",
    data: [ { year: 1980, population: 2300000 }, { year: 2000, population: 3800000 }, { year: 2020, population: 7200000 } ] },

  "ETH": { name: "Ethiopia",  region: "Africa",
    notes: "[est] Predominantly Ethiopian Orthodox; Catholics <2%",
    data: [ { year: 1980, population: 500000 }, { year: 2000, population: 700000 }, { year: 2020, population: 750000 } ] },

  // ══════════════════════════════════════════════════
  // AFRICA — WEST & CENTRAL
  // ══════════════════════════════════════════════════

  "COD": { name: "DR Congo",   region: "Africa",
    notes: "[chr] Vatican 2021 Annuario: 52.1M; largest Catholic country in Africa",
    data: [ { year: 1980, population: 15000000 }, { year: 2000, population: 26000000 }, { year: 2020, population: 52000000 } ] },

  "NGA": { name: "Nigeria",    region: "Africa",
    notes: "[chr] Vatican 2025 Pontifical Yearbook: ~35M",
    data: [ { year: 1980, population: 8000000 }, { year: 2000, population: 15000000 }, { year: 2020, population: 35000000 } ] },

  "GHA": { name: "Ghana",      region: "Africa",
    notes: "[cen] 2021 census: ~10.1% (~3.2M)",
    data: [ { year: 1980, population: 1000000 }, { year: 2000, population: 2400000 }, { year: 2020, population: 3200000 } ] },

  "CMR": { name: "Cameroon",   region: "Africa",
    notes: "[est] ~29–36% Catholic",
    data: [ { year: 1980, population: 2200000 }, { year: 2000, population: 4200000 }, { year: 2020, population: 8000000 } ] },

  // ══════════════════════════════════════════════════
  // AFRICA — SOUTHERN
  // ══════════════════════════════════════════════════

  "AGO": { name: "Angola",     region: "Africa",
    notes: "[est] ~41% Catholic; Portuguese colonial legacy",
    data: [ { year: 1980, population: 2700000 }, { year: 2000, population: 6500000 }, { year: 2020, population: 16500000 } ] },

  "MOZ": { name: "Mozambique", region: "Africa",
    notes: "[est] Post-Marxist religious revival; ~28% Catholic",
    data: [ { year: 1980, population: 1200000 }, { year: 2000, population: 3500000 }, { year: 2020, population: 8500000 } ] },

  "ZMB": { name: "Zambia",     region: "Africa",
    notes: "[cen] 2022 census: ~17.9% Catholic",
    data: [ { year: 1980, population: 1500000 }, { year: 2000, population: 2700000 }, { year: 2020, population: 3400000 } ] },

  "MWI": { name: "Malawi",     region: "Africa",
    notes: "[est] ~21% Catholic (2018 census estimate)",
    data: [ { year: 1980, population: 800000 }, { year: 2000, population: 1700000 }, { year: 2020, population: 4000000 } ] },

  "MDG": { name: "Madagascar", region: "Africa",
    notes: "[est] ~25% Catholic; French colonial legacy",
    data: [ { year: 1980, population: 2200000 }, { year: 2000, population: 3700000 }, { year: 2020, population: 7000000 } ] },

  "ZAF": { name: "South Africa", region: "Africa",
    notes: "[est] ~7% Catholic; immigration and urban evangelization",
    data: [ { year: 1980, population: 2500000 }, { year: 2000, population: 3500000 }, { year: 2020, population: 4000000 } ] },

  // ══════════════════════════════════════════════════
  // OCEANIA
  // ══════════════════════════════════════════════════

  "AUS": { name: "Australia",         region: "Oceania",
    notes: "[cen] ABS census; 2021: 5.1M (~20%)",
    data: [ { year: 1980, population: 4000000 }, { year: 2000, population: 5000000 }, { year: 2020, population: 5100000 } ] },

  "NZL": { name: "New Zealand",       region: "Oceania",
    notes: "[cen] Stats NZ; 2018 census: ~9.5%",
    data: [ { year: 1980, population: 450000 }, { year: 2000, population: 490000 }, { year: 2020, population: 470000 } ] },

  "PNG": { name: "Papua New Guinea",  region: "Oceania",
    notes: "[est] ~27% Catholic; strong missionary presence",
    data: [ { year: 1980, population: 800000 }, { year: 2000, population: 1400000 }, { year: 2020, population: 2700000 } ] },

  // ══════════════════════════════════════════════════
  // NEW WIKIPEDIA IMPORT (Auto-generated estimates for 1980/2000)
  // ══════════════════════════════════════════════════

  "ALB": { name: "Albania", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 115477 }, { year: 2000, population: 152558 }, { year: 2020, population: 201530 } ] },

  "DZA": { name: "Algeria", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 5157 }, { year: 2000, population: 6813 }, { year: 2020, population: 9000 } ] },

  "AND": { name: "Andorra", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 35377 }, { year: 2000, population: 46737 }, { year: 2020, population: 61740 } ] },

  "ATG": { name: "Antigua and Barbuda", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 2723 }, { year: 2000, population: 3597 }, { year: 2020, population: 4752 } ] },

  "ARM": { name: "Armenia", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 10248 }, { year: 2000, population: 13538 }, { year: 2020, population: 17884 } ] },

  "AZE": { name: "Azerbaijan", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 327 }, { year: 2000, population: 431 }, { year: 2020, population: 570 } ] },

  "BHS": { name: "Bahamas", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 22691 }, { year: 2000, population: 29977 }, { year: 2020, population: 39600 } ] },

  "BHR": { name: "Bahrain", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 45840 }, { year: 2000, population: 60560 }, { year: 2020, population: 80000 } ] },

  "BGD": { name: "Bangladesh", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 63030 }, { year: 2000, population: 83270 }, { year: 2020, population: 110000 } ] },

  "BRB": { name: "Barbados", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 5730 }, { year: 2000, population: 7570 }, { year: 2020, population: 10000 } ] },

  "BLR": { name: "Belarus", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 386488 }, { year: 2000, population: 510597 }, { year: 2020, population: 674500 } ] },

  "BLZ": { name: "Belize", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 76553 }, { year: 2000, population: 101135 }, { year: 2020, population: 133600 } ] },

  "BEN": { name: "Benin", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 1137042 }, { year: 2000, population: 1502165 }, { year: 2020, population: 1984366 } ] },

  "BTN": { name: "Bhutan", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 767 }, { year: 2000, population: 1014 }, { year: 2020, population: 1339 } ] },

  "BIH": { name: "Bosnia and Herzegovina", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 189815 }, { year: 2000, population: 250768 }, { year: 2020, population: 331266 } ] },

  "BWA": { name: "Botswana", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 46049 }, { year: 2000, population: 60836 }, { year: 2020, population: 80365 } ] },

  "BRN": { name: "Brunei", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 22180 }, { year: 2000, population: 29303 }, { year: 2020, population: 38709 } ] },

  "BGR": { name: "Bulgaria", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 22180 }, { year: 2000, population: 29303 }, { year: 2020, population: 38709 } ] },

  "BFA": { name: "Burkina Faso", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 2361640 }, { year: 2000, population: 3120003 }, { year: 2020, population: 4121536 } ] },

  "CPV": { name: "Cabo Verde", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 226822 }, { year: 2000, population: 299658 }, { year: 2020, population: 395850 } ] },

  "CAF": { name: "Central African Republic", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 544335 }, { year: 2000, population: 719130 }, { year: 2020, population: 949974 } ] },

  "TCD": { name: "Chad", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 1443960 }, { year: 2000, population: 1907640 }, { year: 2020, population: 2520000 } ] },

  "COM": { name: "Comoros", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 917 }, { year: 2000, population: 1211 }, { year: 2020, population: 1600 } ] },

  "CYP": { name: "Cyprus", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 7942 }, { year: 2000, population: 10492 }, { year: 2020, population: 13860 } ] },

  "CIV": { name: "Côte d'Ivoire", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 2918289 }, { year: 2000, population: 3855401 }, { year: 2020, population: 5093000 } ] },

  "DNK": { name: "Denmark", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 33234 }, { year: 2000, population: 43906 }, { year: 2020, population: 58000 } ] },

  "DJI": { name: "Djibouti", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 546 }, { year: 2000, population: 721 }, { year: 2020, population: 953 } ] },

  "DMA": { name: "Dominica", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 23816 }, { year: 2000, population: 31464 }, { year: 2020, population: 41564 } ] },

  "GNQ": { name: "Equatorial Guinea", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 807930 }, { year: 2000, population: 1067370 }, { year: 2020, population: 1410000 } ] },

  "EGY": { name: "Egypt", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 114600 }, { year: 2000, population: 151400 }, { year: 2020, population: 200000 } ] },

  "ERI": { name: "Eritrea", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 86255 }, { year: 2000, population: 113953 }, { year: 2020, population: 150532 } ] },

  "EST": { name: "Estonia", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 4979 }, { year: 2000, population: 6578 }, { year: 2020, population: 8690 } ] },

  "FJI": { name: "Fiji", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 46070 }, { year: 2000, population: 60864 }, { year: 2020, population: 80401 } ] },

  "FIN": { name: "Finland", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 9589 }, { year: 2000, population: 12668 }, { year: 2020, population: 16734 } ] },

  "GAB": { name: "Gabon", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 398006 }, { year: 2000, population: 525812 }, { year: 2020, population: 694600 } ] },

  "GMB": { name: "Gambia", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 19171 }, { year: 2000, population: 25328 }, { year: 2020, population: 33458 } ] },

  "GEO": { name: "Georgia", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 11002 }, { year: 2000, population: 14534 }, { year: 2020, population: 19200 } ] },

  "GRC": { name: "Greece", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 143250 }, { year: 2000, population: 189250 }, { year: 2020, population: 250000 } ] },

  "GRD": { name: "Grenada", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 25785 }, { year: 2000, population: 34065 }, { year: 2020, population: 45000 } ] },

  "GIN": { name: "Guinea", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 141052 }, { year: 2000, population: 186346 }, { year: 2020, population: 246164 } ] },

  "GNB": { name: "Guinea-Bissau", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 72213 }, { year: 2000, population: 95402 }, { year: 2020, population: 126026 } ] },

  "GUY": { name: "Guyana", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 30388 }, { year: 2000, population: 40147 }, { year: 2020, population: 53034 } ] },

  "ISL": { name: "Iceland", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 8915 }, { year: 2000, population: 11777 }, { year: 2020, population: 15558 } ] },

  "IRN": { name: "Iran", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 1146 }, { year: 2000, population: 1514 }, { year: 2020, population: 2000 } ] },

  "IRQ": { name: "Iraq", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 57300 }, { year: 2000, population: 75700 }, { year: 2020, population: 100000 } ] },

  "ISR": { name: "Israel", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 68760 }, { year: 2000, population: 90840 }, { year: 2020, population: 120000 } ] },

  "JAM": { name: "Jamaica", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 34011 }, { year: 2000, population: 44932 }, { year: 2020, population: 59356 } ] },

  "JOR": { name: "Jordan", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 25212 }, { year: 2000, population: 33308 }, { year: 2020, population: 44000 } ] },

  "KAZ": { name: "Kazakhstan", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 52209 }, { year: 2000, population: 68974 }, { year: 2020, population: 91115 } ] },

  "KIR": { name: "Kiribati", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 40301 }, { year: 2000, population: 53242 }, { year: 2020, population: 70333 } ] },

  "XKX": { name: "Kosovo", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 15938 }, { year: 2000, population: 21056 }, { year: 2020, population: 27815 } ] },

  "KWT": { name: "Kuwait", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 155856 }, { year: 2000, population: 205904 }, { year: 2020, population: 272000 } ] },

  "KGZ": { name: "Kyrgyzstan", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 2949 }, { year: 2000, population: 3896 }, { year: 2020, population: 5146 } ] },

  "LSO": { name: "Lesotho", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 542058 }, { year: 2000, population: 716122 }, { year: 2020, population: 946000 } ] },

  "LBR": { name: "Liberia", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 107746 }, { year: 2000, population: 142346 }, { year: 2020, population: 188039 } ] },

  "LBY": { name: "Libya", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 23125 }, { year: 2000, population: 30551 }, { year: 2020, population: 40358 } ] },

  "LIE": { name: "Liechtenstein", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 16044 }, { year: 2000, population: 21196 }, { year: 2020, population: 28000 } ] },

  "LUX": { name: "Luxembourg", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 181641 }, { year: 2000, population: 239969 }, { year: 2020, population: 317000 } ] },

  "MYS": { name: "Malaysia", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 762090 }, { year: 2000, population: 1006810 }, { year: 2020, population: 1330000 } ] },

  "MDV": { name: "Maldives", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 46 }, { year: 2000, population: 61 }, { year: 2020, population: 80 } ] },

  "MLI": { name: "Mali", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 108463 }, { year: 2000, population: 143292 }, { year: 2020, population: 189289 } ] },

  "MHL": { name: "Marshall Islands", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 2984 }, { year: 2000, population: 3942 }, { year: 2020, population: 5208 } ] },

  "MRT": { name: "Mauritania", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 1768 }, { year: 2000, population: 2336 }, { year: 2020, population: 3086 } ] },

  "MUS": { name: "Mauritius", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 176206 }, { year: 2000, population: 232789 }, { year: 2020, population: 307515 } ] },

  "MCO": { name: "Monaco", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 17190 }, { year: 2000, population: 22710 }, { year: 2020, population: 30000 } ] },

  "MNG": { name: "Mongolia", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 639 }, { year: 2000, population: 845 }, { year: 2020, population: 1116 } ] },

  "MNE": { name: "Montenegro", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 11694 }, { year: 2000, population: 15449 }, { year: 2020, population: 20408 } ] },

  "MAR": { name: "Morocco", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 13126 }, { year: 2000, population: 17341 }, { year: 2020, population: 22908 } ] },

  "MMR": { name: "Myanmar", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 258165 }, { year: 2000, population: 341066 }, { year: 2020, population: 450549 } ] },

  "NAM": { name: "Namibia", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 401100 }, { year: 2000, population: 529900 }, { year: 2020, population: 700000 } ] },

  "NRU": { name: "Nauru", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 2269 }, { year: 2000, population: 2997 }, { year: 2020, population: 3959 } ] },

  "NPL": { name: "Nepal", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 4757 }, { year: 2000, population: 6285 }, { year: 2020, population: 8302 } ] },

  "NER": { name: "Niger", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 6684 }, { year: 2000, population: 8830 }, { year: 2020, population: 11665 } ] },

  "MKD": { name: "North Macedonia", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 3865 }, { year: 2000, population: 5107 }, { year: 2020, population: 6746 } ] },

  "NOR": { name: "Norway", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 94691 }, { year: 2000, population: 125097 }, { year: 2020, population: 165254 } ] },

  "OMN": { name: "Oman", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 63030 }, { year: 2000, population: 83270 }, { year: 2020, population: 110000 } ] },

  "PAK": { name: "Pakistan", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 1105890 }, { year: 2000, population: 1461010 }, { year: 2020, population: 1930000 } ] },

  "PLW": { name: "Palau", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 3646 }, { year: 2000, population: 4817 }, { year: 2020, population: 6363 } ] },

  "PSE": { name: "Palestine", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 45840 }, { year: 2000, population: 60560 }, { year: 2020, population: 80000 } ] },

  "QAT": { name: "Qatar", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 200550 }, { year: 2000, population: 264950 }, { year: 2020, population: 350000 } ] },

  "RUS": { name: "Russia", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 424020 }, { year: 2000, population: 560180 }, { year: 2020, population: 740000 } ] },

  "KNA": { name: "Saint Kitts and Nevis", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 1948 }, { year: 2000, population: 2574 }, { year: 2020, population: 3400 } ] },

  "LCA": { name: "Saint Lucia", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 58159 }, { year: 2000, population: 76836 }, { year: 2020, population: 101500 } ] },

  "VCT": { name: "Saint Vincent and the Grenadines", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 4555 }, { year: 2000, population: 6018 }, { year: 2020, population: 7950 } ] },

  "WSM": { name: "Samoa", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 21147 }, { year: 2000, population: 27938 }, { year: 2020, population: 36906 } ] },

  "SMR": { name: "San Marino", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 16044 }, { year: 2000, population: 21196 }, { year: 2020, population: 28000 } ] },

  "STP": { name: "São Tomé and Príncipe", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 68760 }, { year: 2000, population: 90840 }, { year: 2020, population: 120000 } ] },

  "SAU": { name: "Saudi Arabia", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 378432 }, { year: 2000, population: 499952 }, { year: 2020, population: 660439 } ] },

  "SEN": { name: "Senegal", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 223149 }, { year: 2000, population: 294805 }, { year: 2020, population: 389439 } ] },

  "SRB": { name: "Serbia", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 147415 }, { year: 2000, population: 194753 }, { year: 2020, population: 257269 } ] },

  "SYC": { name: "Seychelles", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 36071 }, { year: 2000, population: 47655 }, { year: 2020, population: 62952 } ] },

  "SLE": { name: "Sierra Leone", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 99995 }, { year: 2000, population: 132105 }, { year: 2020, population: 174511 } ] },

  "SGP": { name: "Singapore", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 139056 }, { year: 2000, population: 183710 }, { year: 2020, population: 242681 } ] },

  "SLB": { name: "Solomon Islands", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 82557 }, { year: 2000, population: 109067 }, { year: 2020, population: 144078 } ] },

  "SOM": { name: "Somalia", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 57 }, { year: 2000, population: 76 }, { year: 2020, population: 100 } ] },

  "SSD": { name: "South Sudan", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 2263350 }, { year: 2000, population: 2990150 }, { year: 2020, population: 3950000 } ] },

  "LKA": { name: "Sri Lanka", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 708801 }, { year: 2000, population: 936409 }, { year: 2020, population: 1237000 } ] },

  "SDN": { name: "Sudan", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 171900 }, { year: 2000, population: 227100 }, { year: 2020, population: 300000 } ] },

  "SUR": { name: "Suriname", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 68187 }, { year: 2000, population: 90083 }, { year: 2020, population: 119000 } ] },

  "SWE": { name: "Sweden", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 60738 }, { year: 2000, population: 80242 }, { year: 2020, population: 106000 } ] },

  "TWN": { name: "Taiwan", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 189090 }, { year: 2000, population: 249810 }, { year: 2020, population: 330000 } ] },

  "THA": { name: "Thailand", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 222592 }, { year: 2000, population: 294070 }, { year: 2020, population: 388468 } ] },

  "TGO": { name: "Togo", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 859455 }, { year: 2000, population: 1135440 }, { year: 2020, population: 1499921 } ] },

  "TON": { name: "Tonga", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 7821 }, { year: 2000, population: 10332 }, { year: 2020, population: 13649 } ] },

  "TTO": { name: "Trinidad and Tobago", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 163878 }, { year: 2000, population: 216502 }, { year: 2020, population: 286000 } ] },

  "TUN": { name: "Tunisia", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 12606 }, { year: 2000, population: 16654 }, { year: 2020, population: 22000 } ] },

  "TUR": { name: "Turkey", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 15471 }, { year: 2000, population: 20439 }, { year: 2020, population: 27000 } ] },

  "TKM": { name: "Turkmenistan", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 287 }, { year: 2000, population: 379 }, { year: 2020, population: 500 } ] },

  "TUV": { name: "Tuvalu", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 29 }, { year: 2000, population: 38 }, { year: 2020, population: 50 } ] },

  "UKR": { name: "Ukraine", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 1926426 }, { year: 2000, population: 2545034 }, { year: 2020, population: 3362000 } ] },

  "ARE": { name: "United Arab Emirates", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 73436 }, { year: 2000, population: 97017 }, { year: 2020, population: 128160 } ] },

  "GBR": { name: "United Kingdom", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 3266100 }, { year: 2000, population: 4314900 }, { year: 2020, population: 5700000 } ] },

  "UZB": { name: "Uzbekistan", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 1539 }, { year: 2000, population: 2033 }, { year: 2020, population: 2685 } ] },

  "VAT": { name: "Vatican City", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 482 }, { year: 2000, population: 637 }, { year: 2020, population: 842 } ] },

  "VUT": { name: "Vanuatu", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 20400 }, { year: 2000, population: 26951 }, { year: 2020, population: 35602 } ] },

  "ESH": { name: "Western Sahara", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 93 }, { year: 2000, population: 123 }, { year: 2020, population: 163 } ] },

  "YEM": { name: "Yemen", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 2375 }, { year: 2000, population: 3138 }, { year: 2020, population: 4145 } ] },

  "ZWE": { name: "Zimbabwe", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 558955 }, { year: 2000, population: 738444 }, { year: 2020, population: 975488 } ] },

  "AIA": { name: "Anguilla", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 461 }, { year: 2000, population: 609 }, { year: 2020, population: 804 } ] },

  "ABW": { name: "Aruba", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 43814 }, { year: 2000, population: 57883 }, { year: 2020, population: 76464 } ] },

  "CYM": { name: "Cayman Islands", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 5356 }, { year: 2000, population: 7076 }, { year: 2020, population: 9348 } ] },

  "CUW": { name: "Curaçao", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 59310 }, { year: 2000, population: 78355 }, { year: 2020, population: 103507 } ] },

  "GUF": { name: "French Guiana", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 95404 }, { year: 2000, population: 126041 }, { year: 2020, population: 166500 } ] },

  "GRL": { name: "Greenland", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 64 }, { year: 2000, population: 84 }, { year: 2020, population: 111 } ] },

  "GLP": { name: "Guadeloupe", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 197963 }, { year: 2000, population: 261533 }, { year: 2020, population: 345486 } ] },

  "GUM": { name: "Guam", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 75309 }, { year: 2000, population: 99493 }, { year: 2020, population: 131430 } ] },

  "MNP": { name: "Northern Mariana Islands", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 18974 }, { year: 2000, population: 25067 }, { year: 2020, population: 33113 } ] },

  "HKG": { name: "Hong Kong", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 225762 }, { year: 2000, population: 298258 }, { year: 2020, population: 394000 } ] },

  "MTQ": { name: "Martinique", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 178776 }, { year: 2000, population: 236184 }, { year: 2020, population: 312000 } ] },

  "NCL": { name: "New Caledonia", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 85950 }, { year: 2000, population: 113550 }, { year: 2020, population: 150000 } ] },

  "PRI": { name: "Puerto Rico", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 1146000 }, { year: 2000, population: 1514000 }, { year: 2020, population: 2000000 } ] },

  "SPM": { name: "Saint Pierre and Miquelon", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 3209 }, { year: 2000, population: 4239 }, { year: 2020, population: 5600 } ] },

  "TCA": { name: "Turks and Caicos Islands", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 1460 }, { year: 2000, population: 1929 }, { year: 2020, population: 2548 } ] },

  "WLF": { name: "Wallis and Futuna", region: "Global/Other",
    notes: "Wikipedia estimate (projected historical)",
    data: [ { year: 1980, population: 7811 }, { year: 2000, population: 10319 }, { year: 2020, population: 13631 } ] },
};

export default globalCatholicData;
