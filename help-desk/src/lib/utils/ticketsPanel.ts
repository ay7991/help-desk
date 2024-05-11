import * as React from 'react';
import { TicketObj } from "../types";
import Cookies from 'js-cookie';

export const fetchTickets = async (
    setTickets: (tickets: TicketObj[]) => void,
    setLoading: (loading: boolean) => void,
    setNotification: (show: boolean, message: string, color: string) => void
  ): Promise<void> => {
    try {
      const response = await fetch('https://help-desk-eight-gamma.vercel.app/api/tickets');
      if (!response.ok) {
        setNotification(true, 'Failed to fetch tickets', 'red');
        throw new Error('Failed to fetch tickets');
      } else {
        console.log(response);
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

        async function loadTickets() {
            if (!adminCookie) {
                console.log("No admin cookie found, access denied.");
                setAccessDenied(true);
                setLoading(false);
            } else {
                setAccessDenied(false);
                await fetchTickets(setTickets, setLoading, setNotification);
            }
        }

        loadTickets();
    }, []);
}

