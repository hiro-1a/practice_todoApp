import React, { useState } from 'react';

type TodoFormProps = {
  onSubmit: (todo: { name: string; endDate: string }) => void;
  initialData?: { name: string; endDate: string };
};

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, initialData = { name: '', endDate: '' } }) => {
  const [name, setName] = useState<string>(initialData.name);
  const [endDate, setEndDate] = useState<string>(initialData.endDate);

  const handleSubmit = () => {
    onSubmit({ name, endDate });
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
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        placeholder="End Date"
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default TodoForm;
