import React from 'react';
import TodoItem from './TodoItem';

type Todo = {
  name: string;
  date: string;
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
        <TodoItem
          key={index}
          todo={todo}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
          onComplete={() => onComplete(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;