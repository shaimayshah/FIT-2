import React from 'react';
import {Bar} from 'react-chartjs-2';

import styles from './Chart.module.css'

const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
    const barChart = (
        confirmed 
        ? 
        (
            <Bar  
            data={{
                labels: ['Infected', `Active (${(((confirmed.value - recovered.value - deaths.value)/confirmed.value)*100).toFixed(2)}%)`, `Recovered (${((recovered.value/confirmed.value)*100).toFixed(2)}%)`, `Deaths (${((deaths.value/confirmed.value)*100).toFixed(2)}%)`],
                datasets: [{
                    label: `People`,
                    borderColor: ["rgb(255, 7, 58)", "rgb(45, 176, 246)", "rgb(0,176,72)", "rgb(107, 117, 126)"],
                    borderWidth: 2,
                    backgroundColor: ["rgba(255, 7, 58, 0.5)", "rgba(45, 176, 246, 0.5)", "rgba(0,176,72, 0.5)", "rgba(107, 117, 126, 0.5)"],
                    data: [confirmed.value, confirmed.value-recovered.value-deaths.value, recovered.value, deaths.value]
                }]
            }}
            options = {{
                legend: {display: false},
                responsive: true,
                title: {display: true, text:`${country} Current State`},
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
            {country ? barChart: barChart}
        </div>
    )
}

export default Chart;