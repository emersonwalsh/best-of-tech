import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, Tooltip, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, percentage) {
	return { time, percentage };
}

const formatData = (portfolioHistory) => {
	let historicalData = [];
	for (let i = portfolioHistory.length - 1; i >= 0; i--) {
		let percentChangeStr = portfolioHistory[i]['Total Percent Change']
		historicalData.push(createData(
			portfolioHistory[i].Date,
			Number(percentChangeStr.substring(0, percentChangeStr.length - 1))
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
					<Line type="monotone" dataKey="percentage" stroke={theme.palette.primary.main} dot={false} />
				</LineChart>
			</ResponsiveContainer>
		</React.Fragment>
	);
}
