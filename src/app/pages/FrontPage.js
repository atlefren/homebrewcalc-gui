import React from 'react';
import Typography from '@material-ui/core/Typography';

import Paper from '../../components/Paper';
import BrewList from '../../components/BrewList';


const brews = [
    {name: 'Bleik Drammenser', brewer: 'Atle Sveen', id: 1},
    {name: 'Hopstereo', brewer: 'Atle Sveen', id: 2},
    {name: 'Bale 4', brewer: 'Kristian Bendiksen', id: 3},
]

const FrontPage = ({classes}) => (
    <Paper>
        <Typography variant="h4">FrontPage</Typography>
        <BrewList brews={brews} />
    </Paper>
);

export default FrontPage;