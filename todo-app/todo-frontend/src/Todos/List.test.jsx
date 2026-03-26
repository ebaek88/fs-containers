import { render, screen } from "@testing-library/react";
import TodoList from "./List.jsx";

test("renders content", () => {
  const todos = [
    {
      text: "good morning",
      done: false,
    },
  ];

  const deleteTodo = async (todo) => {
    await console.log(`todo ${todo} deleted`);
  };

  const completeTodo = async (todo) => {
    await console.log(`todo ${todo} completed`);
  };

  render(
    <TodoList
      todos={todos}
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
    />,
  );

  const element = screen.queryByText("good morning");
  expect(element).toBeInTheDocument();
});
