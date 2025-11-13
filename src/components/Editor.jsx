import './Editor.css';
import { useRef, useState } from 'react';

const Editor = ({ onCreate }) => {
  const [content, setContet] = useState('');
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContet(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode == 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content == '') {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContet('');
  };

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 Todo"
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
