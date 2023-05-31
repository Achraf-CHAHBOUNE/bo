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
    path: "Scanner",
    element: <Scanner />,
  },
  {
    path: "/",
    element: <Enregistrer />,
  },
  {
    path: "Enregistrer",
    element: <Protect component={<Enregistrer />} />,
  },
  {
    path: "Liberer",
    element: <Liberer />,
  },
  {
    path: "Localiser",
    element: <Localiser />,
  },
  {
    path: "User",
    element: <User />,
  },
  {
    path: "User/CreateUser",
    element: <CreateUser />,
  },
  {
    path: "User/EditUser/:username",
    element: <Protect component={<EditUser />} />,
  },
  {
    path: "SignIn",
    element: <SignIn />,
  }
]);

const router2 = createBrowserRouter([
  {
    path: "Scanner",
    element: <Scanner />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Enregistrer",
    element: <Protect component={<Enregistrer />} />,
  },
  {
    path: "Liberer",
    element: <Liberer />,
  },
  {
    path: "Localiser",
    element: <Localiser />,
  },
  {
    path: "SignIn",
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