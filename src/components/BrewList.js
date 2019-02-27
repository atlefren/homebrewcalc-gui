import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Link from './Link';

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
});

const Brew = ({brew}) => (
    <ListItem component={Link} to={`/brews/${brew.id}`}>
        <ListItemText
            primary={brew.name}
            secondary={`By ${brew.brewer}`}/>
    </ListItem>
);

const BrewList = (props) => {
    const {classes, brews} = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={16}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        Brews
                    </Typography>
                    <div className={classes.demo}>
                        <List>
                            {brews.map(brew => <Brew brew={brew} key={brew.id} />)}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(styles)(BrewList);