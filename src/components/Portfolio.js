import React from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import CompanyModal from './CompanyModal'

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

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  negative: {
    color: 'red',
  },
  positive: {
    color: 'green'
  },
  name: {
    cursor: 'pointer',
    '&:hover': { 
      textDecoration: 'underline'
    },
  }
}));

export default function Portfolio(props) {  
  const rows = formatRows(props.companies);
  const classes = useStyles();

  const [modalState, setModalState] = React.useState({
    open: false,
    ticker: '',
    name: ''
  });

  function openStockChartForName(event) {
    event.preventDefault();
    let ticker = event.target.id;
    if (ticker) {
      console.log('get data for', ticker)
    }

    let name = event.target.textContent || '';
  
    setModalState({
      open: true,
      ticker: ticker,
      name: name
    });
  }

  const handleModalClose = () => {
    setModalState({
      open: false,
      ticker: '',
      name: ''
    });
  };

  return (
    <React.Fragment>
      <Title>Portfolio</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
          <TableCell align="left" padding="none"></TableCell>
            <TableCell align="left">Company</TableCell>
            <TableCell align="left">Ticker</TableCell>
            <TableCell align="right">% Portfolio</TableCell>
            <TableCell align="right">% Day</TableCell>
            <TableCell align="right">% Month</TableCell>
            <TableCell align="right">% Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left" padding="none">{row.id + 1}</TableCell>
              <TableCell align="left">
                <Typography color="primary" id={row.ticker} className={classes.name} onClick={openStockChartForName}>
                  {row.name}
                </Typography>
              </TableCell>
              <TableCell align="left">{row.ticker}</TableCell>
              <TableCell align="right">{row.portfolioPercentage}</TableCell>
              <TableCell align="right" className={row.dailyChange.indexOf('-') > -1 ? classes.negative : classes.positive}>{row.dailyChange}</TableCell>
              <TableCell align="right" className={row.monthlyChange.indexOf('-') > -1 ? classes.negative : classes.positive}>{row.monthlyChange}</TableCell>
              <TableCell align="right" className={row.yearlyChange.indexOf('-') > -1 ? classes.negative : classes.positive}>{row.yearlyChange}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link> */}
      </div>
      <CompanyModal open={modalState.open} ticker={modalState.ticker} name={modalState.name} onClose={handleModalClose}/>
    </React.Fragment>
  );
}
