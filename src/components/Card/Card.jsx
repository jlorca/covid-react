import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";

const Card = ({
  textTitle,
  numberCases,
  lastUpdateDate,
  textFooter,
  duration,
}) => {
  return (
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {textTitle}
      </Typography>
      <Typography variant="h5">
        <CountUp
          start={0}
          end={numberCases.value}
          duration={duration}
          separator=","
        />
      </Typography>
      <Typography color="textSecondary">
        {new Date(lastUpdateDate).toDateString()}
      </Typography>
      <Typography variant="body2">{textFooter}</Typography>
    </CardContent>
  );
};

export default Card;
