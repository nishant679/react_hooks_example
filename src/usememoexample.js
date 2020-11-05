import React, {useMemo, useState, useContext} from 'react';
import ChildComponent from './childComponent';



const ParentApp = () => {
    const [i, setI] = useState( 0 );

    function increment (){
        setI(i+1);
    }

    const memochild = useMemo( ()=> {
        return <ChildComponent></ChildComponent>
    }, [])

    return (
        <div>
          <h2>i : {i}</h2>
          <button onClick={increment}>Increment i</button>
           <p>Rendering child component below</p>
          <ChildComponent />
          <p> rendering memo child </p>
          {memochild}
        </div>
    );
};

export default ParentApp;