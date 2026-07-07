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
};

export default globalCatholicData;
