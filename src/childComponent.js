import React,{useEffect, useState, useContext} from 'react';
import contextProvider from './contextProvider';

const ChildComponent = (props) =>{
    let [renderCount, setCount] = useState(0);
   // let contextValue = useContext(contextProvider);
   // let renderCount = 0;

    useEffect(() => {
       setCount (renderCount +1);
       console.log(renderCount);
    }, []);

    return(
        <div>
          <h3>Child Component </h3>
          <h2>renderCount : {renderCount}</h2>
        </div>
    )
}

export default ChildComponent;