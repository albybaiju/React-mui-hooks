import React from 'react'
import {Route, Routes} from 'react-router-dom'
import District from './Admin/District'
import Place from './Admin/Place'
import Category from './Admin/Category'
import Subcategory from './Admin/Subcategory'
import  UseReducer  from './Admin/UseReducer'
import UseCallbackandMemo from './Admin/UseCallbackandMemo'
import LayoutEffect from './Admin/UseRef'
const App = () => {
  return (
    <div>
       <Routes>
        <Route path='/District' element={<District/>} />
        <Route path='/Place' element={<Place/>}/>
        <Route path='/Category' element={<Category/>}/>
        <Route path='/Subcategory' element={<Subcategory/>}/>
        <Route path='/UseReducer' element={<UseReducer/>}/>
        <Route path='/UseCallbackandMemo' element={<UseCallbackandMemo/>}/>
        <Route path='/UseRef' element={<LayoutEffect/>}/>
       </Routes>
    </div>
   
  )
}

export default App