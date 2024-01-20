import React from "react";

const App = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <article className="flex gap-2 flex-col w-[400px] bg-[#1a5baf] py-6 px-8 rounded-2xl shadow-card">
        <div className="w-full flex items-center justify-between">
          <img src="/sim.png" alt="" className="w-[45px]" />
          <img src="/logo.png" alt="" className="w-[120px]" />
        </div>
        <h4 className="text-[#dddddd] text-[1.6rem] font-medium mt-10 tracking-[0.3rem]">
          1234 5468 **** ****
        </h4>
        <div className="text-[#dddddd] items-end flex justify-between w-full">
          <h4 className="text-[1.3rem] uppercase font-[500]">madewith react</h4>
          <div className="text-center text-[#ffff]">
            <p>valid thru</p>
            <h5 className="font-semibold tracking-wider">08/05</h5>
          </div>
        </div>
      </article>
    </div>
  );
};

export default App;
