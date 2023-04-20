import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Category from "./components/Category/Category";
import Error from "./components/Error/Error";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Spending from "./components/Spending/Spending";
import Transaction from "./components/Transaction/Transaction";
import store from "./redux/store";

function App() {
  // function handleAuthSuccess(response) {
  //   console.log(response);
  // }

  useEffect(() => {
    // google.accounts.id.initialize({
    //   clientId:
    //     "296149066603-3g5stn3jp22a4sgvk429m5eu20gkj4s2.apps.googleusercontent.com",
    //   callback: handleAuthSuccess
    // });
    // google.accounts.id.renderButton(document.getElementById("signDiv"), {
    //   theme: "outline"
    // });
  }, []);
  const { pathname } = useLocation();
  return (
    <>
      <Provider store={store}>
        <div className="App">
          {pathname === "/" || pathname === "/signup" ? null : <Navbar />}
          <div className="container">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="spending" element={<Spending />} />
              <Route path="spending/:id" element={<Spending />} />
              <Route path="transaction" element={<Transaction />} />
              <Route path="category" element={<Category />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </Provider>
      <div id="signDiv"></div>
    </>
  );
}

export default App;
