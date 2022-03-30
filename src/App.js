import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';


import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

function App() {

  

  const location = useLocation();
  const routes = [
    { path: '/', element: <HomePage />, name: 'Home' },
   
    { path: '/*', element: <ErrorPage />, name: '404' },
  ]
  return (
    <div className={"App "}>
     

      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Routes location={location}>
            {routes.map(({ path, element, name }, i) => {
              return <Route exact path={path} element={element} key={name + i} />
            })}
          </Routes>
        </CSSTransition>
      </TransitionGroup>


    </div>
  );
}

export default App;



// NOTES:
// - not working from v6:
//   import { Switch, Route } from 'react-router-dom'
//   <Switch>
//     <Route path="/" component={HomePage} />
//     <Route component={ErrorPage} />  
//   </Switch>
//   info at https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom/69849271#69849271

//   transitionGroup behaves differently:
//   working example at: https://codesandbox.io/s/6l1li?file=/src/index.tsx:790-821