import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      Home
      <img src="/1.png" alt="resim" />
      <Image src="/1.png" width={1170} height={500} alt="resim" />
    </div>
  );
};

export default Home;
