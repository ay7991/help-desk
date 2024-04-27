import * as React from "react";

const TicketForm: React.FC = () => {
    return (
        <form className="flex flex-col">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="email" />
            <textarea placeholder="description" />
            <button type="submit"> Submit </button>
        </form>
    );
}

export default TicketForm;