import { MdDelete } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";

interface ColumnDetails {
  col: string;
  onDelete: (columnName: string) => void;
}

const Column = ({ col, onDelete }: ColumnDetails) => {
  const [task, setTask] = useState<string[]>([]);
  const [hoveredTaskIndex, setHoveredTaskIndex] = useState<number | null>(null);

  function createNewTask() {
    setTask((prevTasks) => [...prevTasks, "Task " + (prevTasks.length + 1)]);
  }

  function deleteTask(index: number) {
    setTask((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  return (
    <div className="h-96 w-72 p-2 rounded-md bg-zinc-900 flex flex-col justify-between items-start">
      <div className="w-full flex justify-between text-white items-center bg-zinc-800 p-2">
        <p className="py-1 bg-zinc-900 rounded-full px-3 font-bold">
          {task.length}
        </p>
        <p className="text-start w-full px-2 font-bold">Column {col}</p>
        <MdDelete
          className="text-2xl cursor-pointer"
          onClick={() => onDelete(col)}
        />
      </div>

      <div className="flex flex-col gap-4 mt-2 w-full overflow-y-auto scrollbar-hide">
        {task.map((taskName, index) => (
          <div
            key={index}
            className="w-full relative"
            onMouseEnter={() => setHoveredTaskIndex(index)}
            onMouseLeave={() => setHoveredTaskIndex(null)}
          >
            <textarea
              placeholder={taskName}
              className="w-full p-2 text-white rounded-md resize-none py-2 bg-zinc-800 outline-none scrollbar-hide"
              rows={2}
            />
            {hoveredTaskIndex === index && (
              <MdDelete
                className="absolute top-2 right-2 text-zinc-600 cursor-pointer text-2xl"
                onClick={() => deleteTask(index)}
              />
            )}
          </div>
        ))}
      </div>

      <div
        className="flex justify-start items-center p-2 text-white hover:bg-zinc-800 w-full rounded-md hover:text-red-800 cursor-pointer"
        onClick={createNewTask}
      >
        <CiCirclePlus className="text-2xl" />
        <p className="px-2">Add Task</p>
      </div>
    </div>
  );
};

export default Column;
