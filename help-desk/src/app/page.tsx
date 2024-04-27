import TicketForm from "@/components/TicketForm";

const Home = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1> Submit a Ticket </h1>
      <TicketForm />
    </main>
  );
}

export default Home;
