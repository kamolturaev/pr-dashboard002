const energySources = [
  { value: "hydro", name: "Hydro-electric" },
  { value: "oil", name: "Oil" },
  { value: "gas", name: "Natural gas" },
  { value: "coal", name: "Coal" },
  { value: "nuclear", name: "Nuclear" },
];

const countriesInfo = [
  {
    country: "06.25",
    hydro: 59.8,
    oil: 937.6,
    gas: 582,
    coal: 564.3,
    nuclear: 187.9,
  },
  {
    country: "0626",
    hydro: 74.2,
    oil: 308.6,
    gas: 35.1,
    coal: 956.9,
    nuclear: 11.3,
  },
  {
    country: "06.27",
    hydro: 650,
    oil: 700,
    gas: 800,
    coal: 100,
    nuclear: 380,
  },
  {
    hydro: 500,
    oil: 600,
    gas: 650,
    coal: 223,
    nuclear: 642,
  },
  {
    country: "06.29",
    hydro: 19,
    oil: 119.3,
    gas: 28.9,
    coal: 204.8,
    nuclear: 3.8,
  },
  {
    country: "06.30",
    hydro: 500,
    oil: 600,
    gas: 650,
    coal: 223,
    nuclear: 642,
  },
];

export default {
  getEnergySources() {
    return energySources;
  },
  getCountriesInfo() {
    return countriesInfo;
  },
};
