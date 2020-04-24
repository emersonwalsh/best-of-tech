import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

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

	const tooltipContainerStyle = {
		fontSize: '0.875rem',
		textAlign: 'left',
		maxWidth: '200px',
		backgroundColor: '#FFFFFF',
		borderRadius: '4px',
		padding: '12px',
		boxShadow: '0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
		opacity: '0.98'
	};

	const tooltipLabelStyle = {
		fontWeight: 'bold'
	};

	const tooltipDatapointStyle = {
		padding: '4px 0 0 8px'
	};

	return (
		<React.Fragment>
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
					<CartesianGrid vertical={false} strokeDashArray="3 3" stroke="#ededed"/>
					{/* <CartesianGrid strokeDasharray="3 3" 
						stroke="#ededed"
					/> */}
					<Tooltip contentStyle={tooltipContainerStyle}
						itemStyle={tooltipDatapointStyle}
						labelStyle={tooltipLabelStyle}
					/>
					<Line type="linear" dataKey="Price" stroke={theme.palette.primary.main} dot={false} />
				</LineChart>
			</ResponsiveContainer>
		</React.Fragment>
	);
}
