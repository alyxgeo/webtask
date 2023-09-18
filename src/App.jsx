import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CustomerPage from './pages/CustomerPage';
import PageNotFound from './pages/PageNotFound';




const App = () => {

  return (

    <BrowserRouter>

      <Routes>

      <Route index element={ <Navigate replace to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/customer' element={<CustomerPage />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </BrowserRouter>


  )
}

export default App