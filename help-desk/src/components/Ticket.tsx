'use client'
import * as React from 'react';

interface TicketProps {
    id: number,
    name: string,
    email: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    status: string,
}

const Ticket: React.FC<TicketProps> = ({ id, name, email, description, createdAt, updatedAt, status }) => {
    const pullStatus = async () => {
        
    }
    
    const updateStatus = async () => {
        const dropdown = document.getElementById(`ticket${id}`) as HTMLSelectElement;
        try {
            await fetch('http://localhost:3000/api/tickets', {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id,
                    status: dropdown.value
                })
            })
        } catch (error) {
            console.log(error);
        }
    }

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
            <select id={`ticket${id}`} onChange={updateStatus}>
                <option value="OPEN"> OPEN </option>
                <option value="IN PROGRESS"> IN PROGRESS </option>
                <option value="RESOLVED"> RESOLVED </option>
                <option value="CLOSED"> CLOSED </option>
            </select>
        </main>
    );
}

export default Ticket;