'use client'
import * as React from 'react';
import ResponseForm from '@/components/ResponseForm';

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
    const updateStatus = async () => {
        const dropdown = document.getElementById(`ticket${id}`) as HTMLSelectElement;
        try {
            const statusUpdate = await fetch('/api/tickets', {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id,
                    status: dropdown.value
                })
            });

            if (statusUpdate.ok) {
                console.log('Ticket successfully updated!');
            } else {
                console.log('Unable to update ticket');
            }
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
            <ResponseForm email={email}/>
        </main>
    );
}

export default Ticket;