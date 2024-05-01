'use client'
import * as React from 'react';

const TicketForm = () => {
    const submitTicket = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const nameInput = form.elements.namedItem('name') as HTMLInputElement;
        const emailInput = form.elements.namedItem('email') as HTMLInputElement;
        const descriptionInput = form.elements.namedItem('description') as HTMLInputElement;
        
        try {
            const post = await fetch('/api/tickets', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: nameInput.value,
                    email: emailInput.value,
                    description: descriptionInput.value
                })
            });
            if (post.ok) {
                console.log('Ticket successfully submitted');
            } else {
                console.log('Ticket failed to submit');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form className="flex flex-col w-96" onSubmit={submitTicket}>
            <label className="flex flex-col"> 
                Name 
                <input className="border-solid border-black border-2 mb-4 pl-1" type='text' placeholder='Name' name='name' />
            </label> 
            <label className="flex flex-col">
                Email
                <input className="border-solid border-black border-2 mb-4 pl-1" type='text' placeholder='Email' name='email' />
            </label>
            <label className="flex flex-col"> 
                Description 
                <textarea className="border-solid border-black border-2 mb-4 pl-1 h-36" placeholder='Explain the problem' name='description' />
            </label>
            <button type="submit"> Submit </button>
        </form>
    );
}

export default TicketForm;