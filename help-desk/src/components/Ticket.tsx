import * as React from 'react';

interface TicketProps {
    id: number,
    name: string,
    email: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    status: string
}

const Ticket: React.FC<TicketProps> = ({ id, name, email, description, createdAt, updatedAt, status }) => {
    
    return (
        <main>
            <h1> Ticket: {id} </h1>
            <h2> Name: {name} </h2>
            <h2> Email: {email} </h2>
            <p> Description: {description} </p>
            <p> Status: {status} </p>
            <p> Created At: {createdAt} </p>
            <p> Updated At: {updatedAt} </p>
            <label> Update Status: </label>
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