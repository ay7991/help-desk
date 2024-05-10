import TicketForm from "@/components/TicketForm";
import NavBar from "@/components/NavBar";

const Home = () => {
  return (
    <main className="h-screen">
      <NavBar />
      <section className="h-4/5 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center border-solid border-2 w-1/3 h-3/4 rounded-xl bg-blue-500">
          <h1 className="mb-8 text-3xl text-white"> Submit Your Ticket </h1>
          <TicketForm />
        </div>
      </section>
    </main>
  );
}

export default Home;
