import React, { useState } from 'react';
import cs from './styles';

const ProcessProjectForm = ({
  initialTitle = '',
  initialDescription = '',
  initialIsCompleted = false,
  onProcessProject,
  buttonText,
  loading
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [isCompleted, setIsCompleted] = useState(initialIsCompleted);

  return (
    <div className={cs.form}>
      <input
        type="text"
        placeholder="title"
        value={title}
        className={cs.input}
        onChange={e => setTitle(e.currentTarget.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        className={cs.input}
        onChange={e => setDescription(e.currentTarget.value)}
      />
      <label>
        Is Complete:
      <input
        type="checkbox"
        value={isCompleted}
        className={cs.input}
        onChange={e => setIsCompleted(e.currentTarget.value ? true : false)}
      />
      </label>

      {loading ? ('loading...') : (
        <button onClick={() => onProcessProject({ title, description, isCompleted })} className={cs.button}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default ProcessProjectForm;

// const ProcessProjectForm = () => (
//   <div className={cs.processProjectForm}>👋</div>
// );

