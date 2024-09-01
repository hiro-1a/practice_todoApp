import React from 'react';

type Todo = {
  name: string;
  date: string;
  endDate: string;
  createdDate: Date;
  completed: boolean;
};

type TodoItemProps = {
  todo: Todo;
  onEdit: () => void;
  onDelete: () => void;
  onComplete: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onEdit, onDelete, onComplete }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onComplete}
      />
      <span>{todo.name}</span>
      <span>{todo.date}</span>
      <span>Created: {todo.createdDate.toLocaleString()}</span>
      <span>End Date: {todo.endDate}</span>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
