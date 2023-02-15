import TrioImg from "../../../assets/HomePage/Trio.png";

function HeroBanner() {
  return (
    <section className="text-center before:block before:absolute before:-inset-1  before:bg-gradient-to-b before:from-highlight-eggshell before:to-white before:h-full before:-z-1 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-16 md:pt-4 ">
          {/* Section header */}
          <div className=" pb-12 md:pb-16">
            <h1 className="text-4xl md:text-6xl font-bold leading-none mb-4 text-text-main">
              We help successful solo entrepreneurs do the dumb work.
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-text-main mb-8">
                Donna is a full-stack team of 3 Singaporean dudes that will help
                you take care of tasks that are stealing your energy, leaving
                you free to focus on what matters. We're like virtual assistants
                – but on steroids.
              </p>
              <div className="mx-auto max-w-xs sm:max-w-none sm:flex sm:justify-center">
                <a
                  href="https://ix0dy8pqosu.typeform.com/to/XZLHJIV8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className=" bg-primary-main hover:bg-primary-hover text-white py-4 px-2 md:px-10 rounded-full items-center">
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
        href="#skills"
        className="font-semibold text-2xl text-link-main hover:text-link-hover underline"
      >
        See everything we can do in the skills gallery
      </a>
    </section>
  );
}

export default HeroBanner;
