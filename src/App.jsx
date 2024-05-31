import React from "react";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route index path="/" element={<Home />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      <Home />
      <ToastContainer />
    </div>
  );
}
