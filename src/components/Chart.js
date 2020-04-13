import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, portfolio, sp) {
	return { 
		time: time, 
		portfolio: portfolio,
		['S&P 500']: sp };
}

const formatData = (portfolioHistory) => {
	let historicalData = [];
	for (let i = portfolioHistory.length - 1; i >= 0; i--) {
		let portfolioPercentChangeStr = portfolioHistory[i]['Total Percent Change'];
		let spPercentChangeStr = portfolioHistory[i]['S&P Total Percent Change'];

		historicalData.push(createData(
			portfolioHistory[i].Date,
			Number(portfolioPercentChangeStr.substring(0, portfolioPercentChangeStr.length - 1)),
			Number(spPercentChangeStr.substring(0, spPercentChangeStr.length - 1)),
		));

	}
	return historicalData;
}

export default function Chart(props) {
	const theme = useTheme();

	const data = formatData(props.portfolioHistory);

	return (
		<React.Fragment>
			<Title>Value Over Time</Title>
			<ResponsiveContainer>
				<LineChart
					data={data}
					margin={{
						top: 16,
						right: 16,
						bottom: 0,
						left: 24,
					}}
				>
					<XAxis dataKey="time" stroke={theme.palette.text.secondary} />
					<YAxis
						stroke={theme.palette.text.secondary}
						// axisLine={false}
						// tick={false}
						domain={['auto', 'auto']}
					>
						<Label
							angle={270}
							position="left"
							style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
						>
							% Change
						</Label>
					</YAxis>
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="portfolio" stroke={theme.palette.primary.main} dot={false} />
					<Line type="monotone" dataKey="S&P 500" stroke="#2bdea7" dot={false} />

				</LineChart>
			</ResponsiveContainer>
		</React.Fragment>
	);
}
