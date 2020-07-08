import React, {useState, useEffect} from 'react';
import { fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css'

const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(()=> {
        const fetchAPI = async() =>{
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    // If data has not been rendered, return null. 
    const lineChart = (
        dailyData.length
        ? 
        (<Line 
        data = {{
            labels: dailyData.map(({date}) => date), /*returns all of the dates*/
            datasets: [{
                data:dailyData.map(({confirmed}) => confirmed),
                label: 'Infected',
                borderColor: 'rgb(255, 7, 58)',
                fill: false,
            }, 
            {data:dailyData.map(({deaths}) => deaths),
            label: "Deaths",
            borderColor: 'rgb(107, 117, 126)',
            fill: false,}] 
        }}
        options={{
            title:{display: true, text:'Global COVID Cases and Deaths'},
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    gridLines: {
                        display:false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display:false
                    }   
                }]
            }
        }}
        />) : null
    );




    const barChart = (
        confirmed 
        ? 
        (
            <Bar  
            data={{
                labels: ['Infected', `Active (${(((confirmed.value - recovered.value - deaths.value)/confirmed.value)*100).toFixed(2)}%)`, `Recovered (${((recovered.value/confirmed.value)*100).toFixed(2)}%)`, `Deaths (${((deaths.value/confirmed.value)*100).toFixed(2)}%)`],
                datasets: [{
                    label: `People`,
                    backgroundColor: ["rgb(255, 7, 58)", "rgb(45, 176, 246)", "rgb(0,176,72)", "rgb(107, 117, 126)"],
                    data: [confirmed.value, confirmed.value-recovered.value-deaths.value ,recovered.value, deaths.value]
                }]
            }}
            options = {{
                legend: {display: false},
                title: {display: true, text:`Current state in ${country}`},
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        gridLines: {
                            display:false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display:false
                        }   
                    }]
                }
            }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            {country ? barChart: lineChart}
        </div>
    )
}

export default Chart;