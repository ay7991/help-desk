import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import StatusMenu from './StatusMenu';
import { TicketTableProps } from '@/lib/types';

const tableTitles = ['Ticket ID', 'Name', 'Email', 'Description', 'Created At', 'Updated At', 'Status'];

const TicketTable: React.FC<TicketTableProps> = ({ tickets }) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='ticket data table'>
                <TableHead>
                    <TableRow>
                        {tableTitles.map((title, index) => 
                            <TableCell key={`table-title-${index}`}> {title} </TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tickets.map((ticket, index) => 
                        <TableRow key={ticket.name + index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell>{ticket.id}</TableCell>
                            <TableCell>{ticket.name}</TableCell>
                            <TableCell>{ticket.email}</TableCell>
                            <TableCell>{ticket.description}</TableCell>
                            <TableCell>{ticket.createdAt.slice(0, 10)}</TableCell>
                            <TableCell>{ticket.updatedAt.slice(0, 10)}</TableCell>
                            <TableCell>
                                <StatusMenu currStatus={ticket.status} currID={ticket.id} />
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TicketTable;