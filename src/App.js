import React from 'react'

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css'
import { fetchData } from './api'
import coronaimage from './images/image.png'
import 'bootstrap/dist/css/bootstrap.min.css';

// Better to use class rather than hooks when dealing with asynchronous data. 
class App extends React.Component {

    // Letting the data be seen outside of the scope of the async
    // Initial States
    state = {
        data: {},
        country: '',
    }
    // when component is being created and inserted in DOM. 
    // making a request to fetchData which is in index.js
    async componentDidMount(){
        const fetchedData = await fetchData()
        this.setState({data:fetchedData})
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);

        // fetch data
        console.log(fetchedData);
        // set state
        this.setState(
            { data: fetchedData, country: country }
        );
    }

    render(){
        return(
        // Class name is this to ensure that there is no interference with other styles
        <div className={styles.container}>
            <img src = {coronaimage} className = {styles.image} alt="COVID"></img>
            <Cards data = {this.state.data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart data={this.state.data} country={this.state.country}/>
        </div>
        )
    }

}

export default App