import './Forms-handle.css';
import React, {useState} from 'react';

function Form_Handle_One() {
  const [text,setText] = useState({text:"",writter:""});

  const getValues = (e) => {
    setText({...text, [e.target.name]:e.target.value});
  }
  return (
    <>
      <h1 id='xxx'>
        Input Form Handles
      </h1>
      <input type="text" placeholder='Enter the text' name="text" onChange={getValues} className='text-input' />
      <input type="text" placeholder='writter name' name="writter" onChange={getValues} className='text-input' />
      <input type="submit" className="submit-btn" />
      <h1 className='hook-text'>
          Slogan is :{text.text} <br/> Writter is : {text.writter}
      </h1>
      <br/>
      <div className='for-more-handle-btns'>
          <button className='more-btns more-btn-1'>Form Handle 1</button>
          <button className='more-btns more-btn-2'>Form Handle 2</button>

      </div>

    </>
  );
}

export default Form_Handle_One;
