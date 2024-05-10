import * as React from 'react';
import { createTheme } from "@mui/material";
import { TicketObj } from "../types";
import Cookies from 'js-cookie';

export const tableTitles: string[] = ['Ticket ID', 'Name', 'Email', 'Description', 'Created At', 'Updated At', 'Status'];

export const tableTheme = createTheme({
    typography: {
        fontFamily: "Atkinson Hyperlegible",
        fontSize: 18,
    }
})

export const fetchTickets = async (
    setTickets: (tickets: TicketObj[]) => void,
    setLoading: (loading: boolean) => void,
    setNotification: (show: boolean, message: string, color: string) => void
  ): Promise<void> => {
    try {
      const response = await fetch('http://localhost:3000/api/tickets');
      if (!response.ok) {
        setNotification(true, 'Failed to fetch tickets', 'red');
        throw new Error('Failed to fetch tickets');
      } else {
        let data = await response.json() as TicketObj[];
        data = data.sort((a: TicketObj, b: TicketObj) => a.id - b.id);
        setTickets(data);
        setLoading(false);
        setNotification(true, 'Successful Login!', 'teal');
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
      setNotification(true, 'Failed to fetch tickets', 'red');
      setLoading(false);
    }
  }
  
export const useFetchTickets = (
    setTickets: (tickets: TicketObj[]) => void,
    setLoading: (loading: boolean) => void,
    setAccessDenied: (denied: boolean) => void,
    setNotification: (show: boolean, message: string, color: string) => void
    ) => {
    React.useEffect(() => {
        const adminCookie = Cookies.get('adminCookie');
        if (!adminCookie) {
        console.log("No admin cookie found, access denied.");
        setAccessDenied(true);
        setLoading(false);
        } else {
        setAccessDenied(false);
        fetchTickets(setTickets, setLoading, setNotification);
        }
    }, [setTickets, setLoading, setAccessDenied, setNotification]);
}

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