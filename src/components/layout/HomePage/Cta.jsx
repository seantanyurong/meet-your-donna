import React from "react";

const Cta = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-16">
      <div className=" bg-highlight-eggshell p-20 rounded-md border-2 border-dotted border-text-main">
        <h3 className="text-2xl md:text-5xl font-bold leading-none mb-4 text-text-main">
          It's time to focus your efforts on more important things as we handle
          the rest.
        </h3>
        <p className="text-2xl text-text-main mb-8">
          As a successful founder, you have likely experienced the challenges of
          juggling multiple tasks and responsibilities, often resulting in a
          lack of time and energy to focus on growing your business. That's
          where we come in.
        </p>
        <a href="/placeholder">
          <div className="max-w-md mx-auto bg-primary-main hover:bg-primary-hover text-white py-4 px-10 rounded-full items-center">
            <h3 className="text-2xl font-medium">Schedule a free chat</h3>
            <p className="text-sm font-light">
              No strings attached. Just for us to get to know you.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Cta;
