'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import StatusMenu from './StatusMenu';
import { TablePagination, ThemeProvider } from '@mui/material';
import TablePaginationControls from './TablePaginationControls';
import { TicketObj, TicketTableProps } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { useTicket } from '@/contexts/TicketContext';
import { tableTitles, tableTheme } from '@/lib/utils/ticketTable';
import { handleChangePage, handleChangeRowsPerPage, drillTicket } from '../lib/utils/ticketTable';


const TicketTable: React.FC<TicketTableProps> = ({ tickets }) => {
    const { setCurrentTicket } = useTicket();
    const router = useRouter();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tickets.length) : 0;

    const onHandleChangePage = handleChangePage(setPage);
    const onHandleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
        handleChangeRowsPerPage(event, setPage, setRowsPerPage);
    const onDrillTicket = (ticket: TicketObj) => 
        drillTicket(ticket, setCurrentTicket, router);

    return (
        <ThemeProvider theme={tableTheme}>
            <TableContainer id="tableContainer">
                <Table id="tableContents" aria-label='ticket data table'>
                    <TableHead>
                        <TableRow>
                            {tableTitles.map((title, index) => 
                                <TableCell sx={{color: '#3B82F6'}} key={`table-title-${index}`}> {title} </TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {(rowsPerPage > 0 ? tickets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : tickets)
                    .map((ticket, index) =>
                            <TableRow hover key={ticket.name + index}>
                                <TableCell onClick={() => {onDrillTicket(ticket)}} sx={{color: '#3B82F6'}}>{ticket.id}</TableCell>
                                <TableCell onClick={() => {onDrillTicket(ticket)}} sx={{color: '#3B82F6'}}>{ticket.name}</TableCell>
                                <TableCell onClick={() => {onDrillTicket(ticket)}} sx={{ maxWidth: 300, overflow: 'auto', color: '#3B82F6' }}>{ticket.email}</TableCell>
                                <TableCell onClick={() => {onDrillTicket(ticket)}} sx={{ maxWidth: 300, overflow: 'auto', color: '#3B82F6' }}>{ticket.description}</TableCell>
                                <TableCell onClick={() => {onDrillTicket(ticket)}} sx={{color: '#3B82F6'}}>{ticket.createdAt.slice(0, 10)}</TableCell>
                                <TableCell onClick={() => {onDrillTicket(ticket)}} sx={{color: '#3B82F6'}}>{ticket.updatedAt.slice(0, 10)}</TableCell>
                                <TableCell>
                                    <StatusMenu currStatus={ticket.status} currID={ticket.id} />
                                </TableCell>
                            </TableRow>
                        )}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter className="tableHeadBody">
                        <TableRow>
                            <TablePagination
                                className="fixed"
                                sx={{color: '#3B82F6'}}
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={tickets.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                slotProps={{
                                    select: {
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                    },
                                }}
                                onPageChange={onHandleChangePage}
                                onRowsPerPageChange={onHandleChangeRowsPerPage}
                                ActionsComponent={TablePaginationControls}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}

export default TicketTable;