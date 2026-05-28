import React from "react";

const AddEditNotes = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Go To Gym at 5"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded "
          placeholder="Content"
          rows={10}
        />
      </div>

      <div className="mt-3">
        <label className="input-label">TAGS</label>
      </div>
      <div className="">
        <button className="btn cursor-pointer active:scale-105
         font-medium mtt-5 p-3 bg-blue-500 rounded-2xl text-white " onClick={()=>{}}>
        ADD
      </button>
      </div>
    </div>
  );
};

export default AddEditNotes;
