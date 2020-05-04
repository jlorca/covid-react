import axios from "axios";

const BASE_URL = "https://covid19.mathdro.id/api";

// export const fetchData = async () => {
//   try {
//       // destructure 1
//     const { data } = await axios.get(BASE_URL);

//     return {
//       confirmed: data.confirmed,
//       recovered: data.recovered,
//       deaths: data.deaths,
//       lastUpdate: data.lastUpdate,
//     };
//   } catch (error) {
//     console.log("j.error = ", error);
//   }
// };

export const fetchData = async (country) => {
  let changeableUrl = BASE_URL;

  if (country) {
    changeableUrl = `${BASE_URL}/countries/${country}`;
  }
  try {
    // destructure 2
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log("fetchData j.error = ", error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/daily`);
    console.log("fetchDailyData j.data = ", data);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log("fetchDailyData j.error = ", error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${BASE_URL}/countries`);

    console.log("countries j.countries = ", countries);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log("countries j.error = ", error);
  }
};
