import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const useStyles = makeStyles((theme) => ({
	tooltipContainer: {
		fontSize: '0.875rem',
		textAlign: 'left',
		maxWidth: '200px',
		backgroundColor: '#FFFFFF',
		borderRadius: '4px',
		padding: '12px',
		boxShadow: '0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
		opacity: '0.98'
	},
	tooltipLabel: {
		fontWeight: 'bold'
	},
	tooltipDatapoint: {
		padding: '4px 0 0 8px'
	},
    positive: {
        color: 'green'
    },
}));

const CustomTooltip = ({ active, payload, label }) => {
	const classes = useStyles();

	if (active) {
		return (
			<div className={classes.tooltipContainer}>
				<div className={classes.tooltipLabel}>{label}</div>
				{payload.map((index) => (
					<div style={{color: index.stroke}} className={classes.tooltipDatapoint}>{`${index.name} : $${index.value}`}</div>
				))}
			</div>
		);
	}
  
	return null;
};

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
					<Tooltip content={<CustomTooltip />}/>
					<Line type="linear" dataKey="Price" stroke={theme.palette.primary.main} dot={false} />
				</LineChart>
			</ResponsiveContainer>
		</React.Fragment>
	);
}
