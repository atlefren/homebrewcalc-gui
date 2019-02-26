import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles} from '@material-ui/core/styles';

import Header from './header';


const styles = {
    container: {
      margin: 10
    },
  };

const Page = ({routing, classes}) => {
    const SubPage = routing.page;
        return (
            <Fragment>
                <CssBaseline />
                <Header />
                <div className={classes.container}>
                    <SubPage params={routing.params} />
                </div>
            </Fragment>
        );
};

const select = state => ({
  routing: state.routing
});


export default connect(select)(withStyles(styles)(Page));