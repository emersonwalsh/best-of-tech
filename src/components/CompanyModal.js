import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
    main: {
        display: 'contents'
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
                    <DialogContentText>
                        Data for {props.ticker}
                    </DialogContentText>
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