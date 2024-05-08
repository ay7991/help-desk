'use client'
import * as React from 'react';
import Notification from './Notification';

const TicketForm = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [description, setDescription] = React.useState('');

    const [showNotif, setShowNotif] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [color, setColor] = React.useState('');

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
                setColor('teal');
                console.log(color);
                resetForm();
            } else {
                const failedTicket = await post.json();
                setShowNotif(true);
                setMessage(failedTicket.error);
                setColor('red');
                resetForm();
            }
        } catch (error) {
            setShowNotif(true);
            setMessage('Failed to submit ticket');
            setColor('red');
            console.log(error);
        }
    }

    const submitTicket = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postTicket();
    }

    return (
        <>
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
            </form>
            { showNotif && <Notification message={message} onClose={() => setShowNotif(false)} color={color} />}
        </>
    );
}

export default TicketForm;