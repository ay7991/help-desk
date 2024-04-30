import * as React from 'react';
import { cookies } from 'next/headers';
import Ticket from '@/components/Ticket';

const TicketsPanel: React.FC = async () => {
    const cookieStore = cookies();
    const adminCookie = cookieStore.get('adminCookie');
    const tickets: JSX.Element[] = [];

    if (!adminCookie) {
        return <h1> You do not have access to view this page. </h1>;
    } else {
        try {
            const getTickets = await fetch('http://localhost:3000/api/tickets');
            const ticketData = await getTickets.json();
            for (let i = 0; i < ticketData.length; i++) {
                tickets.push(<Ticket
                    key={`ticket${i}`}
                    id={ticketData[i].id} 
                    name={ticketData[i].name} 
                    email={ticketData[i].email}
                    description={ticketData[i].description}
                    createdAt={ticketData[i].createdAt}
                    updatedAt={ticketData[i].updatedAt}
                    status={ticketData[i].status}
                />)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main>
            <h1> Tickets Panel </h1>
            {tickets}
        </main>
    );
};

export default TicketsPanel;