import React, { lazy, Suspense } from 'react'
import { Spin } from 'antd'
import { Provider } from 'react-redux';
import { store } from './store'
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import './App.css';
import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;

const CountriesList = lazy(() => import('./views/countries-list'));
const Search = lazy(() => import('./components/search.js'))
const CountriePage = lazy(() => import('./components/countrie-page.js'))


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Suspense fallback={<Spin />}>
            <Layout>
              <Header>
                <Search></Search>
              </Header>
              <Switch>
                <Route path='/country/:id' component={CountriePage}>
                </Route>
                <Route path='/'>
                  <Content> <CountriesList /></Content>
                  <Footer>Footer</Footer>
                </Route>
              </Switch>
            </Layout>
          </Suspense>
        </div>
      </Router>

    </Provider>

  );
}

export default App;
