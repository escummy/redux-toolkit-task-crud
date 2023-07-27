import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "API Integration",
    description:
      "Integrate external APIs to expand application capabilities, enabling seamless data exchange and leveraging third-party services for enhanced functionality and availability.",
    completed: false,
  },
  {
    id: "2",
    title: "Optimize Code:",
    description:
      "Improve efficiency and readability by refactoring the codebase, removing redundancies, avoiding console messages and implementing best practices to enhance overall performance.",
    completed: false,
  },
  {
    id: "3",
    title: "Error Handling",
    description:
      "Implement robust error-handling mechanisms, including proper validation and user-friendly error messages, to enhance the application's resilience and user experience in case of failures.",
    completed: false,
  },
  {
    id: "4",
    title: "Test Application",
    description:
      "Create comprehensive test suites to verify the functionality and reliability of the application, ensuring that it meets all requirements and avoids potential bugs.",
    completed: false,
  },
  {
    id: "5",
    title: "Code Review",
    description:
      "Conduct thorough code reviews for each team member's work, providing constructive feedback to promote code quality, consistency, and adherence to coding standards.",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  // initialState: [initialState],
  initialState,
  reducers: {

    addTask: (state, action) => {
      state.push(action.payload);
      /* console.log(state, action); */
      // [...state, action.payload]
    },

    editTask: (state, action) => {
      // console.log(action.payload);   
      const { id, title, description } = action.payload
      const findTask = state.find((task) => task.id === id)

      if (findTask) {
        // findTask.id = id
        findTask.title = title
        findTask.description = description
      }
    },

    deleteTask: (state, action) => {
      const findTask = state.find((task) => task.id === action.payload);

      if (findTask) {
        state.splice(state.indexOf(findTask), 1);
      }
      // console.log(findTask);
      // console.log(action);
      // console.log(action.payload);
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
