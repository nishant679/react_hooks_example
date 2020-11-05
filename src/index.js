import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import ParentApp from './usememoexample'
import {ThemedButton} from './context'

// const App = (props) => {
//     // const [count, setCount] = useState(props.count)
//     // const [text, setText] = useState('')
//     const [state, setState] = useState({
//         count: props.count,
//         text: ''
//     })

//     return (
//         <div>
//             <p>The current {state.text || 'count'} is {state.count}</p>
//             <button onClick={() => setState({ count: state.count - 1 })}>-1</button>
//             <button onClick={() => setState({ count: props.count })}>reset</button>
//             <button onClick={() => setState({ count: state.count + 1 })}>+1</button>
//             <input value={state.text} onChange={(e) => setState({ text: e.target.value })} />
//         </div>
//     )
// }

const App = (props) => {
    const [count, setCount] = useState(props.count)
    const [text, setText] = useState('')

    useEffect(()=>{
        document.title = count;
    }, [])

    return (
        <div>
            <p>The current {text || 'count'} is {count}</p>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(props.count)}>reset</button>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}

App.defaultProps = {
    count: 0
}

//ReactDOM.render(<App count={2}/>, document.getElementById('root'));

ReactDOM.render(<ThemedButton />, document.getElementById('root'));

serviceWorker.unregister();
