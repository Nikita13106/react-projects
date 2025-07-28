import React from "react";
import UserContextProvider from "./UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-white flex flex-col items-center justify-center px-4 py-12 gap-8">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
