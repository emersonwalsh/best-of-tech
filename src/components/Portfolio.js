import React from 'react';
import Tabletop from 'tabletop';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import CompanyModal from './CompanyModal'

function createRow(id, name, ticker, movement, portfolioPercentage, dailyChange, monthlyChange, yearlyChange, description, hedgeFunds) {
	return { id, name, ticker, movement, portfolioPercentage, dailyChange, monthlyChange, yearlyChange, description, hedgeFunds };
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
			companies[i].Description,
			companies[i]['Hedge Funds']
		));

	}
	return updatedRows;
}

const formatPercentage = (value, decimalPlaces) => {
	return Number(value).toFixed(2);
};

function descendingComparator(a, b, orderBy) {
	if (Number(b[orderBy]) < Number(a[orderBy])) {
		return -1;
	}
	if (Number(b[orderBy]) > Number(a[orderBy])) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

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
	},
	rowIndex: {
		paddingLeft: '10px',
		width: '32px'
	}
}));

function EnhancedTableHead(props) {
	const { order, orderBy, onRequestSort } = props;

	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell align="left" padding="none"></TableCell>
				<TableCell align="left">Company</TableCell>
				<TableCell align="left">Ticker</TableCell>
				<TableCell align="right"
					key={'portfolioPercentage'}
					sortDirection={orderBy === 'portfolioPercentage'? order : false}
					>
					<TableSortLabel
						active={orderBy === 'portfolioPercentage'}
						direction={orderBy === 'portfolioPercentage' ? order : 'asc'}
						onClick={createSortHandler('portfolioPercentage')}
					>
						Portfolio (%)
					</TableSortLabel>
				</TableCell>
				<TableCell align="right"
					key={'dailyChange'}
					sortDirection={orderBy === 'dailyChange'? order : false}
					>
					<TableSortLabel
						active={orderBy === 'dailyChange'}
						direction={orderBy === 'dailyChange' ? order : 'asc'}
						onClick={createSortHandler('dailyChange')}
					>
						Day (%)
					</TableSortLabel>
				</TableCell>
				<TableCell align="right"
					key={'monthlyChange'}
					sortDirection={orderBy === 'monthlyChange'? order : false}
					>
					<TableSortLabel
						active={orderBy === 'monthlyChange'}
						direction={orderBy === 'monthlyChange' ? order : 'asc'}
						onClick={createSortHandler('monthlyChange')}
					>
						Month (%)
					</TableSortLabel>
				</TableCell>
				<TableCell align="right"
					key={'yearlyChange'}
					sortDirection={orderBy === 'yearlyChange'? order : false}
					>
					<TableSortLabel
						active={orderBy === 'yearlyChange'}
						direction={orderBy === 'yearlyChange' ? order : 'asc'}
						onClick={createSortHandler('yearlyChange')}
					>
						Year (%)
					</TableSortLabel>
				</TableCell>
			</TableRow>
		</TableHead>
	);
}

export default function Portfolio(props) {
	const [order, setOrder] = React.useState('desc');
	const [orderBy, setOrderBy] = React.useState('portfolioPercentage');
	const rows = formatRows(props.companies);
	const classes = useStyles();

	const [modalState, setModalState] = React.useState({
		open: false,
		ticker: '',
		name: '',
		data: [],
		description: '',
		hedgeFunds: '',
	});

	const companyGoogleSheetsMapping = {
		'CRM': '1LztegFflJaJzirrcvMpjM03rsc8V2YdBNhdtE61gY4k',
		'SE': '1BGihn0NfrU47r-oqS8o2WPz7bh0PzBCei0a67G9lLFY',
		'SHOP': '1ULuRyKN_oUvXZVoNa6hNMFbFFOWizRiP2CscZLq0PDc',
		'AYX': '16TgJvOz6mO49Rfolei6lG3lxYgDdDo0Fs0taK1rY3cI',
		'LBRDK': '1-9lef2HsWcNFLZXN69PNEOcSx9wQ1V0_Sj3s_llQVKw',
		'COUP': '1oLS9w2w9R1tJTL4z3LnnY42KP2Br5MZRu-ysVoQa7fs',
		'BABA': '1ZvWUHPj-u5TcKvMc-NQFfZJtg4KH1Y1UBE4OFgQaEO0',
		'NFLX': '1OZ3MRzt0gmy4n96G9E-bq3wHBn-JxEcd0tm7Tk500gs',
		'JD': '10tCxEAT1JCa5MjUFgg4JMXsuLGuJLCx4DYJFFJmZCB4',
		'MSFT': '11Vw5gKfvHr0q_zZPhRXG7IsEopS0TUKMkOVIiHRkO_4',
		'FB': '1-N6usJ-mzqbc4jhLJISQOYrpg7SmY7sAdiCXsUNgxjw',
		'LYFT': '1mlFSu4ydLl6RRH_OU2nF4xHWyqJsOdqytyd7DNnCIhI',
		'APPN': '1hz1VmrMr0R0Va3E2-g9XXtl6tzkYzVKUfvw5-5kqAlU',
		'NOW': '1b36_XguxzCF3FekeTG8JZIIYstHLUV2dRDUUijHBNkg',
		'AMZN': '1qESEwugnCADtDZ2Q5-E99l3g2h6XOihGB--TvTTKoZE',
		'ADBE': '1jiRPBALjx8uE9PI2ZVazDnNTQ-uf17kIcN6LKVk2AMI',
		'PINS': '1VXBdtPszJKf6Evj7KjzpHDNmHtfQBJ0QZP4_T5ads4A',
		'SMAR': '1jOcWon0gXDs3TYyegpWoMHIDigEf6Rj1Q2LTTf3YGsY',
		'MU': '1kyXMnkzPpE6OPWOHrryG3YjjJbn0823b8l-IZB82wB8',
		'MIME': '1U1fIVOt8LYhah_hR71m6sfmnX0vIxOCVsEWbusjNZ8A',
		'AAXN': '1bLfsxc4Bl9IAdpuKviA7JyiE7yn2qEMJzyEtsXtSiqw'
	};

	function openStockChartForName(event) {
		event.preventDefault();
		let ticker = event.target.id;
		let name = event.target.textContent || '';
		let description = event.target.attributes.companydescription.value || '';
		let hedgeFunds = event.target.attributes.hedgefunds.value || '';

		Tabletop.init({
			key: companyGoogleSheetsMapping[ticker],
			simpleSheet: true
		}).then(function (data, tabletop) {
			setModalState({
				open: true,
				ticker: ticker,
				name: name,
				data: data,
				description: description,
				hedgeFunds: hedgeFunds,
			});
		})
	}

	const handleModalClose = () => {
		setModalState({
			open: false,
			ticker: '',
			name: '',
			data: [],
			description: '',
			hedgeFunds: ''
		});
	};

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	return (
		<React.Fragment>
			<Title>Portfolio</Title>
			<Table size="small">
				<EnhancedTableHead
					order={order}
					orderBy={orderBy}
					onRequestSort={handleRequestSort}
				/>
				<TableBody>
					{stableSort(rows, getComparator(order, orderBy)).map((row, idx) => (
						<TableRow key={row.id} hover>
							<TableCell align="left" className={classes.rowIndex} padding="none">{idx + 1}</TableCell>
							<TableCell align="left">
								<Typography
									color="primary"
									id={row.ticker}
									companydescription={row.description}
									hedgefunds={row.hedgeFunds}
									className={classes.name}
									onClick={openStockChartForName}>
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
				{/* <Typography variant="body2" color="textSecondary">
					All data provided by <Link href="https://support.google.com/docs/answer/3093281?hl=en" target="_blank"> Google's Finance API </Link>
				</Typography> */}
			</div>
			<CompanyModal
				open={modalState.open}
				ticker={modalState.ticker}
				name={modalState.name}
				description={modalState.description}
				hedgeFunds={modalState.hedgeFunds}
				chartData={modalState.data}
				onClose={handleModalClose} 
			/>
		</React.Fragment>
	);
}
