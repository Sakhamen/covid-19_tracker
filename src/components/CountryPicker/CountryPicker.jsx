import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { getCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setCountryList(await getCountries());
    }

    fetchCountries();
  }, [setCountryList]);

  return(
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => {handleCountryChange(e.target.value)}}>
        <option value="">Global</option>
        {countryList.map((country, idx) => <option key={idx} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
};

export default CountryPicker;
