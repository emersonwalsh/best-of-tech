import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Chart Data
function createData(time, portfolio, sp, nasdaq) {
	return {
		time: time,
		'BoT Portfolio': portfolio,
		'S&P 500': sp,
		'Nasdaq Comp': nasdaq
	};
}

const formatData = (portfolioHistory) => {
	let historicalData = [];
	for (let i = portfolioHistory.length - 1; i >= 0; i--) {
		let portfolioPercentChangeStr = portfolioHistory[i]['Total Percent Change'];
		let spPercentChangeStr = portfolioHistory[i]['S&P Total Percent Change'];
		let nasdaqPercentChangeStr = portfolioHistory[i]['Nasdaq Composite Total Percent Change'];

		historicalData.push(createData(
			portfolioHistory[i].Date,
			Number(portfolioPercentChangeStr.substring(0, portfolioPercentChangeStr.length - 1)),
			Number(spPercentChangeStr.substring(0, spPercentChangeStr.length - 1)),
			Number(nasdaqPercentChangeStr.substring(0, nasdaqPercentChangeStr.length - 1)),
		));

	}
	return historicalData;
}

export default function Chart(props) {
	const theme = useTheme();
	const data = formatData(props.portfolioHistory);

	const [opacity, setOpacity] = React.useState({
		'BoT Portfolio': 1,
		'S&P 500': 1,
		'Nasdaq Comp': 1,
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
					<XAxis dataKey="time" 
						stroke={theme.palette.text.secondary}
						interval="preserveEnd"
					/>
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
					<CartesianGrid strokeDasharray="3 3"
						stroke="#ededed"
					/>
					<Tooltip />
					<Legend onClick={handleLegendClick}
						wrapperStyle={legendStyle}
						// onMouseEnter={handleMouseEnter}
						// onMouseLeave={handleMouseLeave}
					/>

					<Line type="linear"
						dataKey="BoT Portfolio"
						stroke={theme.palette.primary.main}
						dot={false}
						strokeWidth={2}
						strokeOpacity={opacity['BoT Portfolio']}
					/>
					<Line type="linear"
						// type="monotone"
						dataKey="S&P 500"
						stroke="#2bdea7"
						dot={false}
						strokeWidth={1}
						strokeDasharray="5 5"
						strokeOpacity={opacity['S&P 500']}
					/>
					<Line type="linear"
						// type="monotone"
						dataKey="Nasdaq Comp"
						stroke="#0eab7b"
						dot={false}
						strokeWidth={1}
						strokeDasharray="5 5"
						strokeOpacity={opacity['Nasdaq Comp']}
					/>
				</LineChart>
			</ResponsiveContainer>
		</React.Fragment>
	);
}
