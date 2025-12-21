import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Blog5 = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div className="bg-[#fafafa] text-neutral-900">
      <Navbar />

    
    </div>
  );
};

export default Blog5;
