import React from "react";

const Section = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-3 xl:max-w-[1400px] xl:mx-auto">{children}</div>;
};

export default Section;
