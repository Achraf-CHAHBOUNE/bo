import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './component/Pages/Home/Home';
import Protect from './component/protect/Protect';
import Enregistrer from './component/Pages/Enregistrer/Enregistrer';
import Liberer from './component/Pages/Liberer/Liberer';
import Localiser from './component/Pages/Localiser/Localiser';
import SignIn from './component/Pages/SignIn/SignIn'
import User from './component/Pages/User/User';
import CreateUser from './component/Pages/User/CreateUser/CreateUser'
import EditUser from './component/Pages/User/EditUser/EditUser';
import Scanner from './component/Pages/Scanner/Scanners';

const router1 = createBrowserRouter([
  {
    path: "Bproject/Scanner",
    element: <Protect component={<Scanner /> } />,
  },
  {
    path: "/Bproject",
    element: <Home />,
  },
  {
    path: "Bproject/Enregistrer",
    element: <Protect component={<Enregistrer />} />,
  },
  {
    path: "Bproject/Liberer",
    element: <Liberer />,
  },
  {
    path: "Bproject/Localiser",
    element: <Protect component={<Localiser /> } />,
  },
  {
    path: "Bproject/User",
    element: <Protect component={<User /> } />,
  },
  {
    path: "Bproject/User/CreateUser",
    element: <Protect component={<CreateUser /> } />
  },
  {
    path: "Bproject/User/EditUser/:username",
    element: <Protect component={<EditUser />} />,
  },
  {
    path: "Bproject/SignIn",
    element: <SignIn />,
  }
]);

const router2 = createBrowserRouter([
  {
    path: "Bproject/Scanner",
    // element: <Scanner />,
    element:<Protect component={<Scanner /> } />
  },
  {
    path: "/Bproject",
    element: <Home />,
  },
  {
    path: "Bproject/Enregistrer",
    element: <Protect component={<Enregistrer />} />,
    // element: <Enregistrer /> 
  },
  {
    path: "Bproject/Liberer",
    // element: <Liberer />,
    element:<Protect component={<Liberer /> } />
  },
  {
    path: "Bproject/Localiser",
    // element: <Localiser />,
    element:<Protect component={<Localiser /> } />
  },
  {
    path: "Bproject/SignIn",
    element: <SignIn />,
  }
]);




function App() {
  const isAdmin = localStorage.getItem("admin") === "true";
  console.log("the current is ", isAdmin);
  return (
    <div>
      <RouterProvider router={isAdmin ? router1 : router2} />
    </div>
  );
}
export default App;