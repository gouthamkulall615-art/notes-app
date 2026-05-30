import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";

import { useState } from "react";

import Modal from "react-modal";
const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
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

      <button
        className="w-16 h-16 bg-blue-600 rounded-4xl  flex items-center justify-center absolute right-10 bottom-10 cursor-pointer border-none  active:scale-105"
        onClick={() => {
          setOpenAddEditModal({
            isShown: true,
            type: "add",
            data: null,
          });
        }}
      >
        <MdAdd className="text-[32px] text-white " />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {
          setOpenAddEditModal({
            isShown: false,
            type: "add",
            data: null,
          });
        }}
        style={{
          overlay: {
            backgroundColor: "rgba(15, 23, 42, 0.4)",
            backdropFilter: "blur(4px)",
            zIndex: 50,
          },
        }}
        className="w-[90%] max-w-2xl max-h-[90vh] overflow-auto bg-white rounded-3xl mx-auto mt-14 p-6 shadow-2xl outline-none"
      >
        <AddEditNotes onClose={()=>setOpenAddEditModal(false)} />
      </Modal>
    </div>
  );
};

export default Home;
