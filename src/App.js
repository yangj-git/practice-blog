import '@/App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLayout from '@/pages/Layout'
import Login from '@/pages/Login';
import { AuthComponent } from './components/AuthComponent';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={
            <AuthComponent>
              <AdminLayout/>
            </AuthComponent>
          }/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
