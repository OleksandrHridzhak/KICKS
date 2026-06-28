import './App.css'
import {Routes, Route} from 'react-router-dom'
import ListingPage from '@/pages/ListingPage'
import HomePage from '@/pages/HomePage'
import MainLayout from '@/app/layouts/MainLayout'

function App() {
  return (
    <>
    <Routes> 
      <Route element={<MainLayout/>}>      
        <Route index element={<HomePage/>}/>
        <Route path='/listing' element={<ListingPage/>}/>
      </Route>


    </Routes>
    
    </>
  )
}

export default App
