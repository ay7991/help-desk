import { TicketObj } from "../types";
import { createTheme } from "@mui/material";

export const tableTitles: string[] = ['Ticket ID', 'Name', 'Email', 'Description', 'Created At', 'Updated At', 'Status'];

export const tableTheme = createTheme({
    typography: {
        fontFamily: "Atkinson Hyperlegible",
        fontSize: 18,
    }

})

export const handleChangePage = (
    setPage: (page: number) => void
) => (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
};

export const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setPage: (page: number) => void,
    setRowsPerPage: (rowsPerPage: number) => void
) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
};

export const drillTicket = (
    ticket: TicketObj,
    setCurrentTicket: (ticket: TicketObj) => void,
    router: any
) => {
    setCurrentTicket(ticket);
    router.push(`/admin/ticketResponse/${ticket.id}`);
};