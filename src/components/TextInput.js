import React from 'react';

const MAX_TEXT_LENGTH = 500;

const TextInput = ({ text, setText, setError }) => {
  const handleTextChange = (e) => {
    const input = e.target.value;
    if (input.length <= MAX_TEXT_LENGTH) {
      setText(input);
      setError('');
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2">Enter Text</label>
      <textarea
        value={text}
        onChange={handleTextChange}
        className="w-full p-2 border rounded-md h-32 resize-none"
        placeholder="Enter text to transform (max 500 characters)"
      />
      <p className="text-sm text-gray-500 mt-1">{text.length}/{MAX_TEXT_LENGTH} characters</p>
    </div>
  );
};

export default TextInput;
