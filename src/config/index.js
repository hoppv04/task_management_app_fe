export const signUpFormControls = [
  {
    id: "name",
    label: "Name",
    placeholder: "Enter your name",
    componentType: "input",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const signInFormControls = [
  {
    id: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const scrumBoardOptions = [
  {
    id: "todo",
    label: "To Do",
  },
  {
    id: "inProgress",
    label: "In Progress",
  },
  {
    id: "blocked",
    label: "Blocked",
  },
  {
    id: "review",
    label: "Review",
  },
  {
    id: "done",
    label: "Done",
  },
];

export const addNewTaskFormControls = [
  {
    id: "title",
    type: "text",
    placeholder: "Enter Title",
    label: "Title",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Enter Description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "status",
    placeholder: "Enter Status",
    label: "Status",
    componentType: "select",
    options: scrumBoardOptions,
  },
  {
    id: "priority",
    placeholder: "enter priority",
    label: "Priority",
    componentType: "select",
    options: [
      { id: "low", label: "Low" },
      { id: "medium", label: "Medium" },
      { id: "high", label: "High" },
    ],
  },
];
