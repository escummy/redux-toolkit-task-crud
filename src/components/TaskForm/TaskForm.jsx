// import React from 'react'
// import { useSelector } from "react-redux";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";

export function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }

    navigate("/");
    // navigate("/favorites");
  };

  useEffect(() => {
    // To check if there are parameter
    // console.log(params);

    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 max-w-sm p-6"
        action=""
      >
        <label htmlFor="title" className="block text-md font-bold mb-2 ml-2">
          Task{" "}
        </label>
        <input
          type="text"
          name="title"
          placeholder="Create title"
          onChange={handleChange}
          value={task.title}
          className="w-full p-3 text-md rounded-md bg-zinc-600 mb-5"
        />

        <label
          htmlFor="description"
          className="block text-md font-bold mb-3 ml-2"
        >
          Description{" "}
        </label>
        <textarea
          id=""
          cols="30"
          rows="10"
          name="description"
          placeholder="Add description"
          onChange={handleChange}
          value={task.description}
          className="w-full p-3 text-md rounded-md bg-zinc-600 mb-4"
        ></textarea>
        <button className="bg-indigo-600 px-4 py-2 rounded-md ml-2">Save</button>
      </form>
    </>
  );
}
