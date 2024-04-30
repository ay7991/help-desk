import * as React from 'react';
import { cookies } from 'next/headers';

const TicketsPanel: React.FC = async () => {
    const cookieStore = cookies();
    const adminCookie = cookieStore.get('adminCookie');
    const Tickets: JSX.Element[] = [];

    if (!adminCookie) {
        return <h1> You do not have access to view this page. </h1>;
    } else {
        try {
            const response = await fetch('http://localhost:3000/api/tickets');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main>
            <h1> Tickets Panel </h1>
            {Tickets}
        </main>
    );
};

export default TicketsPanel;