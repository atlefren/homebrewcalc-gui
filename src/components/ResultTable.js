import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const ResultTable = ({brew, attribs}) => (
    <Table>
        <TableBody>
            {attribs.map(attrib => (
            <TableRow key={attrib.id}>
                <TableCell variant='head'>{attrib.name}</TableCell>
                <TableCell align="right" style={{backgroundColor: attrib.bgColor && brew[attrib.id] ? `rgb(${attrib.bgColor(brew[attrib.id])}` : null}}>
                    {brew[attrib.id] || '-'}
                    {attrib.suffix && brew[attrib.id] ? attrib.suffix : null}
                    </TableCell>
            </TableRow>
            ))}
        </TableBody>
    </Table>
);


export default ResultTable;