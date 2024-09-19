import { useState } from "react"
import Counter from "./Counter";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


//create counter app using function component (props state)

  function App() {
    const [no , setNo ] = useState(0);

    const Increment = () => {
      setNo(no + 1);
    }

    const Decrement = () => {
      setNo(no - 1);
    }

    const Reset = () => {
      setNo(0);
    }

    return (
      <div  align="center">
        <Counter
        no = {no}
        plus = {Increment}
        minus = {Decrement}
        reset  = {Reset}
        />
      </div>
    )
  }

export default App
