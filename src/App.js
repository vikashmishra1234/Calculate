
import './style.css'
import { useState } from 'react';

function App() {
  const [Result,setResult]=useState('');
  const handleChange=(e)=>{
    setResult(Result.concat(e.target.name))
  }
  const handleBackspace=()=>{
    setResult(Result.slice(0,Result.length-1))
  }
  const handleClear=()=>{
    setResult('')
  }

  const calculate = ()=>{
    try {
      
      let newResult= eval(Result)
      setResult(  newResult.toString())
    } catch (error) {
      alert("invalid syntax")
      setResult('')
      
    }
  }
  return (
    <>
    <div className='greet'>
      <h1>
        Calculate Me !
      </h1>
    </div>
    <div className="container">
    <form className="form">
        <input className="btn input" value={Result}  onClick={handleChange}  type="text"/>
    </form>  
    <div className="keyword">
    <button onClick={handleClear}  className="btn clear highlight" >clear</button>
    <button onClick={handleBackspace} className="btn highlight" >C</button>
    <button onClick={handleChange}name='/' className="btn highlight" >&divide;</button>
    <button onClick={handleChange} name="7" className="btn " >7</button>
    <button onClick={handleChange} name="8" className="btn " >8</button>
    <button onClick={handleChange} name="9" className="btn " >9</button>
    <button onClick={handleChange} name="*" className="btn highlight " >&times;</button>
    <button onClick={handleChange} name="4" className="btn " >4</button>
    <button onClick={handleChange} name="5" className="btn " >5</button>
    <button onClick={handleChange} name="6" className="btn " >6</button>
    <button onClick={handleChange} name="-" className="btn highlight " >&ndash;</button>
    <button onClick={handleChange} name="1" className="btn " >1</button>
    <button onClick={handleChange} name="2" className="btn " >2</button>
    <button onClick={handleChange} name="3" className="btn " >3</button>
    <button onClick={handleChange}  name='+' className="btn highlight" >+</button>
    <button onClick={handleChange}  name='0' className="btn " >0</button>
    <button onClick={handleChange}  name='.' className="btn " >.</button>
    <button name= '=' onClick={calculate} className="btn result " >=</button>

    </div>
    
</div>
</>   
  );
}

export default App;
