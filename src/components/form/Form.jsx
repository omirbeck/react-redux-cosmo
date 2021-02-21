import React from 'react'

import "./Form.css"

const Form = () => {
  const [value, setValue] = React.useState("");

  const handleVhange = (event) => {
    setValue(event.target.value);
  }

  const onSubmit = (event) => {
    alert("Send message: " + value);
    setValue("");
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <label> Message 
        <textarea 
          value={value} 
          onChange={handleVhange} 
          className="text-area"
        />
      </label>
      <input type="submit" value="Send" />
    </form>
  )
}

export default Form;
