// import React from 'react'

import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../features/tasks/taskSlice";
import { Link } from "react-router-dom";

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  // console.log(tasks)

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    // console.log(id);
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1 className="font-bold mb-2">Tasks [{tasks.length}]</h1>
        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 mb-2 rounded-sm text-sm"
        >
          Create task
        </Link>
      </header>

      <div className="grid grid-cols-3 gap-5">
        {tasks.map((task) => (
          <div className="bg-neutral-800 p-6 rounded-md" key={task.id}>
            <header className="flex justify-between">
              <h3 className="mr-3 truncate">{task.title}</h3>
            </header>

            <p className="mt-6 break-words">{task.description}</p>
              <div className="flex gap-x-2 pt-6 justify-center">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-zinc-500 px-4 py-1 pt-1 text-xs rounded-md"
                >
                  Edit
                </Link>
                <button
                  className="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};
