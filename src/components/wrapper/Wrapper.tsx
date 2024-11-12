import React from "react";

const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="container mx-auto max-w-screen-lg relative">
      {children}
    </section>
  );
};

export default Wrapper;
