import KanbanBoard from "./pages/KanbanBoard";

const App = () => {
  return (
    <div className="p-4 flex flex-col items-start h-screen bg-zinc-800 m-auto w-full min-h-screen px-[40px] overflow-x-auto">
      <KanbanBoard />
    </div>
  );
};

export default App;
