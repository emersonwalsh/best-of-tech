import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import StockHistory from './StockHistory';

const useStyles = makeStyles(theme => ({
    main: {
        display: 'contents'
    },
    chart: {
        height: 260
    },
    formControlHalf: {
        margin: theme.spacing(1),
        width: 'calc(50% - 16px)',
    },
    formControlFull: {
        margin: theme.spacing(1),
        width: 'calc(100% - 16px)',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));

export default function CompanyModal(props) {    
    const classes = useStyles();
  
    const handleCancel = () => {
        props.onClose();
    };
  
    return (
        <div>
            <Dialog open={props.open} onClose={handleCancel} fullWidth={true} maxWidth="md" aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{props.name}</DialogTitle>
                <DialogContent>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div className={classes.chart}>
                                <StockHistory data={props.chartData} />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <DialogContentText>
                                <b>Hedge Funds:</b> {props.hedgeFunds}
                            </DialogContentText>
                        </Grid>
                        <Grid item xs={12}>
                            <DialogContentText>
                                <b>Description:</b> {props.description}
                            </DialogContentText>
                        </Grid>
                    </Grid>
                </Container>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}