import React from 'react';
import {Card, CardContent, Typography, Grid, Paper} from '@material-ui/core';
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import 'fontsource-roboto';

// To apply multiple class (CSS)
import cx from 'classnames'


const Cards = ({data :{confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...';
    }
    return (
        <div class={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent >
                        {/* Basically the <p> tag for material UI, gutterbottom provides a bottom margin */}
                        <Typography>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography className={styles.secondary} variant="body2">{new Date(lastUpdate).toUTCString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.active)}>
                <CardContent >
                        {/* Basically the <p> tag for material UI, gutterbottom provides a bottom margin */}
                        <Typography>Active</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value - recovered.value - deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography gutterBottom>{(((confirmed.value - recovered.value - deaths.value)/confirmed.value)*100).toFixed(2)}%</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent >
                        {/* Basically the <p> tag for material UI, gutterbottom provides a bottom margin */}
                        <Typography>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography gutterBottom>{(((recovered.value)/confirmed.value)*100).toFixed(2)}%</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent >
                        {/* Basically the <p> tag for material UI, gutterbottom provides a bottom margin */}
                        <Typography>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography gutterBottom>{((deaths.value/confirmed.value)*100).toFixed(2)}%</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;