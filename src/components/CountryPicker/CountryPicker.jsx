import React, { useState, useEffect } from "react";
import { FormControl, TextField } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api/services";
import Autocomplete from "@material-ui/lab/Autocomplete";

import labels from "../../labels/labels";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFechedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFechedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFechedCountries]);

  console.log("j.fetchedCountries = ", fetchedCountries);

  return (
    <FormControl className={styles.formControl}>
      <Autocomplete
        id="countries-combo"
        options={fetchedCountries}
        getOptionLabel={(country) => country}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={labels.selectCountry}
            variant="outlined"
          />
        )}
        onChange={(ev, selectedCountry) => handleCountryChange(selectedCountry)}
      />
    </FormControl>
  );
};

export default CountryPicker;

/* OTHER VERSION WITHOUT AUTOCOMPLETE
import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api/services";

// destructure props attribute (contains the handler)
const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFechedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFechedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFechedCountries]);

  console.log("j.fetchedCountries = ", fetchedCountries);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;*/
