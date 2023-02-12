import React from "react";

const Cta = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-16">
      <div className=" bg-highlight-eggshell p-20 rounded-md border-2 border-dotted border-text-main">
        <h3 className="text-2xl md:text-5xl font-bold leading-none mb-4 text-text-main">
          All this, plus a lot more, is live today for everyone in Basecamp.
        </h3>
        <p className="text-2xl text-text-main mb-8">
          If it’s been a while since you’ve used Basecamp, now’s the perfect
          time to give it another try. So much has changed, so much has
          improved, and so much will keep getting better.
        </p>
        <a href="/placeholder">
          <div className="max-w-sm mx-auto bg-primary-main hover:bg-primary-hover text-white py-4 px-10 rounded-full items-center">
            <h3 className="text-2xl font-medium">Schedule a free chat</h3>
            <p className="text-sm font-light">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Cta;
