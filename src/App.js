import React, { lazy, Suspense } from 'react'
import { Spin } from 'antd'

import './App.css';
import 'antd/dist/antd.css';


const CountriesList = lazy(() => import('./views/countries-list'));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spin />}>
        <CountriesList />
      </Suspense>

    </div>
  );
}

export default App;
