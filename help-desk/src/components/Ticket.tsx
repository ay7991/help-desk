import * as React from 'react';

interface TicketProps {
    id: number,
    name: string,
    email: string,
    description: string
}

const Ticket: React.FC<TicketProps> = ({ id, name, email, description }) => {
    
    return (
        <main>
            <h1> Ticket: {id} </h1>
            <h2> Name: {name} </h2>
            <h2> Email: {email} </h2>
            <p> Description: {description} </p>
            <select>
                <option> OPEN </option>
                <option> IN PROGRESS </option>
                <option> RESOLVED </option>
                <option> CLOSED </option>
            </select>
        </main>
    );
}

export default Ticket;