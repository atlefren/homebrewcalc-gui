import React, {Fragment} from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        marginBottom: `${theme.spacing.unit * 2}px`,
        border: 0,
        padding: 0
    }
});


const Fieldset = ({classes, children, title}) => (
    <fieldset className={classes.root}>
        {title !== null
            ? (<Fragment>
                    <Typography variant="h6">{title}</Typography>
                    <Divider />
                </Fragment>)
            : null}
        {children}
    </fieldset>
);

export default withStyles(styles)(Fieldset);