import { MdDelete } from "react-icons/md";

const Column = () => {
  return (
    <div className="min-h-96 min-w-72 p-2 rounded-md bg-zinc-900">
      <div className="w-full flex justify-between text-white items-center bg-zinc-800 p-2">
        <p className="py-1 bg-zinc-900 rounded-full px-3 font-bold">0</p>
        <p className="text-start w-full px-2 font-bold">Column 1</p>
        <MdDelete />
      </div>
    </div>
  );
};

export default Column;
