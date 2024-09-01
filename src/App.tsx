import React, { useState } from 'react';
import TodoList from './TodoList';
import Modal from './Modal';
import TodoForm from './TodoForm';

type Todo = {
  name: string;
  date: string;
  endDate: string; // 終了予定日
  createdDate: Date; // 作成日
  completed: boolean;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentTodo, setCurrentTodo] = useState<number | null>(null);

  const handleAddTodo = () => {
    setCurrentTodo(null);
    setIsModalOpen(true);
  };

  const handleSaveTodo = (todo: { name: string; date: string; endDate: string }) => {
    const newTodo: Todo = {
      ...todo,
      completed: false,
      createdDate: new Date(), // 現在の日付を作成日として追加
    };
    if (currentTodo !== null) {
      const updatedTodos = [...todos];
      updatedTodos[currentTodo] = { ...updatedTodos[currentTodo], ...newTodo };
      setTodos(updatedTodos);
    } else {
      setTodos([...todos, newTodo]);
    }
    setIsModalOpen(false);
  };

  const handleEditTodo = (index: number) => {
    setCurrentTodo(index);
    setIsModalOpen(true);
  };

  const handleDeleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleCompleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={handleAddTodo}>+</button>
      <TodoList
        todos={todos}
        onEdit={handleEditTodo}
        onDelete={handleDeleteTodo}
        onComplete={handleCompleteTodo}
      />
      <button onClick={handleClearCompleted}>Clear Completed</button>
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TodoForm
          onSubmit={handleSaveTodo}
          initialData={currentTodo !== null ? todos[currentTodo] : undefined}
        />
      </Modal>
    </div>
  );
};

export default App;