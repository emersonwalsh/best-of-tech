import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const formatPercentage = (currentValue) => {
  if (!currentValue) {
    return '';
  }
  let formattedValue = Number(currentValue);
  if (formattedValue > 0) {
    return '+' + formattedValue.toFixed(2) + '%';
  }
  return formattedValue.toFixed(2) + '%';
}

export default function Summary(props) {
  const classes = useStyles();
  const today = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
  };

  const ytd = formatPercentage(props.yearToDatePerformance['Total Percent Change']);
  const daily = formatPercentage(props.yearToDatePerformance['Daily Percent Change']);

  return (
    <React.Fragment>
      <Title>Year to Date</Title>
      <Typography component="p" variant="h5" className={classes.depositContext}>
        {ytd}
      </Typography>
      <Title>Daily Change</Title>
      <Typography component="p" variant="h5" className={classes.depositContext}>
        {daily}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        as of {today()}
      </Typography>
      {/* <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
    </React.Fragment>
  );
}
