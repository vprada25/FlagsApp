import React, { lazy, Suspense } from 'react'
import { Spin } from 'antd'
import { Provider } from 'react-redux';
import { store } from './store'
import { Layout } from 'antd';


import './App.css';
import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;

const CountriesList = lazy(() => import('./views/countries-list'));
const Search = lazy(() => import('./components/search.js'))


function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Suspense fallback={<Spin />}>
          <Layout>
            <Header>
              <Search></Search>
            </Header>
            <Content> <CountriesList /></Content>
            <Footer>Footer</Footer>
          </Layout>

        </Suspense>
      </div>
    </Provider>

  );
}

export default App;
