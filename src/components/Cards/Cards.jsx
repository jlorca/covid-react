import React from "react";
import { Card, Grid } from "@material-ui/core";
import { CovidCard } from "../../components";

import styles from "./Cards.module.css";
import cx from "classnames";
import labels from "../../labels/labels";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading ...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.confirmed)}
        >
          <CovidCard
            textTitle={labels.infected}
            numberCases={confirmed}
            lastUpdateDate={lastUpdate}
            textFooter={labels.numberActiveCasesCovid}
            duration={2.5}
          />
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CovidCard
            textTitle={labels.recovered}
            numberCases={recovered}
            lastUpdateDate={lastUpdate}
            textFooter={labels.numberRecoveriesCovid}
            duration={2.5}
          />
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CovidCard
            textTitle={labels.deaths}
            numberCases={deaths}
            lastUpdateDate={lastUpdate}
            textFooter={labels.numberDeathsCovid}
            duration={2.5}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
