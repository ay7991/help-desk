import TicketForm from "@/components/TicketForm";

const Home = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1> Submit a Ticket </h1>
      <TicketForm />
      <a href='/admin/login'> Admin Login </a>
    </main>
  );
}

export default Home;
