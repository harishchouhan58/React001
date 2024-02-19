import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import About from './Pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <Header />
     <Home/>
     <Footer />
     </>
),
  },
  {
    path: "about",
    element: (
      <>
      <Header />
     <About />
     <Footer />
     </>
),
  },
]);

function App() {

  return (
    <>
    <RouterProvider router={router} >
     <Header />
     <Home/>
     <Footer />
     </RouterProvider>
    </>
  )
}

export default App
