import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import ParentApp from './usememoexample';


//ReactDOM.render(<App count={2}/>, document.getElementById('root'));

ReactDOM.render(<ParentApp />, document.getElementById('root'));

serviceWorker.unregister();
