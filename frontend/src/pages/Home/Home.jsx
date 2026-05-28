import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ml-5">
        <NoteCard
          title="Meeting on 7th April"
          date="3rd Apr 2026"
          content="Meeting on 7th April Meeting on 7th April"
          tags="#Meeting"
          isPinned={true}
          onEdit={() => {}}
          onDelete={() => {}}
          onPinNote={() => {}}
        />
        
      </div>
    </div>
  );
};

export default Home;
