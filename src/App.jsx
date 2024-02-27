import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Signup from './pages/auth/signup/Signup'

function App() {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer
                position='top-right'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
                theme='light'
            />
        </>
    )
}

export default App