import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(false);

  return (
    <>
      <div className="h-10 bg-[#6970d9] text-2xl text-black">Hi</div>
      <button className="bg-black text-white" onClick={() => setCount(!count)}>
        x
      </button>
      {count ? <div>hi</div> : <div>nope</div>}
      {/* Hi avni just testing I haven't used react in 2 weekds */}
      <p className="text-2xl text-bold">
        Hi avni just testing I haven't used react in 2 weekds
      </p>
    </>
  );
}

export default App;
