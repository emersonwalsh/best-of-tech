import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

function createRow(id, name, ticker, movement, portfolioPercentage, dailyChange, monthlyChange, yearlyChange) {
  return { id, name, ticker, movement, portfolioPercentage, dailyChange, monthlyChange, yearlyChange };
}

function calculateMovement(originalPosStr, currentPos) {
  let originalPos = Number(originalPosStr);
  let diff = originalPos - currentPos;

  if (diff > 0) {
    return '+' + diff;
  } else if (diff === 0) {
    return '-';
  }
  return diff;
}

const formatRows = (companies) => {
  // todo sort by portfolio %
  companies.sort((a, b) => (a['Portfolio Percentage'] < b['Portfolio Percentage']) ? 1 : -1);

  let updatedRows = [];
  for (let i = 0; i < companies.length; i++) {
    updatedRows.push(createRow(
      i, 
      companies[i].Name, 
      companies[i].Ticker,
      calculateMovement(companies[i]['#'], i + 1),
      formatPercentage(companies[i]['Portfolio Percentage'], 2),
      formatPercentage(companies[i]['Daily Percentage Change'], 2),
      formatPercentage(companies[i]['Monthly Percentage Change'], 2),
      formatPercentage(companies[i]['Yearly Percentage Change'], 2),      
    ));
    
  }
  return updatedRows;
}

const formatPercentage = (value, decimalPlaces) => {
  return Number(value).toFixed(2) + '%';
};

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Portfolio(props) {  
  const rows = formatRows(props.companies);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Holdings</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left">Company</TableCell>
            <TableCell align="left">Ticker</TableCell>
            <TableCell align="right">% Portfolio (Movement)</TableCell>
            <TableCell align="right">% Day</TableCell>
            <TableCell align="right">% Month</TableCell>
            <TableCell align="right">% Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.ticker}</TableCell>
              <TableCell align="right">{row.portfolioPercentage + ' (' + row.movement + ')'}</TableCell>
              <TableCell align="right">{row.dailyChange}</TableCell>
              <TableCell align="right">{row.monthlyChange}</TableCell>
              <TableCell align="right">{row.yearlyChange}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link> */}
      </div>
    </React.Fragment>
  );
}
