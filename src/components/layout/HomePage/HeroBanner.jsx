import TrioImg from "../../../assets/HomePage/Trio.png";

function HeroBanner() {
  return (
    <section className="text-center before:block before:absolute before:-inset-1  before:bg-gradient-to-b before:from-highlight-eggshell before:to-white before:h-full before:-z-1 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className=" pt-8  md:pt-4 ">
          {/* Section header */}
          <div className=" pb-12 md:pb-16">
            <h1 className="text-2xl md:text-6xl font-bold leading-none mb-4 text-text-main">
              We help successful solo entrepreneurs run their businesses.
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-text-main mb-8">
                Managing people and projects under pressure is tough enough.
                Unfortunately, lots of software makes it worse by
                over-complicating things.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos-delay="300"
              >
                <a href="/placeholder">
                  <div className=" bg-primary-main hover:bg-primary-hover text-white py-4 px-10 rounded-full items-center">
                    <h3 className="text-2xl font-medium">
                      Schedule a free chat
                    </h3>
                    <p className="text-sm font-light">
                      No credit card required. Cancel anytime.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <img
          className="mx-auto drop-shadow-3xl mb-10"
          src={TrioImg}
          alt="Logo"
        />
      </div>
      <a
        href="/placeholder"
        className="font-semibold text-2xl text-link-main hover:text-link-hover underline"
      >
        See everything we can do in the skills gallery
      </a>
    </section>
  );
}

export default HeroBanner;
