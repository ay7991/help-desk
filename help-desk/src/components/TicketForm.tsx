import * as React from "react";

const TicketForm: React.FC = () => {
    const submitTicket = () => {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const description = document.getElementById('description');

        fetch('/api/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    name: name,
                    email: email,
                    description: description
                },
            )
        })
    }

    return (
        <form className="flex flex-col">
            <input type="text" placeholder="name" id='name'/>
            <input type="text" placeholder="email" id='email' />
            <textarea placeholder="description" id='description'/>
            <button type="submit" onSubmit={submitTicket}> Submit </button>
        </form>
    );
}

export default TicketForm;