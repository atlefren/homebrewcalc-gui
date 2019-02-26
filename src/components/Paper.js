import React from 'react';
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2
    },
});

const MyPaper = (props) => {
    const {classes, children} = props;
    return (
        <Paper className={classes.root} elevation={1}>
            {children}
        </Paper>
    );
};


export default withStyles(styles)(MyPaper);