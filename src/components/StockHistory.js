import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Historical Data
function createData(day, Price) {
	return { day, Price };
}

const formatData = (data) => {
	let historicalData = [];
	for (let i = 1; i < data.length; i++) {
		historicalData.push(createData(
			data[i]['Daily Date'].split(' ')[0],
			Number(data[i]['Daily Price'])
		));
	}
	return historicalData;
}

export default function StockHistory(props) {
	const theme = useTheme();

	const data = formatData(props.data);

	return (
		<React.Fragment>
			{/* <Title>Value Over Time</Title> */}
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
					<XAxis dataKey="day" stroke={theme.palette.text.secondary} minTickGap={15} />
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
							Price ($)
            			</Label>
					</YAxis>
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip />
					<Line type="linear" dataKey="Price" stroke={theme.palette.primary.main} dot={false} />
				</LineChart>
			</ResponsiveContainer>
		</React.Fragment>
	);
}
