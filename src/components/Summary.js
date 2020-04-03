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

const formatYTD = (currentValue) => {
  if (!currentValue) {
    return '';
  }
  let ytdValue = Number(currentValue['Percent Change']);
  if (ytdValue > 0) {
    return '+' + ytdValue.toFixed(2) + '%';
  }
  return ytdValue.toFixed(2) + '%';
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

  // format year to date function (+ or -)
  const ytd = formatYTD(props.yearToDatePerformance);

  return (
    <React.Fragment>
      <Title>Year to Date</Title>
      <Typography component="p" variant="h4" className={classes.depositContext}>
        {ytd}
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
