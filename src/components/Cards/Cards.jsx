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
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of total cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.active)}>
                    <CardContent>
                        {/* Basically the <p> tag for material UI, gutterbottom provides a bottom margin */}
                        <Typography color="textSecondary" gutterBottom>Active</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value - recovered.value - deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        {/* Basically the <p> tag for material UI, gutterbottom provides a bottom margin */}
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        {/* Basically the <p> tag for material UI, gutterbottom provides a bottom margin */}
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;