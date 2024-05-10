'use client'
import * as React from 'react'; 
import ResponseForm from '@/components/ResponseForm'; 
import { useTicket } from '@/contexts/TicketContext';
import { useRouter } from 'next/navigation';

const TicketResponsePage: React.FC = () => {
  const { currentTicket } = useTicket();
  const router = useRouter();

  if (!currentTicket) return <div> No ticket data found. Please select a ticket. </div>;

  const closeResponse = (): void => {
    router.push('/admin/ticketsPanel');
  }

  return (
    <main id="responsePage"> 
      <section id="responseForm">
        <div id="buttonDiv">
          <button onClick={closeResponse} className='border-solid w-10 h-10 border-2 border-slate-600 rounded-lg bg-slate-300'> X </button>
        </div>
        <div id="ticketDetails">
          <h1><i className="pr-3"><b>Ticket ID:</b></i>{currentTicket.id}</h1>
          <p><i className="pr-3"><b>Name:</b></i> {currentTicket.name}</p>
          <p><i className="pr-3"><b>Email:</b></i> {currentTicket.email}</p>
          <p><i className="pr-3"><b>Description:</b></i> {currentTicket.description}</p>
        </div>
        <div id="responseFormDiv">
          <ResponseForm email={currentTicket.email}/>
        </div>
      </section>
    </main>
  );
};

export default TicketResponsePage;