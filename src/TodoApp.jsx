import { useState } from "react";
import { useGetTodosQuery, useGetTodoQuery } from "./store/apis";

export const TodoApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };
  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todo app</h1>
      <p>Loading... {isLoading ? "true" : "false"}</p>
      <hr />
      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo}>Anterior anterior</button>
      <button onClick={nextTodo}>Siguiente todo</button>

      {/* <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <strong> {todos.completed ? " DONE " : " Pending "}</strong>
            {item.title}{" "}
          </li>
        ))}
      </ul> */}
      {/* <button onClick={() => dispatch(getPokemons(page + 1))}>
        Siguiente página
      </button> */}
    </>
  );
};
