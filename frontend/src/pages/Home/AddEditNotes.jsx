import { useState } from "react";
import TagInput from "../../components/Input/TagInput";

import { MdClose } from "react-icons/md";

const AddEditNotes = ({onClose}) => {
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [tags, setTags] = useState([]);


  
  

  return (
    <div className="relative">
      <button
        className="absolute  right-2 p-1 rounded-md hover:bg-red-600 hover:text-white transition cursor-pointer active:scale-95"
        onClick={onClose}
      >
        <MdClose className="text-lg font-semibold" />
      </button>

      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="text-2xl  text-slate-950 outline-none  bg-slate-50"
          placeholder="Go To Gym at 5"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded "
          placeholder="Content"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      <div className="mt-3">
        <label className="input-label">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
      <div className="">
        <button
          className="btn cursor-pointer active:scale-105
         font-medium mtt-5 p-3 bg-blue-500 rounded-2xl text-white "
          onClick={() => {}}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddEditNotes;
