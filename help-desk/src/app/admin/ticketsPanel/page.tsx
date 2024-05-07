'use client'
import * as React from 'react';
import Cookies from 'js-cookie';
import Ticket from '@/components/Ticket';
import TicketTable from '@/components/TicketTable';
import NavBar from '@/components/NavBar';
import { TicketObj } from '@/lib/types';
import Notification from '@/components/Notification';

const TicketsPanel: React.FC = () => {
    const [tickets, setTickets] = React.useState<TicketObj[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [accessDenied, setAccessDenied] = React.useState(true);

    const [showNotif, setShowNotif] = React.useState(true);

    const fetchTickets = async (): Promise<void> => {
        try {
            const response = await fetch('http://localhost:3000/api/tickets');
            if (!response.ok) {
                throw new Error('Failed to fetch tickets');
            } else {
                let data = await response.json() as TicketObj[];
                data = data.sort((a: TicketObj, b: TicketObj)=> a.id - b.id);
                setTickets(data);
                setLoading(false);
            }
        } catch (error) {
            console.error("Error fetching tickets:", error);
            setLoading(false);
        }        
    }
    
    React.useEffect(() => {
        const adminCookie = Cookies.get('adminCookie');
        if (!adminCookie) {
            console.log("No admin cookie found, access denied.");
            setLoading(false);
        } else {
            setAccessDenied(false);
            fetchTickets();
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (accessDenied) {
        return <h1>You do not have access to view this page</h1>;
    }

    return (
        <main>
            { showNotif && <Notification message={'Successful Login'} onClose={() => setShowNotif(false)}/>}
            <NavBar />
            <h1 className="flex justify-center text-3xl mt-10"> Tickets Panel </h1>
            {tickets.length > 0 ? (
                <TicketTable tickets={tickets} />
            ) : (
                <p>No tickets available.</p>
            )}
        </main>
    );
};

export default TicketsPanel;