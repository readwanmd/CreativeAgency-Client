import React, {createContext, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import PrivateRoute from './Components/Login/PrivateRoute';
import Login from './Components/Login/Login';
import CustomerOrder from './Components/CustomerDashboard/CustomerOrder/CustomerOrder';
import CustomerService from './Components/CustomerDashboard/CustomerService/CustomerService';
import CustomerReview from './Components/CustomerDashboard/CustomerReview/CustomerReview';
import AddAdmin from './Components/AdminDashboard/AddAdmin/AddAdmin';
import AddService from './Components/AdminDashboard/AddService/AddService';
import AllServices from './Components/AdminDashboard/AllServices/AllServices';
import Dashboard from './Components/Shared/Dashboard/Dashboard';
import NoMatch from './Components/NoMatch/NoMatch';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>

{/* ------------------------------------------------------- */}
          <PrivateRoute exact path="/dashboard/service-list">
            <AllServices />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/add-service">
            <AddService />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/add-admin">
            <AddAdmin />
          </PrivateRoute>

          {/* ------------- */}
          
          <PrivateRoute exact path="/dashboard/c-order">
            <CustomerOrder />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/c-service">
              <CustomerService />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/c-review">
              <CustomerReview />
          </PrivateRoute> 
{/* ------------------------------------------------------- */} 

          <PrivateRoute exact path="/dashboard/c-order/:pName">
           <CustomerOrder />
          </PrivateRoute>

          <Route exact path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;


















































// import React, {createContext, useEffect, useState} from 'react';
// import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from './Components/Home/Home/Home';
// import PrivateRoute from './Components/Login/PrivateRoute';
// import Login from './Components/Login/Login';
// import CustomerOrder from './Components/CustomerDashboard/CustomerOrder/CustomerOrder';
// import CustomerService from './Components/CustomerDashboard/CustomerService/CustomerService';
// import CustomerReview from './Components/CustomerDashboard/CustomerReview/CustomerReview';
// import AddAdmin from './Components/AdminDashboard/AddAdmin/AddAdmin';
// import AddService from './Components/AdminDashboard/AddService/AddService';
// import AllServices from './Components/AdminDashboard/AllServices/AllServices';
// import Dashboard from './Components/Shared/Dashboard/Dashboard';

// export const UserContext = createContext();

// function App() {
//   const [loggedInUser, setLoggedInUser] = useState({});

//   return (
//     <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
//      <Router>
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>

//           <Route exact path="/home">
//             <Home />
//           </Route>
//           <Route exact path="/login">
//             <Login />
//           </Route>

//           <Route exact path="/dashboard">
//             <Dashboard />
//           </Route>

// {/* ------------------------------------------------------- */}
//           <Route exact path="/dashboard/service-list">
//             <AllServices />
//           </Route>

//           <Route exact path="/dashboard/add-service">
//             <AddService />
//           </Route>

//           <Route exact path="/dashboard/add-admin">
//             <AddAdmin />
//           </Route>

//           {/* ------------- */}
          
//           <Route exact path="/dashboard/c-order">
//             <CustomerOrder />
//           </Route>

//           <Route exact path="/dashboard/c-service">
//               <CustomerService />
//           </Route>

//           <Route exact path="/dashboard/c-review">
//               <CustomerReview />
//           </Route> 
// {/* ------------------------------------------------------- */}

//           <Route exact path="/dashboard/c-order/:pName">
//             <CustomerOrder />
//           </Route>
//         </Switch>
//       </Router>
//     </UserContext.Provider>
//   );
// }

// export default App;
