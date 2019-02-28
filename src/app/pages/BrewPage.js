import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';

import Paper from '../../components/Paper';
import BrewDetails from '../../components/BrewDetails';
import MaltTable from '../../components/MaltTable';
import HopsTable from '../../components/HopsTable';

import {doUpdateBrew} from '../../actionCreators/brew';


class BrewPage extends Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
    }
    
    _onChange(id, value) {
        this.props.updateBrew(this.props.brew.id, id, value);
    }

    render() {
        const {brew, isFetching} = this.props;

        if (!brew) {
            return null;
        }
        if (isFetching) {
            return (<p>Fetching</p>);
        }

        const readOnly = false;

        return (
            <Paper>
                <Typography variant="h5">{brew.name !== '' ? brew.name : 'Unnamed brew'}</Typography>
                <form noValidate autoComplete="off">
                    <BrewDetails 
                        brew={brew} 
                        onChange={this._onChange}
                        readOnly={readOnly}/>
                    <MaltTable 
                        brew={brew} 
                        onChange={this._onChange}
                        readOnly={readOnly}/>
                    <HopsTable 
                        brew={brew} 
                        onChange={this._onChange}
                        readOnly={readOnly}/>
                </form>
            </Paper>
        );
    }
};

const actions = {
    updateBrew: doUpdateBrew,
};

const select = state => ({
    isFetching: state.brew.isFetching,
    isEditable: state.brew.isEditable,
    brew: state.brew.brew
});

export default connect(select, actions)(BrewPage);