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
                    "Content-type": "application/json"
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
        <form className='flex flex-col' onSubmit={submitTicket}>
            <input type='text' placeholder='name' name='name' />
            <input type='text' placeholder='email' name='email' />
            <textarea placeholder='description' name='description' />
            <button type="submit"> Submit </button>
        </form>
    );
}

export default TicketForm;