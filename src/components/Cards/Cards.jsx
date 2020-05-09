import React from 'react';
import cx from 'classnames';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const Cards = ({data: {confirmed, deaths, recovered, lastUpdate} }) => {

  if (!confirmed) return 'Loading...';

  const localData = [
    {name: 'Infected', data: confirmed, description: 'Number of active cases of COVID-19', lastUpdate: lastUpdate},
    {name: 'Recovered', data: recovered, description: 'Number of recoveries from COVID-19', lastUpdate: lastUpdate},
    {name: 'Deaths', data: deaths, description: 'Number of deaths caused by COVID-19', lastUpdate: lastUpdate}
  ];

  return(
    <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          {/* loop */}
          {localData.map((item, idx) => (
            <Grid item component={Card} xs={12} md={3} key={idx} className={cx(styles.card, styles[`${item.name.toLowerCase()}`])}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>{item.name}</Typography>
                <Typography variant="h5">
                  <CountUp start={0} end={item.data.value} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(item.lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </Grid>
          ))}
          </Grid>
      </div>
    )
};

export default Cards;
