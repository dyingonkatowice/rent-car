import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen items-center m-auto text-center text-4xl text-white bg-black text-bold justify-center">
        Hey
      </div>
    </>
  );
}

export default App;
