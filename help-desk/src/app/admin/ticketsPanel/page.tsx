'use client'
import * as React from 'react';
import TicketTable from '@/components/TicketTable';
import NavBar from '@/components/NavBar';
import { TicketObj } from '@/lib/types';
import Notification from '@/components/Notification';
import { useFetchTickets } from '@/lib/utils/ticketsPanel';

const TicketsPanel: React.FC = () => {
    const [tickets, setTickets] = React.useState<TicketObj[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [accessDenied, setAccessDenied] = React.useState(false);
    const [showNotif, setShowNotif] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [color, setColor] = React.useState('');

    const setNotification = (show: boolean, message: string, color: string) => {
        setShowNotif(show);
        setMessage(message);
        setColor(color);
    };

    useFetchTickets(setTickets, setLoading, setAccessDenied, setNotification);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center w-screen h-screen">
                <h1 className="text-3xl">Loading...</h1>
            </div>
        );
    }

    if (accessDenied) {
        return <h1>You do not have access to view this page</h1>;
    }

    return (
        <main>
            <NavBar />
            <h1 id="panelTitle"> Tickets Panel </h1>
            <div id="ticketPanel">
                {tickets.length > 0 ? (
                    <TicketTable tickets={tickets} />
                ) : (
                    <p>No tickets available.</p>
                )}
                { showNotif && <Notification message={message} onClose={() => setShowNotif(false)} color={color}/> }
            </div>
        </main>
    );
};

export default TicketsPanel;