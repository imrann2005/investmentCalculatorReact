import React,{useState} from 'react';
import UserInput from './components/UserInput';
import Result from './components/Result';

const labelTitle = ["initialInvestment", "annualInvestment", 'expectedReturn', 'duration'];

function App() {
  const [input, setInput] = useState({
        initialInvestment : 10000,
        annualInvestment : 1200,
        expectedReturn : 6,
        duration : 10,
    });

    function handleChange(event){
        const {name,value} = event.target;
        setInput(prevInput => ({
            ...prevInput,
            [name]: +value
        }));
    }

    let newInput = input;

  return (
    <>
      <div id="user-input" className="input-group">
        {
          labelTitle.map((label, index) => {
            return (
              <UserInput title={label} key={label} id={label} onChange={handleChange} value={input[label]}/>)
          })
        }
      </div>

      {newInput.duration > 0 ? <Result newInput={input}/> : <h4 style={{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
      }}>Enter a Positive Duration</h4>}
        
      

    </>
  )
}

export default App;
