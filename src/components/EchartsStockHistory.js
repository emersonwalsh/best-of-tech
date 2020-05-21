import React from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/visualMap';

// Generate Historical Data
function createData(day, Price) {
	return { day, Price };
}

const formatData = (data) => {
	let date = [];
	let price = [];

	for (let i = 1; i < data.length; i++) {
		date.push(data[i]['Daily Date'].split(' ')[0]);
		price.push(Number(data[i]['Daily Price']));
	}

	return {
		date: date,
		price: price
	};
}

export default function EchartsStockHistory(props) {
	const data = formatData(props.data);

	const { date, price } = formatData(props.data);


	return (
		<ReactEchartsCore
            echarts={echarts}
            option={{
                xAxis: {
                    type: 'category',
                    data: date,
                    axisTick: {
                        alignWithLabel: true
                    }
                },
                yAxis: {
                    type: 'value',
                    name: 'Price ($)',
                    nameLocation: 'middle',
                    nameGap: 50,
                    splitLine: {
                        show: false
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    top: '40',
                    left: '70',
                    right: '20',
                    bottom: '60',
				},
				visualMap: [{
					show: false,
					type: 'continuous',
					seriesIndex: 0,
					min: Math.min(...price),
					max: Math.max(...price),
					color: ['#2bdea7', '#088696']
				}],
                series: [
                    { 
                        name: 'Price',
                        data: price,
                        type: 'line',
                        showSymbol: false,
                        smooth: true
                    }
                ]
            }}
        />
	);
}