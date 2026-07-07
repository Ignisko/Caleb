export interface CountryEntry {
  name: string;
  region: string;
  notes?: string;
  data: { year: number; population: number; percentage: number }[];
}

export const globalCatholicData: Record<string, CountryEntry> = {
  "ALB": { name: "Albania", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 115477, percentage: 7.9 },
      { year: 2000, population: 152558, percentage: 7.9 },
      { year: 2020, population: 201530, percentage: 7.9 }
    ]
  },

  "DZA": { name: "Algeria", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 5157, percentage: 0.02 },
      { year: 2000, population: 6813, percentage: 0.02 },
      { year: 2020, population: 9000, percentage: 0.02 }
    ]
  },

  "AND": { name: "Andorra", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 35377, percentage: 85.5 },
      { year: 2000, population: 46737, percentage: 85.5 },
      { year: 2020, population: 61740, percentage: 85.5 }
    ]
  },

  "AGO": { name: "Angola", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 9168000, percentage: 44.2 },
      { year: 2000, population: 12112000, percentage: 44.2 },
      { year: 2020, population: 16000000, percentage: 44.2 }
    ]
  },

  "ATG": { name: "Antigua and Barbuda", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 2723, percentage: 5.5 },
      { year: 2000, population: 3597, percentage: 5.5 },
      { year: 2020, population: 4752, percentage: 5.5 }
    ]
  },

  "ARG": { name: "Argentina", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 16617000, percentage: 58 },
      { year: 2000, population: 21953000, percentage: 58 },
      { year: 2020, population: 29000000, percentage: 58 }
    ]
  },

  "ARM": { name: "Armenia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 10248, percentage: 0.61 },
      { year: 2000, population: 13538, percentage: 0.61 },
      { year: 2020, population: 17884, percentage: 0.61 }
    ]
  },

  "AUS": { name: "Australia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 2908548, percentage: 16 },
      { year: 2000, population: 3842532, percentage: 16 },
      { year: 2020, population: 5076000, percentage: 16 }
    ]
  },

  "AUT": { name: "Austria", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 2611161, percentage: 49.6 },
      { year: 2000, population: 3449649, percentage: 49.6 },
      { year: 2020, population: 4557000, percentage: 49.6 }
    ]
  },

  "AZE": { name: "Azerbaijan", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 327, percentage: 0.01 },
      { year: 2000, population: 431, percentage: 0.01 },
      { year: 2020, population: 570, percentage: 0.01 }
    ]
  },

  "BHS": { name: "Bahamas", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 22691, percentage: 12 },
      { year: 2000, population: 29977, percentage: 12 },
      { year: 2020, population: 39600, percentage: 12 }
    ]
  },

  "BHR": { name: "Bahrain", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 45840, percentage: 8.9 },
      { year: 2000, population: 60560, percentage: 8.9 },
      { year: 2020, population: 80000, percentage: 8.9 }
    ]
  },

  "BGD": { name: "Bangladesh", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 63030, percentage: 0.07 },
      { year: 2000, population: 83270, percentage: 0.07 },
      { year: 2020, population: 110000, percentage: 0.07 }
    ]
  },

  "BRB": { name: "Barbados", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 5730, percentage: 4.2 },
      { year: 2000, population: 7570, percentage: 4.2 },
      { year: 2020, population: 10000, percentage: 4.2 }
    ]
  },

  "BLR": { name: "Belarus", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 386488, percentage: 6 },
      { year: 2000, population: 510597, percentage: 6 },
      { year: 2020, population: 674500, percentage: 6 }
    ]
  },

  "BEL": { name: "Belgium", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 2062800, percentage: 31 },
      { year: 2000, population: 2725200, percentage: 31 },
      { year: 2020, population: 3600000, percentage: 31 }
    ]
  },

  "BLZ": { name: "Belize", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 76553, percentage: 40 },
      { year: 2000, population: 101135, percentage: 40 },
      { year: 2020, population: 133600, percentage: 40 }
    ]
  },

  "BEN": { name: "Benin", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1137042, percentage: 25.5 },
      { year: 2000, population: 1502165, percentage: 25.5 },
      { year: 2020, population: 1984366, percentage: 25.5 }
    ]
  },

  "BTN": { name: "Bhutan", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 767, percentage: 0.06 },
      { year: 2000, population: 1014, percentage: 0.06 },
      { year: 2020, population: 1339, percentage: 0.06 }
    ]
  },

  "BOL": { name: "Bolivia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 4572540, percentage: 63 },
      { year: 2000, population: 6040860, percentage: 63 },
      { year: 2020, population: 7980000, percentage: 63 }
    ]
  },

  "BIH": { name: "Bosnia and Herzegovina", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 189815, percentage: 15.19 },
      { year: 2000, population: 250768, percentage: 15.19 },
      { year: 2020, population: 331266, percentage: 15.19 }
    ]
  },

  "BWA": { name: "Botswana", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 46049, percentage: 4.9 },
      { year: 2000, population: 60836, percentage: 4.9 },
      { year: 2020, population: 80365, percentage: 4.9 }
    ]
  },

  "BRA": { name: "Brazil", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 57414600, percentage: 46 },
      { year: 2000, population: 75851400, percentage: 46 },
      { year: 2020, population: 100200000, percentage: 46 }
    ]
  },

  "BRN": { name: "Brunei", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 22180, percentage: 5 },
      { year: 2000, population: 29303, percentage: 5 },
      { year: 2020, population: 38709, percentage: 5 }
    ]
  },

  "BGR": { name: "Bulgaria", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 22180, percentage: 0.6 },
      { year: 2000, population: 29303, percentage: 0.6 },
      { year: 2020, population: 38709, percentage: 0.6 }
    ]
  },

  "BFA": { name: "Burkina Faso", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 2361640, percentage: 20.1 },
      { year: 2000, population: 3120003, percentage: 20.1 },
      { year: 2020, population: 4121536, percentage: 20.1 }
    ]
  },

  "BDI": { name: "Burundi", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 4011000, percentage: 62 },
      { year: 2000, population: 5299000, percentage: 62 },
      { year: 2020, population: 7000000, percentage: 62 }
    ]
  },

  "CPV": { name: "Cabo Verde", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 226822, percentage: 72.5 },
      { year: 2000, population: 299658, percentage: 72.5 },
      { year: 2020, population: 395850, percentage: 72.5 }
    ]
  },

  "CMR": { name: "Cameroon", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 5901900, percentage: 33.1 },
      { year: 2000, population: 7797100, percentage: 33.1 },
      { year: 2020, population: 10300000, percentage: 33.1 }
    ]
  },

  "CAN": { name: "Canada", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 4870500, percentage: 21 },
      { year: 2000, population: 6434500, percentage: 21 },
      { year: 2020, population: 8500000, percentage: 21 }
    ]
  },

  "CAF": { name: "Central African Republic", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 544335, percentage: 28 },
      { year: 2000, population: 719130, percentage: 28 },
      { year: 2020, population: 949974, percentage: 28 }
    ]
  },

  "TCD": { name: "Chad", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1443960, percentage: 18 },
      { year: 2000, population: 1907640, percentage: 18 },
      { year: 2020, population: 2520000, percentage: 18 }
    ]
  },

  "CHL": { name: "Chile", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 5157000, percentage: 45 },
      { year: 2000, population: 6813000, percentage: 45 },
      { year: 2020, population: 9000000, percentage: 45 }
    ]
  },

  "CHN": { name: "China", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 3438000, percentage: 0.43 },
      { year: 2000, population: 4542000, percentage: 0.43 },
      { year: 2020, population: 6000000, percentage: 0.43 }
    ]
  },

  "COL": { name: "Colombia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 17190000, percentage: 56.6 },
      { year: 2000, population: 22710000, percentage: 56.6 },
      { year: 2020, population: 30000000, percentage: 56.6 }
    ]
  },

  "COM": { name: "Comoros", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 917, percentage: 0.2 },
      { year: 2000, population: 1211, percentage: 0.2 },
      { year: 2020, population: 1600, percentage: 0.2 }
    ]
  },

  "CRI": { name: "Costa Rica", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1346550, percentage: 47 },
      { year: 2000, population: 1778950, percentage: 47 },
      { year: 2020, population: 2350000, percentage: 47 }
    ]
  },

  "HRV": { name: "Croatia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1856520, percentage: 83.2 },
      { year: 2000, population: 2452680, percentage: 83.2 },
      { year: 2020, population: 3240000, percentage: 83.2 }
    ]
  },

  "CUB": { name: "Cuba", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 3438000, percentage: 51 },
      { year: 2000, population: 4542000, percentage: 51 },
      { year: 2020, population: 6000000, percentage: 51 }
    ]
  },

  "CYP": { name: "Cyprus", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 7942, percentage: 1.5 },
      { year: 2000, population: 10492, percentage: 1.5 },
      { year: 2020, population: 13860, percentage: 1.5 }
    ]
  },

  "CZE": { name: "Czech Republic", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 564498, percentage: 9.36 },
      { year: 2000, population: 745768, percentage: 9.36 },
      { year: 2020, population: 985162, percentage: 9.36 }
    ]
  },

  "CIV": { name: "Côte d'Ivoire", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 2918289, percentage: 17 },
      { year: 2000, population: 3855401, percentage: 17 },
      { year: 2020, population: 5093000, percentage: 17 }
    ]
  },

  "DJI": { name: "Djibouti", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 546, percentage: 0.2 },
      { year: 2000, population: 721, percentage: 0.2 },
      { year: 2020, population: 953, percentage: 0.2 }
    ]
  },

  "DMA": { name: "Dominica", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 23816, percentage: 58.1 },
      { year: 2000, population: 31464, percentage: 58.1 },
      { year: 2020, population: 41564, percentage: 58.1 }
    ]
  },

  "DOM": { name: "Dominican Republic", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 2860416, percentage: 43 },
      { year: 2000, population: 3778944, percentage: 43 },
      { year: 2020, population: 4992000, percentage: 43 }
    ]
  },

  "TLS": { name: "East Timor", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 697431, percentage: 97.5 },
      { year: 2000, population: 921388, percentage: 97.5 },
      { year: 2020, population: 1217157, percentage: 97.5 }
    ]
  },

  "ECU": { name: "Ecuador", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 6455145, percentage: 65 },
      { year: 2000, population: 8528001, percentage: 65 },
      { year: 2020, population: 11265523, percentage: 65 }
    ]
  },

  "GNQ": { name: "Equatorial Guinea", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 807930, percentage: 80.7 },
      { year: 2000, population: 1067370, percentage: 80.7 },
      { year: 2020, population: 1410000, percentage: 80.7 }
    ]
  },

  "EGY": { name: "Egypt", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 114600, percentage: 0.2 },
      { year: 2000, population: 151400, percentage: 0.2 },
      { year: 2020, population: 200000, percentage: 0.2 }
    ]
  },

  "SLV": { name: "El Salvador", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1564290, percentage: 40 },
      { year: 2000, population: 2066610, percentage: 40 },
      { year: 2020, population: 2730000, percentage: 40 }
    ]
  },

  "ERI": { name: "Eritrea", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 86255, percentage: 3.3 },
      { year: 2000, population: 113953, percentage: 3.3 },
      { year: 2020, population: 150532, percentage: 3.3 }
    ]
  },

  "EST": { name: "Estonia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 4979, percentage: 0.8 },
      { year: 2000, population: 6578, percentage: 0.8 },
      { year: 2020, population: 8690, percentage: 0.8 }
    ]
  },

  "ETH": { name: "Ethiopia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 573000, percentage: 0.7 },
      { year: 2000, population: 757000, percentage: 0.7 },
      { year: 2020, population: 1000000, percentage: 0.7 }
    ]
  },

  "FJI": { name: "Fiji", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 46070, percentage: 9.1 },
      { year: 2000, population: 60864, percentage: 9.1 },
      { year: 2020, population: 80401, percentage: 9.1 }
    ]
  },

  "FIN": { name: "Finland", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 9589, percentage: 0.3 },
      { year: 2000, population: 12668, percentage: 0.3 },
      { year: 2020, population: 16734, percentage: 0.3 }
    ]
  },

  "FRA": { name: "France", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 13752000, percentage: 36 },
      { year: 2000, population: 18168000, percentage: 36 },
      { year: 2020, population: 24000000, percentage: 36 }
    ]
  },

  "GAB": { name: "Gabon", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 398006, percentage: 42 },
      { year: 2000, population: 525812, percentage: 42 },
      { year: 2020, population: 694600, percentage: 42 }
    ]
  },

  "GMB": { name: "Gambia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 19171, percentage: 2.1 },
      { year: 2000, population: 25328, percentage: 2.1 },
      { year: 2020, population: 33458, percentage: 2.1 }
    ]
  },

  "GEO": { name: "Georgia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 11002, percentage: 0.5 },
      { year: 2000, population: 14534, percentage: 0.5 },
      { year: 2020, population: 19200, percentage: 0.5 }
    ]
  },

  "DEU": { name: "Germany", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 11013060, percentage: 21 },
      { year: 2000, population: 14549540, percentage: 21 },
      { year: 2020, population: 19220000, percentage: 21 }
    ]
  },

  "GHA": { name: "Ghana", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1760167, percentage: 10 },
      { year: 2000, population: 2325386, percentage: 10 },
      { year: 2020, population: 3071844, percentage: 10 }
    ]
  },

  "GRC": { name: "Greece", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 143250, percentage: 2.4 },
      { year: 2000, population: 189250, percentage: 2.4 },
      { year: 2020, population: 250000, percentage: 2.4 }
    ]
  },

  "GRD": { name: "Grenada", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 25785, percentage: 39.2 },
      { year: 2000, population: 34065, percentage: 39.2 },
      { year: 2020, population: 45000, percentage: 39.2 }
    ]
  },

  "GTM": { name: "Guatemala", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 4011000, percentage: 39 },
      { year: 2000, population: 5299000, percentage: 39 },
      { year: 2020, population: 7000000, percentage: 39 }
    ]
  },

  "GIN": { name: "Guinea", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 141052, percentage: 2.6 },
      { year: 2000, population: 186346, percentage: 2.6 },
      { year: 2020, population: 246164, percentage: 2.6 }
    ]
  },

  "GNB": { name: "Guinea-Bissau", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 72213, percentage: 8.9 },
      { year: 2000, population: 95402, percentage: 8.9 },
      { year: 2020, population: 126026, percentage: 8.9 }
    ]
  },

  "GUY": { name: "Guyana", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 30388, percentage: 7.1 },
      { year: 2000, population: 40147, percentage: 7.1 },
      { year: 2020, population: 53034, percentage: 7.1 }
    ]
  },

  "HTI": { name: "Haiti", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 3134310, percentage: 54.7 },
      { year: 2000, population: 4140790, percentage: 54.7 },
      { year: 2020, population: 5470000, percentage: 54.7 }
    ]
  },

  "HND": { name: "Honduras", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1865688, percentage: 36 },
      { year: 2000, population: 2464792, percentage: 36 },
      { year: 2020, population: 3256000, percentage: 36 }
    ]
  },

  "HUN": { name: "Hungary", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1608984, percentage: 29.2 },
      { year: 2000, population: 2125656, percentage: 29.2 },
      { year: 2020, population: 2808000, percentage: 29.2 }
    ]
  },

  "ISL": { name: "Iceland", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 8915, percentage: 3.95 },
      { year: 2000, population: 11777, percentage: 3.95 },
      { year: 2020, population: 15558, percentage: 3.95 }
    ]
  },

  "IND": { name: "India", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 7449000, percentage: 0.9 },
      { year: 2000, population: 9841000, percentage: 0.9 },
      { year: 2020, population: 13000000, percentage: 0.9 }
    ]
  },

  "IDN": { name: "Indonesia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 5077925, percentage: 3.07 },
      { year: 2000, population: 6708533, percentage: 3.07 },
      { year: 2020, population: 8861999, percentage: 3.07 }
    ]
  },

  "IRN": { name: "Iran", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1146, percentage: 0.002 },
      { year: 2000, population: 1514, percentage: 0.002 },
      { year: 2020, population: 2000, percentage: 0.002 }
    ]
  },

  "IRQ": { name: "Iraq", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 57300, percentage: 0.2 },
      { year: 2000, population: 75700, percentage: 0.2 },
      { year: 2020, population: 100000, percentage: 0.2 }
    ]
  },

  "IRL": { name: "Ireland", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 2005500, percentage: 69 },
      { year: 2000, population: 2649500, percentage: 69 },
      { year: 2020, population: 3500000, percentage: 69 }
    ]
  },

  "ISR": { name: "Israel", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 68760, percentage: 1.2 },
      { year: 2000, population: 90840, percentage: 1.2 },
      { year: 2020, population: 120000, percentage: 1.2 }
    ]
  },

  "ITA": { name: "Italy", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 22920000, percentage: 66.7 },
      { year: 2000, population: 30280000, percentage: 66.7 },
      { year: 2020, population: 40000000, percentage: 66.7 }
    ]
  },

  "JAM": { name: "Jamaica", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 34011, percentage: 2.2 },
      { year: 2000, population: 44932, percentage: 2.2 },
      { year: 2020, population: 59356, percentage: 2.2 }
    ]
  },

  "JPN": { name: "Japan", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 213156, percentage: 0.3 },
      { year: 2000, population: 281604, percentage: 0.3 },
      { year: 2020, population: 372000, percentage: 0.3 }
    ]
  },

  "JOR": { name: "Jordan", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 25212, percentage: 0.4 },
      { year: 2000, population: 33308, percentage: 0.4 },
      { year: 2020, population: 44000, percentage: 0.4 }
    ]
  },

  "KAZ": { name: "Kazakhstan", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 52209, percentage: 0.6 },
      { year: 2000, population: 68974, percentage: 0.6 },
      { year: 2020, population: 91115, percentage: 0.6 }
    ]
  },

  "KEN": { name: "Kenya", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 5624568, percentage: 20.6 },
      { year: 2000, population: 7430712, percentage: 20.6 },
      { year: 2020, population: 9816000, percentage: 20.6 }
    ]
  },

  "KIR": { name: "Kiribati", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 40301, percentage: 58.9 },
      { year: 2000, population: 53242, percentage: 58.9 },
      { year: 2020, population: 70333, percentage: 58.9 }
    ]
  },

  "XKX": { name: "Kosovo", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 15938, percentage: 1.75 },
      { year: 2000, population: 21056, percentage: 1.75 },
      { year: 2020, population: 27815, percentage: 1.75 }
    ]
  },

  "KWT": { name: "Kuwait", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 155856, percentage: 8.5 },
      { year: 2000, population: 205904, percentage: 8.5 },
      { year: 2020, population: 272000, percentage: 8.5 }
    ]
  },

  "KGZ": { name: "Kyrgyzstan", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 2949, percentage: 0.1 },
      { year: 2000, population: 3896, percentage: 0.1 },
      { year: 2020, population: 5146, percentage: 0.1 }
    ]
  },

  "LVA": { name: "Latvia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 185652, percentage: 18 },
      { year: 2000, population: 245268, percentage: 18 },
      { year: 2020, population: 324000, percentage: 18 }
    ]
  },

  "LBN": { name: "Lebanon", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 874398, percentage: 28.8 },
      { year: 2000, population: 1155182, percentage: 28.8 },
      { year: 2020, population: 1526000, percentage: 28.8 }
    ]
  },

  "LSO": { name: "Lesotho", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 542058, percentage: 39 },
      { year: 2000, population: 716122, percentage: 39 },
      { year: 2020, population: 946000, percentage: 39 }
    ]
  },

  "LBR": { name: "Liberia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 107746, percentage: 5.4 },
      { year: 2000, population: 142346, percentage: 5.4 },
      { year: 2020, population: 188039, percentage: 5.4 }
    ]
  },

  "LBY": { name: "Libya", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 23125, percentage: 0.7 },
      { year: 2000, population: 30551, percentage: 0.7 },
      { year: 2020, population: 40358, percentage: 0.7 }
    ]
  },

  "LIE": { name: "Liechtenstein", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 16044, percentage: 69.6 },
      { year: 2000, population: 21196, percentage: 69.6 },
      { year: 2020, population: 28000, percentage: 69.6 }
    ]
  },

  "LTU": { name: "Lithuania", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1260600, percentage: 74.2 },
      { year: 2000, population: 1665400, percentage: 74.2 },
      { year: 2020, population: 2200000, percentage: 74.2 }
    ]
  },

  "LUX": { name: "Luxembourg", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 181641, percentage: 46 },
      { year: 2000, population: 239969, percentage: 46 },
      { year: 2020, population: 317000, percentage: 46 }
    ]
  },

  "MDG": { name: "Madagascar", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 4520970, percentage: 38.1 },
      { year: 2000, population: 5972730, percentage: 38.1 },
      { year: 2020, population: 7890000, percentage: 38.1 }
    ]
  },

  "MWI": { name: "Malawi", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1735293, percentage: 17.2 },
      { year: 2000, population: 2292525, percentage: 17.2 },
      { year: 2020, population: 3028435, percentage: 17.2 }
    ]
  },

  "MYS": { name: "Malaysia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 762090, percentage: 4.61 },
      { year: 2000, population: 1006810, percentage: 4.61 },
      { year: 2020, population: 1330000, percentage: 4.61 }
    ]
  },

  "MDV": { name: "Maldives", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 46, percentage: 0.02 },
      { year: 2000, population: 61, percentage: 0.02 },
      { year: 2020, population: 80, percentage: 0.02 }
    ]
  },

  "MLI": { name: "Mali", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 108463, percentage: 1.5 },
      { year: 2000, population: 143292, percentage: 1.5 },
      { year: 2020, population: 189289, percentage: 1.5 }
    ]
  },

  "MLT": { name: "Malta", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 213903, percentage: 82.6 },
      { year: 2000, population: 282591, percentage: 82.6 },
      { year: 2020, population: 373304, percentage: 82.6 }
    ]
  },

  "MHL": { name: "Marshall Islands", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 2984, percentage: 8.5 },
      { year: 2000, population: 3942, percentage: 8.5 },
      { year: 2020, population: 5208, percentage: 8.5 }
    ]
  },

  "MUS": { name: "Mauritius", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 176206, percentage: 24.9 },
      { year: 2000, population: 232789, percentage: 24.9 },
      { year: 2020, population: 307515, percentage: 24.9 }
    ]
  },

  "MEX": { name: "Mexico", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 51570000, percentage: 67 },
      { year: 2000, population: 68130000, percentage: 67 },
      { year: 2020, population: 90000000, percentage: 67 }
    ]
  },

  "MCO": { name: "Monaco", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 17190, percentage: 82.3 },
      { year: 2000, population: 22710, percentage: 82.3 },
      { year: 2020, population: 30000, percentage: 82.3 }
    ]
  },

  "MNG": { name: "Mongolia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 639, percentage: 0.04 },
      { year: 2000, population: 845, percentage: 0.04 },
      { year: 2020, population: 1116, percentage: 0.04 }
    ]
  },

  "MNE": { name: "Montenegro", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 11694, percentage: 3.27 },
      { year: 2000, population: 15449, percentage: 3.27 },
      { year: 2020, population: 20408, percentage: 3.27 }
    ]
  },

  "MAR": { name: "Morocco", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 13126, percentage: 0.07 },
      { year: 2000, population: 17341, percentage: 0.07 },
      { year: 2020, population: 22908, percentage: 0.07 }
    ]
  },

  "MOZ": { name: "Mozambique", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 3019710, percentage: 27 },
      { year: 2000, population: 3989390, percentage: 27 },
      { year: 2020, population: 5270000, percentage: 27 }
    ]
  },

  "MMR": { name: "Myanmar", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 258165, percentage: 1.1 },
      { year: 2000, population: 341066, percentage: 1.1 },
      { year: 2020, population: 450549, percentage: 1.1 }
    ]
  },

  "NAM": { name: "Namibia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 401100, percentage: 20 },
      { year: 2000, population: 529900, percentage: 20 },
      { year: 2020, population: 700000, percentage: 20 }
    ]
  },

  "NRU": { name: "Nauru", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 2269, percentage: 33.9 },
      { year: 2000, population: 2997, percentage: 33.9 },
      { year: 2020, population: 3959, percentage: 33.9 }
    ]
  },

  "NPL": { name: "Nepal", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 4757, percentage: 0.03 },
      { year: 2000, population: 6285, percentage: 0.03 },
      { year: 2020, population: 8302, percentage: 0.03 }
    ]
  },

  "NLD": { name: "Netherlands", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1661700, percentage: 16 },
      { year: 2000, population: 2195300, percentage: 16 },
      { year: 2020, population: 2900000, percentage: 16 }
    ]
  },

  "NZL": { name: "New Zealand", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 254985, percentage: 8.9 },
      { year: 2000, population: 336865, percentage: 8.9 },
      { year: 2020, population: 445000, percentage: 8.9 }
    ]
  },

  "NIC": { name: "Nicaragua", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1375200, percentage: 45 },
      { year: 2000, population: 1816800, percentage: 45 },
      { year: 2020, population: 2400000, percentage: 45 }
    ]
  },

  "NGA": { name: "Nigeria", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 13981200, percentage: 10.6 },
      { year: 2000, population: 18470800, percentage: 10.6 },
      { year: 2020, population: 24400000, percentage: 10.6 }
    ]
  },

  "MKD": { name: "North Macedonia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 3865, percentage: 0.4 },
      { year: 2000, population: 5107, percentage: 0.4 },
      { year: 2020, population: 6746, percentage: 0.4 }
    ]
  },

  "NOR": { name: "Norway", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 94691, percentage: 3 },
      { year: 2000, population: 125097, percentage: 3 },
      { year: 2020, population: 165254, percentage: 3 }
    ]
  },

  "OMN": { name: "Oman", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 63030, percentage: 4.1 },
      { year: 2000, population: 83270, percentage: 4.1 },
      { year: 2020, population: 110000, percentage: 4.1 }
    ]
  },

  "PAK": { name: "Pakistan", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1105890, percentage: 0.8 },
      { year: 2000, population: 1461010, percentage: 0.8 },
      { year: 2020, population: 1930000, percentage: 0.8 }
    ]
  },

  "PLW": { name: "Palau", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 3646, percentage: 46.9 },
      { year: 2000, population: 4817, percentage: 46.9 },
      { year: 2020, population: 6363, percentage: 46.9 }
    ]
  },

  "PSE": { name: "Palestine", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 45840, percentage: 2 },
      { year: 2000, population: 60560, percentage: 2 },
      { year: 2020, population: 80000, percentage: 2 }
    ]
  },

  "PAN": { name: "Panama", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1103025, percentage: 52 },
      { year: 2000, population: 1457225, percentage: 52 },
      { year: 2020, population: 1925000, percentage: 52 }
    ]
  },

  "PNG": { name: "Papua New Guinea", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1082970, percentage: 26 },
      { year: 2000, population: 1430730, percentage: 26 },
      { year: 2020, population: 1890000, percentage: 26 }
    ]
  },

  "PRY": { name: "Paraguay", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 2807700, percentage: 72 },
      { year: 2000, population: 3709300, percentage: 72 },
      { year: 2020, population: 4900000, percentage: 72 }
    ]
  },

  "PER": { name: "Peru", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 15313425, percentage: 64 },
      { year: 2000, population: 20230825, percentage: 64 },
      { year: 2020, population: 26725000, percentage: 64 }
    ]
  },

  "PHL": { name: "Philippines", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 50997000, percentage: 78.8 },
      { year: 2000, population: 67373000, percentage: 78.8 },
      { year: 2020, population: 89000000, percentage: 78.8 }
    ]
  },

  "POL": { name: "Poland", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 15661236, percentage: 71.1 },
      { year: 2000, population: 20690324, percentage: 71.1 },
      { year: 2020, population: 27332000, percentage: 71.1 }
    ]
  },

  "PRT": { name: "Portugal", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 4584000, percentage: 80.2 },
      { year: 2000, population: 6056000, percentage: 80.2 },
      { year: 2020, population: 8000000, percentage: 80.2 }
    ]
  },

  "QAT": { name: "Qatar", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 200550, percentage: 10.5 },
      { year: 2000, population: 264950, percentage: 10.5 },
      { year: 2020, population: 350000, percentage: 10.5 }
    ]
  },

  "ROU": { name: "Romania", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 491039, percentage: 4.5 },
      { year: 2000, population: 648719, percentage: 4.5 },
      { year: 2020, population: 856961, percentage: 4.5 }
    ]
  },

  "RWA": { name: "Rwanda", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 3029222, percentage: 39.91 },
      { year: 2000, population: 4001956, percentage: 39.91 },
      { year: 2020, population: 5286600, percentage: 39.91 }
    ]
  },

  "KNA": { name: "Saint Kitts and Nevis", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1948, percentage: 6.7 },
      { year: 2000, population: 2574, percentage: 6.7 },
      { year: 2020, population: 3400, percentage: 6.7 }
    ]
  },

  "LCA": { name: "Saint Lucia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 58159, percentage: 61.3 },
      { year: 2000, population: 76836, percentage: 61.3 },
      { year: 2020, population: 101500, percentage: 61.3 }
    ]
  },

  "VCT": { name: "Saint Vincent and the Grenadines", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 4555, percentage: 7.5 },
      { year: 2000, population: 6018, percentage: 7.5 },
      { year: 2020, population: 7950, percentage: 7.5 }
    ]
  },

  "WSM": { name: "Samoa", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 21147, percentage: 18 },
      { year: 2000, population: 27938, percentage: 18 },
      { year: 2020, population: 36906, percentage: 18 }
    ]
  },

  "SMR": { name: "San Marino", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 16044, percentage: 86.2 },
      { year: 2000, population: 21196, percentage: 86.2 },
      { year: 2020, population: 28000, percentage: 86.2 }
    ]
  },

  "STP": { name: "São Tomé and Príncipe", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 68760, percentage: 54 },
      { year: 2000, population: 90840, percentage: 54 },
      { year: 2020, population: 120000, percentage: 54 }
    ]
  },

  "SAU": { name: "Saudi Arabia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 378432, percentage: 2.5 },
      { year: 2000, population: 499952, percentage: 2.5 },
      { year: 2020, population: 660439, percentage: 2.5 }
    ]
  },

  "SRB": { name: "Serbia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 147415, percentage: 3.9 },
      { year: 2000, population: 194753, percentage: 3.9 },
      { year: 2020, population: 257269, percentage: 3.9 }
    ]
  },

  "SYC": { name: "Seychelles", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 36071, percentage: 61.3 },
      { year: 2000, population: 47655, percentage: 61.3 },
      { year: 2020, population: 62952, percentage: 61.3 }
    ]
  },

  "SLE": { name: "Sierra Leone", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 99995, percentage: 2.9 },
      { year: 2000, population: 132105, percentage: 2.9 },
      { year: 2020, population: 174511, percentage: 2.9 }
    ]
  },

  "SGP": { name: "Singapore", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 139056, percentage: 7 },
      { year: 2000, population: 183710, percentage: 7 },
      { year: 2020, population: 242681, percentage: 7 }
    ]
  },

  "SVK": { name: "Slovakia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1741067, percentage: 59.8 },
      { year: 2000, population: 2300153, percentage: 59.8 },
      { year: 2020, population: 3038511, percentage: 59.8 }
    ]
  },

  "SVN": { name: "Slovenia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 848129, percentage: 57.8 },
      { year: 2000, population: 1120478, percentage: 57.8 },
      { year: 2020, population: 1480156, percentage: 57.8 }
    ]
  },

  "SLB": { name: "Solomon Islands", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 82557, percentage: 20 },
      { year: 2000, population: 109067, percentage: 20 },
      { year: 2020, population: 144078, percentage: 20 }
    ]
  },

  "SOM": { name: "Somalia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 57, percentage: 0.001 },
      { year: 2000, population: 76, percentage: 0.001 },
      { year: 2020, population: 100, percentage: 0.001 }
    ]
  },

  "ZAF": { name: "South Africa", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 2337840, percentage: 6.8 },
      { year: 2000, population: 3088560, percentage: 6.8 },
      { year: 2020, population: 4080000, percentage: 6.8 }
    ]
  },

  "SSD": { name: "South Sudan", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 2263350, percentage: 39.7 },
      { year: 2000, population: 2990150, percentage: 39.7 },
      { year: 2020, population: 3950000, percentage: 39.7 }
    ]
  },

  "ESP": { name: "Spain", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 14640551, percentage: 47 },
      { year: 2000, population: 19341880, percentage: 47 },
      { year: 2020, population: 25550700, percentage: 47 }
    ]
  },

  "LKA": { name: "Sri Lanka", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 708801, percentage: 6.1 },
      { year: 2000, population: 936409, percentage: 6.1 },
      { year: 2020, population: 1237000, percentage: 6.1 }
    ]
  },

  "SDN": { name: "Sudan", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 171900, percentage: 1 },
      { year: 2000, population: 227100, percentage: 1 },
      { year: 2020, population: 300000, percentage: 1 }
    ]
  },

  "SUR": { name: "Suriname", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 68187, percentage: 21.6 },
      { year: 2000, population: 90083, percentage: 21.6 },
      { year: 2020, population: 119000, percentage: 21.6 }
    ]
  },

  "SWE": { name: "Sweden", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 60738, percentage: 1 },
      { year: 2000, population: 80242, percentage: 1 },
      { year: 2020, population: 106000, percentage: 1 }
    ]
  },

  "CHE": { name: "Switzerland", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1547100, percentage: 30 },
      { year: 2000, population: 2043900, percentage: 30 },
      { year: 2020, population: 2700000, percentage: 30 }
    ]
  },

  "TWN": { name: "Taiwan", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 189090, percentage: 1.4 },
      { year: 2000, population: 249810, percentage: 1.4 },
      { year: 2020, population: 330000, percentage: 1.4 }
    ]
  },

  "TZA": { name: "Tanzania", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 9514092, percentage: 25.6 },
      { year: 2000, population: 12569228, percentage: 25.6 },
      { year: 2020, population: 16604000, percentage: 25.6 }
    ]
  },

  "THA": { name: "Thailand", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 222592, percentage: 0.3 },
      { year: 2000, population: 294070, percentage: 0.3 },
      { year: 2020, population: 388468, percentage: 0.3 }
    ]
  },

  "TGO": { name: "Togo", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 859455, percentage: 25 },
      { year: 2000, population: 1135440, percentage: 25 },
      { year: 2020, population: 1499921, percentage: 25 }
    ]
  },

  "TON": { name: "Tonga", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 7821, percentage: 13.7 },
      { year: 2000, population: 10332, percentage: 13.7 },
      { year: 2020, population: 13649, percentage: 13.7 }
    ]
  },

  "TTO": { name: "Trinidad and Tobago", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 163878, percentage: 21.6 },
      { year: 2000, population: 216502, percentage: 21.6 },
      { year: 2020, population: 286000, percentage: 21.6 }
    ]
  },

  "TUN": { name: "Tunisia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 12606, percentage: 0.2 },
      { year: 2000, population: 16654, percentage: 0.2 },
      { year: 2020, population: 22000, percentage: 0.2 }
    ]
  },

  "TUR": { name: "Turkey", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 15471, percentage: 0.05 },
      { year: 2000, population: 20439, percentage: 0.05 },
      { year: 2020, population: 27000, percentage: 0.05 }
    ]
  },

  "TKM": { name: "Turkmenistan", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 287, percentage: 0.01 },
      { year: 2000, population: 379, percentage: 0.01 },
      { year: 2020, population: 500, percentage: 0.01 }
    ]
  },

  "TUV": { name: "Tuvalu", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 29, percentage: 0.5 },
      { year: 2000, population: 38, percentage: 0.5 },
      { year: 2020, population: 50, percentage: 0.5 }
    ]
  },

  "UGA": { name: "Uganda", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 11001600, percentage: 39.3 },
      { year: 2000, population: 14534400, percentage: 39.3 },
      { year: 2020, population: 19200000, percentage: 39.3 }
    ]
  },

  "UKR": { name: "Ukraine", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1926426, percentage: 8.2 },
      { year: 2000, population: 2545034, percentage: 8.2 },
      { year: 2020, population: 3362000, percentage: 8.2 }
    ]
  },

  "ARE": { name: "United Arab Emirates", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 73436, percentage: 5 },
      { year: 2000, population: 97017, percentage: 5 },
      { year: 2020, population: 128160, percentage: 5 }
    ]
  },

  "GBR": { name: "United Kingdom", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 3266100, percentage: 9 },
      { year: 2000, population: 4314900, percentage: 9 },
      { year: 2020, population: 5700000, percentage: 9 }
    ]
  },

  "USA": { name: "United States", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 37245000, percentage: 19 },
      { year: 2000, population: 49205000, percentage: 19 },
      { year: 2020, population: 65000000, percentage: 19 }
    ]
  },

  "URY": { name: "Uruguay", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 762090, percentage: 33 },
      { year: 2000, population: 1006810, percentage: 33 },
      { year: 2020, population: 1330000, percentage: 33 }
    ]
  },

  "UZB": { name: "Uzbekistan", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1539, percentage: 0.01 },
      { year: 2000, population: 2033, percentage: 0.01 },
      { year: 2020, population: 2685, percentage: 0.01 }
    ]
  },

  "VAT": { name: "Vatican City", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 482, percentage: 100 },
      { year: 2000, population: 637, percentage: 100 },
      { year: 2020, population: 842, percentage: 100 }
    ]
  },

  "VUT": { name: "Vanuatu", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 20400, percentage: 12.11 },
      { year: 2000, population: 26951, percentage: 12.11 },
      { year: 2020, population: 35602, percentage: 12.11 }
    ]
  },

  "VEN": { name: "Venezuela", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 11460000, percentage: 71 },
      { year: 2000, population: 15140000, percentage: 71 },
      { year: 2020, population: 20000000, percentage: 71 }
    ]
  },

  "VNM": { name: "Vietnam", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 3361218, percentage: 6.1 },
      { year: 2000, population: 4440562, percentage: 6.1 },
      { year: 2020, population: 5866000, percentage: 6.1 }
    ]
  },

  "ESH": { name: "Western Sahara", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 93, percentage: 0.06 },
      { year: 2000, population: 123, percentage: 0.06 },
      { year: 2020, population: 163, percentage: 0.06 }
    ]
  },

  "YEM": { name: "Yemen", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 2375, percentage: 0.02 },
      { year: 2000, population: 3138, percentage: 0.02 },
      { year: 2020, population: 4145, percentage: 0.02 }
    ]
  },

  "ZMB": { name: "Zambia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1845183, percentage: 17.56 },
      { year: 2000, population: 2437702, percentage: 17.56 },
      { year: 2020, population: 3220214, percentage: 17.56 }
    ]
  },

  "ZWE": { name: "Zimbabwe", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 558955, percentage: 6.4 },
      { year: 2000, population: 738444, percentage: 6.4 },
      { year: 2020, population: 975488, percentage: 6.4 }
    ]
  },

  "AIA": { name: "Anguilla", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 461, percentage: 5.7 },
      { year: 2000, population: 609, percentage: 5.7 },
      { year: 2020, population: 804, percentage: 5.7 }
    ]
  },

  "ABW": { name: "Aruba", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 43814, percentage: 75.3 },
      { year: 2000, population: 57883, percentage: 75.3 },
      { year: 2020, population: 76464, percentage: 75.3 }
    ]
  },

  "CYM": { name: "Cayman Islands", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 5356, percentage: 13.6 },
      { year: 2000, population: 7076, percentage: 13.6 },
      { year: 2020, population: 9348, percentage: 13.6 }
    ]
  },

  "CUW": { name: "Curaçao", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 59310, percentage: 72.8 },
      { year: 2000, population: 78355, percentage: 72.8 },
      { year: 2020, population: 103507, percentage: 72.8 }
    ]
  },

  "GUF": { name: "French Guiana", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 95404, percentage: 75 },
      { year: 2000, population: 126041, percentage: 75 },
      { year: 2020, population: 166500, percentage: 75 }
    ]
  },

  "GRL": { name: "Greenland", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 64, percentage: 0.2 },
      { year: 2000, population: 84, percentage: 0.2 },
      { year: 2020, population: 111, percentage: 0.2 }
    ]
  },

  "GLP": { name: "Guadeloupe", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 197963, percentage: 85.2 },
      { year: 2000, population: 261533, percentage: 85.2 },
      { year: 2020, population: 345486, percentage: 85.2 }
    ]
  },

  "GUM": { name: "Guam", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 75309, percentage: 85 },
      { year: 2000, population: 99493, percentage: 85 },
      { year: 2020, population: 131430, percentage: 85 }
    ]
  },

  "MNP": { name: "Northern Mariana Islands", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 18974, percentage: 64.1 },
      { year: 2000, population: 25067, percentage: 64.1 },
      { year: 2020, population: 33113, percentage: 64.1 }
    ]
  },

  "HKG": { name: "Hong Kong", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 225762, percentage: 5.3 },
      { year: 2000, population: 298258, percentage: 5.3 },
      { year: 2020, population: 394000, percentage: 5.3 }
    ]
  },

  "MTQ": { name: "Martinique", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 178776, percentage: 80 },
      { year: 2000, population: 236184, percentage: 80 },
      { year: 2020, population: 312000, percentage: 80 }
    ]
  },

  "NCL": { name: "New Caledonia", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 85950, percentage: 60.2 },
      { year: 2000, population: 113550, percentage: 60.2 },
      { year: 2020, population: 150000, percentage: 60.2 }
    ]
  },

  "PRI": { name: "Puerto Rico", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1146000, percentage: 56 },
      { year: 2000, population: 1514000, percentage: 56 },
      { year: 2020, population: 2000000, percentage: 56 }
    ]
  },

  "SPM": { name: "Saint Pierre and Miquelon", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 3209, percentage: 93 },
      { year: 2000, population: 4239, percentage: 93 },
      { year: 2020, population: 5600, percentage: 93 }
    ]
  },

  "TCA": { name: "Turks and Caicos Islands", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 1460, percentage: 11.4 },
      { year: 2000, population: 1929, percentage: 11.4 },
      { year: 2020, population: 2548, percentage: 11.4 }
    ]
  },

  "WLF": { name: "Wallis and Futuna", region: "Global",
    notes: "Wikipedia (2020). Historic scaled by 1.4% avg pop growth.",
    data: [
      { year: 1980, population: 7811, percentage: 95.8 },
      { year: 2000, population: 10319, percentage: 95.8 },
      { year: 2020, population: 13631, percentage: 95.8 }
    ]
  }
};

export default globalCatholicData;