import { useState } from "react";
function App() {
  const [color, setColor] = useState("Lavender");

  return (
    <>
      <div
        className="w-full h-screen flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <div className=" fixed flex flex-wrap mx-auto sm:mt-120 md:mt-140 lg:mt-150 text-center px-4 sm:px-6 lg:px-8 py-3 bg-white rounded-4xl gap-4">
          <button
            className="bg-red-600 px-3 py-2 rounded-3xl text-white shadow-xl"
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="bg-green-600 px-3 py-2 rounded-3xl shadow-xl"
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="bg-blue-600 px-3 py-2 rounded-3xl shadow-xl"
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="bg-gray-400 px-3 py-2 rounded-3xl shadow-xl"
            onClick={() => {
              setColor("gray");
            }}
          >
            Gray
          </button>
          <button
            className="bg-pink-300 px-3 py-2 rounded-3xl shadow-xl"
            onClick={() => {
              setColor("pink");
            }}
          >
            Pink
          </button>
          <button
            className="bg-yellow-200 px-3 py-2 rounded-3xl shadow-xl"
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="bg-pink-800 px-3 py-2 rounded-3xl text-white shadow-xl"
            onClick={() => {
              setColor("purple");
            }}
          >
            Purple
          </button>
          <button
            className="bg-white shadow-xl px-3 py-2 rounded-3xl"
            onClick={() => {
              setColor("white");
            }}
          >
            White
          </button>
          <button
            className="bg-black text-white px-3 py-2 rounded-3xl shadow-xl"
            onClick={() => {
              setColor("black");
            }}
          >
            Black
          </button>
          <button
            className="bg-orange-300 px-3 py-2 rounded-3xl shadow-xl"
            onClick={() => {
              setColor("orange");
            }}
          >
            Orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
