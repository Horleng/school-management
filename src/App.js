import React from "react";
import Dashboard from "./Dashboard";
import Navigationbar from './Navigationbar';
import Header from './Header';
const App = () => {
  return (
    <>
      <div>
        <div className="w-[15%] float-left">
          <Navigationbar />
        </div>
        <div className="w-screen ml-[15%]">
          <Header />
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default App;
