'use client'
import * as React from 'react'; 
import ResponseForm from '@/components/ResponseForm'; 
import { useTicket } from '@/contexts/TicketContext';

const TicketResponsePage: React.FC = () => {
  const { currentTicket } = useTicket();

  if (!currentTicket) return <div>No ticket data found. Please select a ticket.</div>;

  return (
    <div>
      <h1>Response for Ticket ID: {currentTicket.id}</h1>
      <p>{currentTicket.name}</p>
      <p>{currentTicket.email}</p>
      <p>{currentTicket.description}</p>
      <ResponseForm email={currentTicket.email}/>
    </div>
  );
};

export default TicketResponsePage;