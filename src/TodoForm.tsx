import React, { useState } from 'react';

type TodoFormProps = {
  onSubmit: (todo: { name: string; date: string; endDate: string }) => void;
  initialData?: { name: string; date: string; endDate: string };
};

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, initialData = { name: '', date: '', endDate: '' } }) => {
  const [name, setName] = useState<string>(initialData.name);
  const [date, setDate] = useState<string>(initialData.date);
  const [endDate, setEndDate] = useState<string>(initialData.endDate);

  const handleSubmit = () => {
    onSubmit({ name, date, endDate });
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
      />
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="datetime-local"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        placeholder="End Date"
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default TodoForm;
