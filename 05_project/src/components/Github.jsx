import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-white flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="w-32 h-32 rounded-full mx-auto shadow-md"
        />

        <h1 className="text-2xl font-bold text-pink-600 mt-4">{data.name}</h1>
        <p className="text-gray-600">@{data.login}</p>

        {data.bio && (
          <p className="text-gray-500 text-sm mt-2 px-4">{data.bio}</p>
        )}

        <div className="mt-6 text-sm text-gray-700">
          <span className="block font-bold text-lg">{data.public_repos}</span>
          <span className="text-gray-600">Public Repositories</span>
        </div>

        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-full transition"
        >
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
}



export const githubInfo = async () => {
  const response = await fetch(`https://api.github.com/users/Nikita13106`);
  return response.json();
};
