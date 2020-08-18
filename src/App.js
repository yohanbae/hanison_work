import React from 'react';
import './App.css';
import Main from "./Components/Main";
import New from "./Components/New";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <>
        <New />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange={false}
          draggable={false}
          pauseOnHover={false}
        />
      </>
  );
}

export default App;
