import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Chart Data
function createData(time, portfolio, sp) {
	return {
		time: time,
		'BoT Portfolio': portfolio,
		'S&P 500': sp
	};
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

	const [opacity, setOpacity] = React.useState({
		'BoT Portfolio': 1,
		'S&P 500': 1
	});

	// const handleMouseEnter = (o) => {
	// 	const { dataKey } = o;

	// 	setOpacity({
	// 		...opacity,
	// 		[dataKey]: 0.5
	// 	});
	// };

	// const handleMouseLeave = (o) => {
	// 	const { dataKey } = o;

	// 	if (opacity[dataKey] === 0) {
	// 		return;
	// 	}

	// 	setOpacity({
	// 		...opacity,
	// 		[dataKey]: 1
	// 	});
	// };

	const handleLegendClick = (o) => {
		const { dataKey } = o;

		let newOpacity = 1;

		if (opacity[dataKey] > 0) {
			newOpacity = 0;
		}

		setOpacity({
			...opacity,
			[dataKey]: newOpacity
		});
	}

	const legendStyle = {
		cursor: 'pointer',
		userSelect: 'none'
	};

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
					<Legend onClick={handleLegendClick}
						wrapperStyle={legendStyle}
						// onMouseEnter={handleMouseEnter}
						// onMouseLeave={handleMouseLeave}
					/>

					<Line type="monotone"
						dataKey="BoT Portfolio"
						stroke={theme.palette.primary.main}
						dot={false}
						strokeOpacity={opacity['BoT Portfolio']}
					/>
					<Line type="monotone"
						dataKey="S&P 500"
						stroke="#2bdea7"
						dot={false}
						strokeOpacity={opacity['S&P 500']}
					/>
				</LineChart>
			</ResponsiveContainer>
		</React.Fragment>
	);
}
