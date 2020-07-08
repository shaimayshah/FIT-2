import axios from 'axios' // Used to make api requests

const url = "https://covid19.mathdro.id/api"

// Makes sense to use an async function here because its I/O. Also, a common practice. 
// Returns the data we need (country, global)
export const fetchData = async (country) => {
    let countryURL = url;

     if(country) {
         countryURL = `${url}/countries/${country}`
     }

    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(countryURL);
        return {confirmed, recovered, deaths, lastUpdate};
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async() =>{
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name)

    } catch(error){
        console.log(error);
    }
}