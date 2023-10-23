import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        placeholder="Enter text here"
        value={text}
        onChange={handleTextChange}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
