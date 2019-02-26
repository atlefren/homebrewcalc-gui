import React, {Fragment} from 'react';
import {connect} from 'react-redux';

const Page = ({routing}) => {
    const SubPage = routing.page;
        return (
            <Fragment>
                <header>Brewcalc</header>
                <SubPage params={routing.params} />
            </Fragment>
        );
};

const select = state => ({
  routing: state.routing
});


export default connect(select)(Page);