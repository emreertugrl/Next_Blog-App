"use client";
import Image from "next/image";
import React from "react";
import useStore from "../../../../store/useStore";

const Home = () => {
  const { setText } = useStore();
  return (
    <div>
      Home
      <img src="/1.png" alt="resim" />
      <Image src="/1.png" width={1170} height={500} alt="resim" />
      <div className="bg-red-500 mt-4">
        <input type="text" onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default Home;
