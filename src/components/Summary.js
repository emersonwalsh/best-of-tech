import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
	neutral: {
		flex: 1,
	},
	positive: {
		flex: 1,
		color: 'green'
	},
	negative: {
		flex: 1,
		color: 'red'
	}
});

const formatPercentage = (currentValue) => {
	if (!currentValue) {
		return '';
	}
	let formattedValue = Number(currentValue.substring(0, currentValue.length - 1));
	if (formattedValue > 0) {
		return '+' + formattedValue.toFixed(1) + '%';
	}
	return formattedValue.toFixed(1) + '%';
}

export default function Summary(props) {
	const classes = useStyles();
	const today = () => {
		let today = new Date();
		let dd = String(today.getDate()); // .padStart(2, '0');
		let mm = String(today.getMonth() + 1); // .padStart(2, '0'); //January is 0!
		let yyyy = today.getFullYear();
		let hours = today.getHours();
		let minutes = today.getMinutes();
		var ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0' + minutes : minutes
		return mm + '/' + dd + '/' + yyyy + ', ' + hours + ':' + minutes + ampm;
	};

	const ytd = formatPercentage(props.yearToDatePerformance['Total Percent Change']);
	const daily = formatPercentage(props.yearToDatePerformance['Daily Percent Change']);

	return (
		<React.Fragment>
			<Title>Year to Date</Title>
			<Typography component="p" variant="h5" className={ytd.indexOf('-') > -1 ? classes.negative : classes.positive}>
				{ytd}
			</Typography>
			<Title>Daily Change</Title>
			<Typography component="p" variant="h5" className={daily.indexOf('-') > -1 ? classes.negative : classes.positive}>
				{daily}
			</Typography>
			<Typography color="textSecondary" className={classes.neutral}>
				{/* todo if today is after market close, replace with market close date */}
				as of {today()}
			</Typography>
		</React.Fragment>
	);
}
