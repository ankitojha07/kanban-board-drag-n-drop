import { MdDelete } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";

interface ColumnDetails {
  col: string;
}

const Column = ({ col }: ColumnDetails) => {
  const [task, setTask] = useState<string[]>([]);

  function createNewTask() {
    setTask((prevTasks) => [...prevTasks, "column " + prevTasks.length]);
  }

  return (
    <div className="min-h-96 min-w-72 p-2 rounded-md bg-zinc-900 flex flex-col justify-between items-start overflow-auto">
      <div className="w-full flex justify-between text-white items-center bg-zinc-800 p-2">
        <p className="py-1 bg-zinc-900 rounded-full px-3 font-bold">0</p>
        <p className="text-start w-full px-2 font-bold">Column {col}</p>
        <MdDelete className="text-2xl" />
      </div>
      <div className="flex flex-col gap-2 justify-start items-start mt-2 w-full h-full">
        {task.map((key) => (
          <textarea
            key={key}
            placeholder="Enter you task here..."
            className="w-full p-4 text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-zinc-500 break-words whitespace-normal bg-zinc-800 break-all text-start text-wrap"
          />
        ))}
      </div>
      <div
        className="flex justify-start items-center p-2 text-white hover:bg-zinc-800 w-full rounded-md hover:text-red-800 cursor-pointer"
        onClick={createNewTask}
      >
        <CiCirclePlus className="text-2xl" />
        <p className="px-2">Add Tasks</p>
      </div>
    </div>
  );
};

export default Column;
