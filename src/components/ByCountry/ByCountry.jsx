import React from "react";
import { Cards, Chart, CountryPicker } from "../../components";
import coronaImage from "../../images/corona.png";
import { fetchData } from "../../api/services"; // if the file services.js is renamed as "index.js" the import is from "./api" because it will try to find first an index

import styles from "./ByCountry.module.css";

class ByCountry extends React.Component {
  // the constructor is not needed
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default ByCountry;
