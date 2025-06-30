import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [characters, setcharacters] = useState(false);
  const [password, setpassword] = useState("");
  const passwordref = useRef(null);

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let char = "@#!%&*^$";
    let guaranteednum = "";
    let guaranteedchar = "";
    let remaininglength = length;
    if (number) {
      guaranteednum = num[Math.floor(Math.random() * num.length)];
      remaininglength -= 1;
      s += num;
    }
    if (characters) {
      guaranteedchar = char[Math.floor(Math.random() * char.length)];
      remaininglength -= 1;
      s += char;
    }

    for (let i = 0; i < remaininglength; i++) {
      const index = Math.floor(Math.random() * s.length);
      pass += s.charAt(index);
    }
    let ans = pass + guaranteedchar + guaranteednum;
    let finalpass = [...ans].sort(() => Math.random() - 0.5).join("");
    setpassword(finalpass);
  }, [length, number, characters]);

  useEffect(() => {
    passwordgenerator();
  }, [length, number, characters, passwordgenerator]);

  const copy = () => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(passwordref.current.value);
  };

  return (
    <>
      <h1 className="text-4xl text-center mx-auto my-6 font-semibold text-white font-mono ">
        PASSWORD GENERATOR
      </h1>
      <div className="shadow-[0_4px_12px_rgba(10,10,100,0.6)] max-w-3xl mx-auto my-9 mb-5 rounded-2xl bg-gray-400 flex justify-center items-center">
        <div className="bg-blue-50 flex justify-center items-center max-w-3xl min-w-[250px] mb-10 sm:min-w-[300px] md:min-w-[350px] lg:min-w-[500px] my-8 rounded-2xl px-2 flex-col">
          <h2 className="my-6 text-2xl font-medium">GENERATE YOUR PASSWORD</h2>
          <img
            src="https://cdn4.iconfinder.com/data/icons/aami-web-internet/64/aami17-14-1024.png"
            alt="Lock Icon"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-4"
          />

          <div className="my-2 p-4 flex justify-center items-center w-full mx-auto">
            <input
              type="text"
              placeholder="Password"
              readOnly
              className=" bg-gray-200 rounded-xl px-4 py-2 flex-1 outline-0 shadow-2xl"
              value={password}
              ref={passwordref}
            />
            <div
              className="bg-blue-400 hover:bg-blue-600 px-4 py-2 rounded-xl ml-3 cursor-pointer text-white"
              onClick={copy}
            >
              Copy
            </div>
          </div>
          <div className="flex items-center gap-x-3 my-5">
            <input
              type="range"
              id="inputid"
              min={6}
              max={30}
              value={length}
              onChange={(e) => {
                setlength(Number(e.target.value));
              }}
              className="flex-1 bg-gray-300 rounded-xl  py-2 text-lg"
            />
            <label htmlFor="inputid">
              {" "}
              <span className="text-lg">Length: {length}</span>
            </label>
          </div>
          <div className="flex items-center gap-x-3 my-5 text-lg accent-blue-500">
            <input
              type="checkbox"
              id="numbers"
              checked={number}
              onChange={() => {
                setnumber((prev) => !prev);
              }}
            />
            <label htmlFor="numbers">Include Numbers</label>
          </div>
          <div className="flex items-center gap-x-3 my-5 text-lg accent-blue-500">
            <input
              type="checkbox"
              id="characters"
              checked={characters}
              onChange={() => {
                setcharacters((prev) => !prev);
              }}
            />
            <label htmlFor="characters">Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
