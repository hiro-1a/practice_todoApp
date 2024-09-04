import React from 'react';

type Todo = {
  name: string;
  endDate: string;
  createdDate: Date;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
  onComplete: (index: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onEdit, onDelete, onComplete }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onComplete(index)}
          />
          <span>{todo.name}</span>
          <span>End Date: {todo.endDate}</span>
          <span>Created: {todo.createdDate.toLocaleDateString()}</span>
          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
