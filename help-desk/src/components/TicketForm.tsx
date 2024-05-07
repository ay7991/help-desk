'use client'
import * as React from 'react';
import Notification from './Notification';

const TicketForm = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [description, setDescription] = React.useState('');

    const [showNotif, setShowNotif] = React.useState(false);
    const [message, setMessage] = React.useState('');

    const resetForm = (): void => {
        setName('');
        setEmail('');
        setDescription('');
    }

    const postTicket = async (): Promise<void> => {
        try {
            const post = await fetch('/api/tickets', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    description: description
                })
            });
            if (post.ok) {
                setShowNotif(true);
                setMessage('Ticket Successfully Submitted!');
                resetForm();
            }
        } catch (error) {
            alert('Failed to submit ticket');
            console.log(error);
        }
    }

    const submitTicket = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postTicket();
    }

    return (
        <form className="flex flex-col w-96" onSubmit={submitTicket}>
            <label className="flex flex-col"> 
                Name 
                <input 
                    className="border-solid border-black border-2 mb-4 pl-1" 
                    type='text' 
                    placeholder='Name' 
                    name='name' 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </label> 
            <label className="flex flex-col">
                Email
                <input 
                    className="border-solid border-black border-2 mb-4 pl-1" 
                    type='email' 
                    placeholder='Email' 
                    name='email' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </label>
            <label className="flex flex-col"> 
                Description 
                <textarea 
                    className="border-solid border-black border-2 mb-4 pl-1 h-36" 
                    placeholder='Explain the problem' 
                    name='description'
                    value={description}
                    onChange={e => setDescription(e.target.value)} 
                    required
                />
            </label>
            <button type="submit"> Submit </button>
            { showNotif && <Notification message={message} onClose={() => setShowNotif(false)}/>}
        </form>
    );
}

export default TicketForm;