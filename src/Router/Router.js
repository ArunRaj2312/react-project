import React, { useReducer } from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Subheader from '../Subheader/Subheader'
import Searchbar from '../searchbar/Searchbar'
import Explore from '../Explore/Explore'
import Gallery from '../Gallery/Gallery'
import FilterDetails from '../FilterDetails/FilterDetails'
import Unicdata from '../Unicdata/Unicdata'
import { Footer } from '../Footer/Footer'
import { mainContext } from '../Context'
import { stateReducer,initialstate } from '../Reducer'
import Api from '../Api/Api'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function Router() {
  const [state,dispatch]=useReducer(stateReducer,initialstate)
  return (
    <div>
      <mainContext.Provider value={{state,dispatch}}>
        <BrowserRouter>
        <Api/>
        <Header />
          <Routes>
            <Route path='/' element={
              <>
              <Subheader />
              <Searchbar />
              <Card />
              <Gallery />
              <Explore />
              </>
            }>
            </Route>
            <Route path='/next' element={
              <>
              <FilterDetails />
              </>
            }>
            </Route>
            <Route path='/unicdata/:id' element={
              <>
              <Unicdata />
              </>
            }>
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </mainContext.Provider>
    </div>
  )
}

export default Router