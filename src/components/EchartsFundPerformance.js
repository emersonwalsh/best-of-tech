import React from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
// todo add mark line representing Q1
// import 'echarts/lib/component/markLine';

// Generate Chart Data
function createData(time, portfolio, sp, nasdaq) {
	return {
		time: time,
		'BoT': portfolio,
		'S&P 500': sp,
		'Nasdaq Comp': nasdaq
	};
}

const formatData = (portfolioHistory) => {
    let date = [];
    let bot = [];
    let sp = [];
    let nasdaq = [];

	for (let i = portfolioHistory.length - 1; i >= 0; i--) {
		let portfolioPercentChangeStr = portfolioHistory[i]['Total Percent Change'];
		let spPercentChangeStr = portfolioHistory[i]['S&P Total Percent Change'];
		let nasdaqPercentChangeStr = portfolioHistory[i]['Nasdaq Composite Total Percent Change'];

        date.push(portfolioHistory[i].Date);
        bot.push(Number(portfolioPercentChangeStr.substring(0, portfolioPercentChangeStr.length - 1)));
        sp.push(Number(spPercentChangeStr.substring(0, spPercentChangeStr.length - 1)));
        nasdaq.push(Number(nasdaqPercentChangeStr.substring(0, nasdaqPercentChangeStr.length - 1)));
    }
    
	return {
        date: date,
        bot: bot,
        sp: sp,
        nasdaq: nasdaq
    };
}

export default function EchartsFundPerformance(props) {
    const { date, bot, sp, nasdaq } = formatData(props.portfolioHistory);

	return (
		<ReactEchartsCore
            echarts={echarts}
            option={{
                xAxis: {
                    type: 'category',
                    data: date,
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false
                    }
                },
                yAxis: {
                    type: 'value',
                    name: 'Value over Time (%)',
                    nameLocation: 'middle',
                    nameGap: 40,
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
                    bottom: '30',
                    // containLabel: true
                },
                legend: {
                    show: true
                },
                visualMap: [{
					show: false,
					type: 'continuous',
					seriesIndex: 0,
					min: Math.min(...bot),
					max: Math.max(...bot),
					color: ['#2bdea7', '#088696']
				}],
                series: [
                    { 
                        name: 'BoT',
                        data: bot,
                        type: 'line',
                        showSymbol: false,
                        itemStyle: {
                            color: 'rgb(43,222,167)',
                        },
                        lineStyle: {
                            width: 3
                        },
                        smooth: true
                    },
                    { 
                        name: 'S&P 500',
                        data: sp,
                        type: 'line',
                        showSymbol: false,
                        itemStyle: {
                            color: '#de492b',
                        },
                        lineStyle: {
                            color: '#de492b',
                            opacity: 0.7,
                            width: 1
                        },
                        smooth: true
                    },
                    { 
                        name: 'NASDAQ Comp',
                        data: nasdaq,
                        type: 'line',
                        showSymbol: false,
                        itemStyle: {
                            color: '#7e6de0',
                        },
                        lineStyle: {
                            color: '#7e6de0',
                            opacity: 0.7,
                            width: 1
                        },
                        smooth: true
                    }
                ]
            }}
        />
	);
}
