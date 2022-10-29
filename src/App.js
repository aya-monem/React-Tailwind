import React  from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
///// components
import SideBar from "./components/SideBar";
import SearchBar from "./components/SearchBar";
import LogIn from "./components/LogIn";
//import Dashboard from "./components/Dashboard";
const LazyDashboard = React.lazy(() => import('./components/Dashboard')) ;
const LazyBooking = React.lazy(() => import('./components/Booking')) ;
const LazySettings = React.lazy(() => import('./components/Settings')) ;
const LazyLogIn = React.lazy(() => import('./components/LogIn')) ;

const App = () => {
  //const isLogged = localStorage.getItem('isLogged');
  const isLogged = true
  return (
    <Router>
      <div className='flex'>
        {isLogged ? 
        <>
          <SideBar />
          <div className="rightCol h-fit w-5/6 border-l-2 border-l-slate-200 ">
            <SearchBar />
            <main className="content bg-slate-100 p-7 h-full">
              <Routes>
                <Route path="/" fallback='...loading'
                      element={
                      <React.Suspense>
                        <LazyDashboard />
                      </React.Suspense>} /> 
                {/* <Route path="/dashboard" fallback='...loading'
                      element={
                        <React.Suspense>
                        <LazyDashboard />
                      </React.Suspense>} />  */}
                <Route path="/booking" fallback='...loading'
                      element={
                      <React.Suspense>
                        <LazyBooking />
                      </React.Suspense>} />
                <Route path="/settings" fallback='...loading'
                      element={
                      <React.Suspense>
                        <LazySettings />
                      </React.Suspense>} />
                <Route path="/login" fallback='...loading'
                      element={
                      <React.Suspense>
                        <LazyLogIn isLogged={isLogged}/>
                      </React.Suspense>} />      
              </Routes>
            </main>
          </div>
          
        </>
      : <LogIn isLogged={isLogged}/>
      }
      </div>
    </Router>
  /*  */
    
  );
}

export default App;
