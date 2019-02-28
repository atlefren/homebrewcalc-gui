import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Row = ({columns, data}) => (
    <TableRow>
        {columns.map(c => <TableCell key={c.id} align={c.align}>{data[c.id]}</TableCell>)}
    </TableRow>
);

const EditableTable = ({columns, data}) => (
    <Table>
        <TableHead>
            <TableRow>
                {columns.map(column => (
                    <TableCell key={column.id}>{column.name}</TableCell>    
                ))}
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map(row => <Row key={row._id} columns={columns} data={row}/>)}
        </TableBody>
    </Table>
);

export default EditableTable;