import { useCallback, useEffect, useState } from 'react';
import './App.css';


function App() {

const [state, setState] = useState(1000)
const [btnAction, setBtnAction] = useState(false)

const [ seconds1, setSeconds1 ] = useState(null);
const [ seconds2, setSeconds2 ] = useState(null);
const [ seconds3, setSeconds3 ] = useState(null);

useEffect(() => {
    if (seconds1 > 0) {
      setTimeout(setSeconds1, 100, seconds1 - 1);
    } else if (seconds2 > 0) {
      setTimeout(setSeconds2, 120, seconds2 - 1);
    } else if (seconds3 > 0) {
      setTimeout(setSeconds3, 150, seconds3 - 1);
    }
  }, [ seconds1, seconds2, seconds3 ]);

  useEffect(() => {
    if (seconds1 === 0) {
      setState(2000)
    }

    if (seconds2 === 0) {
      setState(3000)
    }

    if (seconds3 === 0) {
      setState(4000)
    }

  }, [seconds1, seconds2, seconds3])

  const btnCard1 = useCallback(() => {
    setSeconds1(60)
  }, [seconds1])
  
  const btnCard2 = useCallback(() => {
    setSeconds2(60)
  }, [seconds2])

  const btnCard3 = useCallback(() => {
    setSeconds3(60)
  }, [seconds3])

const actionBtn = useCallback(() => {
  setBtnAction(true)
}, [])

  return (
    <div className="App">
      <div>Баланс: {state}</div>
      {seconds1 ? <div>{seconds1}</div> : null}
      {seconds2 ? <div>{seconds2}</div> : null}
      {seconds3 ? <div>{seconds3}</div> : null}
<button onClick={actionBtn}>Посмотреть карточки</button>
{btnAction ? (
<>
<button onClick={btnCard1}>Открыть карточку 1</button>
<button onClick={btnCard2}>Открыть карточку 2</button>
<button onClick={btnCard3}>Открыть карточку 3</button>
</>
) : null}
    </div>
  );
}

export default App;
