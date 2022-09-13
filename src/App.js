import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout'
import Login from './pages/Login'
import { Button } from 'antd';

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Button type='primary'>Test Button</Button>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
