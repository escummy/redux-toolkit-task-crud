import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskForm } from "./components/TaskForm/TaskForm";
// import { useSelector } from "react-redux";

function App() {
  // const tasksState = useSelector((state) => state.tasks);
  // console.log(tasksState);

  return (
        <div className="bg-zinc-900 h-screen text-white">
          <div className="flex items-center justify-center h-full">
            <Router>
                <Routes>
                  <Route exact path="/" element={<TaskList />} />
                  <Route exact path="/create-task" element={<TaskForm />} />
                  <Route exact path="/edit-task/:id" element={<TaskForm />} />
                </Routes>
            </Router>
          </div>
        </div>
  );
}

export default App;

// <div className="flex flex-col h-full items-center justify-center bg-gray-200 text-gray-700">
//   <div className="flex items-center">
//     <h1 className="text-6xl font-thin tracking-wider">Create React App + Tailwind CSS</h1>
//   </div>
//   <p className="my-6 tracking-wide">
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <div className="mt-6 flex justify-center">
//     <a
//       className="uppercase hover:underline"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//     <a
//       className="ml-10 uppercase hover:underline"
//       href="https://tailwindcss.com"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn Tailwind
//     </a>
//   </div>
// </div>
