import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);


    // UseEffect works with two parameters
    useEffect(() => {
        const fetchAPI = async() => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);
    
    return(
        <FormControl variant="filled" className={styles.formControl}>
            <NativeSelect className={styles.nativeSelect} variant="filled" IconComponent={() => (<ExpandMoreIcon color="white"/>)} style={{color: "rgb(107, 117, 126)", borderBottom:"1px solid rgb(107, 117, 126)"}} default="" onChange={(e) => {handleCountryChange(e.target.value)}}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key = {i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;