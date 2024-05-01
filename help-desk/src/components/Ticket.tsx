'use client'
import * as React from 'react';
import ResponseForm from '@/components/ResponseForm';
import { TicketProps } from '@/lib/types';

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
        <main className="flex flex-col mt-10 items-center">
            <section className="flex flex-row w-max p-4 rounded-lg border-black border-2 border-solid">
                <label className="w-40"> 
                    <b> Ticket: </b>
                    <p>{id}</p> 
                </label>
                <label className="w-40"> 
                    <b> Name: </b> 
                    <p>{name}</p>
                </label>
                <label className="w-72"> 
                    <b> Email: </b> 
                    <p>{email}</p>
                </label>
                <label className="w-80 overflow-scroll mr-12"> 
                    <b> Description: </b>
                    <p>{description}</p> 
                </label>
                <label className="w-40"> 
                    <b> Status: </b> 
                    <p>{status}</p>
                </label>
                <label className="w-40"> 
                    <b> Created At: </b> 
                    <p>{createdAt.slice(0, 10)}</p> 
                </label>
                <label> 
                    <b> Updated At: </b> 
                    <p>{updatedAt.slice(0, 10)}</p> 
                </label>
            </section>
            <label className="mt-4"> 
                Update Status: 
                <select id={`ticket${id}`} onChange={updateStatus} className="ml-4">
                    <option value="OPEN"> OPEN </option>
                    <option value="IN PROGRESS"> IN PROGRESS </option>
                    <option value="RESOLVED"> RESOLVED </option>
                    <option value="CLOSED"> CLOSED </option>
                </select>
            </label>
            <ResponseForm email={email}/>
        </main>
    );
}

export default Ticket;