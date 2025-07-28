import React, { useContext } from "react";
import userContext from "../UserContext";

function Profile() {
  const { user } = useContext(userContext);

  return (
    <div className="w-full max-w-xs bg-white rounded-3xl shadow-sm px-5 py-3 text-center ">
      {user ? (
        <div>
          <h3 className="text-lg font-semibold text-purple-700 ">
            Welcome, {user.username}! ✨
          </h3>
          <p className="text-sm text-gray-500 mt-1">Glad to see you here 💜</p>
        </div>
      ) : (
        <div>
          <h3 className=" text-base font-medium text-gray-700">
            Please log in to continue 🌸
          </h3>
        </div>
      )}
    </div>
  );
}

export default Profile;
