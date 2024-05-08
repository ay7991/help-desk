import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import StatusMenu from './StatusMenu';
import { TablePagination } from '@mui/material';
import TablePaginationControls from './TablePaginationControls';
import { TicketTableProps } from '@/lib/types';

const tableTitles: string[] = ['Ticket ID', 'Name', 'Email', 'Description', 'Created At', 'Updated At', 'Status'];

const TicketTable: React.FC<TicketTableProps> = ({ tickets }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tickets.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer className="flex flex-col items-center mt-10">
            <Table sx={{ minWidth: '40vw', maxWidth: '90vw', tableLayout: 'fixed' }} aria-label='ticket data table'>
                <TableHead>
                    <TableRow>
                        {tableTitles.map((title, index) => 
                            <TableCell key={`table-title-${index}`}> {title} </TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                {(rowsPerPage > 0 ? tickets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : tickets)
                .map((ticket, index) => 
                        <TableRow key={ticket.name + index} >
                            <TableCell>{ticket.id}</TableCell>
                            <TableCell>{ticket.name}</TableCell>
                            <TableCell>{ticket.email}</TableCell>
                            <TableCell sx={{ maxWidth: 300, overflow: 'auto' }}>{ticket.description}</TableCell>
                            <TableCell>{ticket.createdAt.slice(0, 10)}</TableCell>
                            <TableCell>{ticket.updatedAt.slice(0, 10)}</TableCell>
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
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            className="fixed"
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
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationControls}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default TicketTable;