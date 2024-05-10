'use client'
import * as React from 'react';
import Notification from './Notification';
import { postTicket, resetForm } from '../lib/utils/ticketForm';

const TicketForm = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [description, setDescription] = React.useState('');

    const [showNotif, setShowNotif] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [color, setColor] = React.useState('');

    const setNotification = (show: boolean, message: string, color: string) => {
        setShowNotif(show);
        setMessage(message);
        setColor(color);
    };

    const submitTicket = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await postTicket(name, email, description, setNotification, () => resetForm(setName, setEmail, setDescription));
    };

    return (
        <main className="formMain">
            <form className="flex flex-col justify-center" onSubmit={submitTicket}>
                <label className="flex flex-col text-white text-lg"> 
                    Name 
                    <input 
                        className="input" 
                        type='text' 
                        placeholder='Name' 
                        name='name' 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </label> 
                <label className="flex flex-col text-white text-lg">
                    Email
                    <input 
                        className="input" 
                        type='email' 
                        placeholder='Email' 
                        name='email' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label className="flex flex-col text-white text-lg"> 
                    Description 
                    <textarea 
                        className="border-solid mb-4 pl-1 h-36 rounded-md text-black" 
                        placeholder='Explain the problem' 
                        name='description'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                </label>
                <button className="text-white text-xl" type="submit"> Submit </button>
            </form>
            { showNotif && <Notification message={message} onClose={() => setShowNotif(false)} color={color} />}
        </main>
    );
}

export default TicketForm;