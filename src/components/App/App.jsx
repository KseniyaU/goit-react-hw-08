import '../App/App.module.css'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Loader } from '../Loader/Loader';
import { NavBar } from '../NavBar/NavBar';



//npm install react-redux
//npm install redux-persist
//npm install @reduxjs/toolkit
//npm install @reduxjs/toolkit react-redux
//npm install react-router-dom
//npm install react-loader-spinner


const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(()=> import('../../pages/Contacts'));

function App() {
  return (
    <>
      <NavBar/>
      <Suspense fallback={ <Loader/>}>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/contacts' element={ <ContactsPage/>}></Route>
        </Routes>
      </Suspense>
    </>
)

    
}

export default App
