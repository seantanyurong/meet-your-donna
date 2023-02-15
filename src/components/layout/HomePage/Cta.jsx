import React from "react";

const Cta = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-16">
      <div className=" bg-highlight-eggshell p-8 md:p-20 rounded-md border-2 border-dotted border-text-main">
        <h3 className="text-3xl md:text-5xl font-bold leading-none mb-4 text-text-main">
          It's time to stop working in your business, and{" "}
          <u>working on your business instead.</u>
        </h3>
        <p className="text-xl md:text-2xl text-text-main mb-8">
          As a successful founder, you have likely experienced the challenges of
          juggling multiple secondary tasks and responsibilities, often
          resulting in a lack of time and energy to focus on primarily growing
          your business – that's where Donna comes in.
        </p>
        <div className="mx-auto max-w-sm sm:max-w-none sm:flex sm:justify-center">
          <a
            href="https://ix0dy8pqosu.typeform.com/to/XZLHJIV8"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" bg-primary-main hover:bg-primary-hover text-white py-4 px-4 md:px-10 rounded-full items-center">
              <h3 className="text-xl md:text-2xl font-medium">
                Schedule a free chat
              </h3>
              <p className="text-xs sm:text-sm font-light">
                No strings attached. Just to get to know you.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cta;
