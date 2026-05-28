import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      
      <div className="flex items-start justify-between">
        <div>
          <h6 className="text-base font-semibold text-slate-800">
            {title}
          </h6>

          <span className="text-xs text-slate-500">
            {date}
          </span>
        </div>

        <MdOutlinePushPin
          className={`text-2xl cursor-pointer transition-colors duration-300 ${
            isPinned
              ? "text-indigo-500"
              : "text-slate-300 hover:text-indigo-400"
          }`}
          onClick={onPinNote}
        />
      </div>

      <p className="text-sm text-slate-600 mt-4 leading-6">
        {content?.slice(0, 80)}...
      </p>

      <div className="flex items-center justify-between mt-5">
        <span className="text-xs text-indigo-500 font-medium">
          {tags}
        </span>

        <div className="flex items-center gap-3">
          <MdCreate
            className="text-xl text-slate-400 cursor-pointer hover:text-green-500 transition-colors duration-300"
            onClick={onEdit}
          />

          <MdDelete
            className="text-xl text-slate-400 cursor-pointer hover:text-red-500 transition-colors duration-300"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;