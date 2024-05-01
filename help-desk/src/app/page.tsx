import TicketForm from "@/components/TicketForm";
import NavBar from "@/components/NavBar";

const Help = () => {
  return (
    <main className="h-screen">
      <NavBar />
      <section className="h-4/5 flex flex-col items-center justify-center">
        <h1 className="mb-8 text-xl"> Submit Your Ticket </h1>
        <TicketForm />
      </section>
    </main>
  );
}

export default Help;
