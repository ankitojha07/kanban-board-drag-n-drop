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

  function deleteColumn(columnName: string) {
    setColumns((prevColumns) =>
      prevColumns.filter((col) => col !== columnName)
    );
  }

  return (
    <div className="flex gap-2 flex-col md:flex-row justify-start items-start flex-wrap">
      <div className="flex gap-2 flex-wrap">
        {columns.map((data, key) => (
          <Column key={key} col={data} onDelete={deleteColumn} />
        ))}
      </div>
      <div
        className="flex flex-row justify-center items-center text-white bg-zinc-900 border-zinc-500 cursor-pointer ring-rose-500 hover:ring-2 rounded-lg m-auto min-w-72 h-[50px] gap-2"
        onClick={createNewColumn}
      >
        <CiCirclePlus className="" />
        <button>Add Column</button>
      </div>
    </div>
  );
};

export default KanbanBoard;
