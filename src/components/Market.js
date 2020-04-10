import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    positive: {
        color: 'green'
    },
    negative: {
        color: 'red'
    },
    today: {
        padding: '8px'
    }
});

const formatPercentage = (currentValue) => {
    if (!currentValue) {
        return '';
    }
    let formattedValue = Number(currentValue);
    if (formattedValue > 0) {
        return '+' + formattedValue.toFixed(2) + '%';
    }
    return formattedValue.toFixed(2) + '%';
}

const formatIndecies = (indexValues) => {
    let finalValues = [];
    for (let i = 0; i < indexValues.length; i++) {
        finalValues.push({
            id: i,
            name: indexValues[i]['Index Name'],
            value: formatPercentage(indexValues[i]['Daily Percentage Change'])
        });
    }
    return finalValues;
}

export default function Market(props) {
  const classes = useStyles();
  const indecies = formatIndecies(props.indexValues);
  return (
    <React.Fragment>
        <div style={{ width: '100%' }}>
            <Box display="flex">
                <Box>
                    <Typography component="h2" variant="h6" color="primary" className={classes.today}>
                        Today:
                    </Typography>
                </Box>
                {indecies.map((index) => (
                    <Box flexGrow={1} key={index.id}>
                        <Typography color="textSecondary">
                            {index.name}
                        </Typography>
                        <Typography className={index.value.indexOf('-') > -1 ? classes.negative : classes.positive}>
                            {index.value}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </div>
    </React.Fragment>
  );
}
