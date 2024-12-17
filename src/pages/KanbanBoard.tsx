import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Column from "../components/Column";

const KanbanBoard = () => {
  const [columns, setColumns] = useState<string[]>([]);

  function createNewColumn() {
    setColumns((prevColumns) => [
      ...prevColumns,
      "column " + prevColumns.length,
    ]);
  }

  return (
    <div className="flex  gap-2">
      <div className="flex  gap-2">
        {columns.map((data, key) => (
          <div
            key={key}
            className="flex flex-row justify-center items-center text-white bg-black border-zinc-500 cursor-pointer ring-rose-500 hover:ring-2 rounded-lg m-auto  w-[350px] min-w-[350px] h-[60px] gap-2"
          >
            {data}
          </div>
        ))}
      </div>
      <div
        className="flex flex-row justify-center items-center text-white bg-zinc-900 border-zinc-500 cursor-pointer ring-rose-500 hover:ring-2 rounded-lg m-auto  w-[350px] min-w-[350px] h-[60px] gap-2"
        onClick={createNewColumn}
      >
        <CiCirclePlus className="" />
        <button>Add Column</button>
      </div>
      <Column />
    </div>
  );
};

export default KanbanBoard;
