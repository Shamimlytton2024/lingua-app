import React, { useState } from 'react';

function Form() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Example API request to a mock API
    try {
      const response = await fetch(`https://api.agify.io?name=${input}`);
      const data = await response.json();
      setResult(`Predicted age for ${input} is ${data.age}`);
    } catch (error) {
      setResult('Error fetching data');
    }
  };

  return (
    <div className="form-component">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter a name"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}

export default Form;
