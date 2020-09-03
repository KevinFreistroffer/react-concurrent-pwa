import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import axios from 'axios';

function App() {
  const DataPage = React.lazy(() => import('./DataPage'));
  let promise = axios.get('https://jsonplaceholder.typicode.com/todos/1').then(data => console.log(data), error => console.log(error));




  return (
    <div className="App">
      <Header></Header>
      <Main>
        <Suspense fallback={<p>Loading...</p>}>
          <DataPage />
        </Suspense>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
