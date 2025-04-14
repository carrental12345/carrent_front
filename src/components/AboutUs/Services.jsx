import React from "react";

const Services = () => {
  return (
    <section className="bg-white dark:bg-dark py-20 lg:py-[120px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Image Section */}
          <div className="w-full lg:w-6/12 px-4 mb-12 lg:mb-0 animate-fade-in-left">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1490650404312-a2175773bbf5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF4aXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Taxi Service"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 xl:w-5/12 px-4 animate-fade-in-right">
            <div className="lg:ml-6">
              <span className="block mb-4 text-lg font-semibold text-primary uppercase tracking-wide">
                Why Choose Us
              </span>
              <h2 className="text-4xl font-extrabold text-dark dark:text-white mb-6 leading-snug">
                Make Every Ride Count — Choose{" "}
                <span className="text-primary">Our Taxi Services</span>
              </h2>
              <p className="mb-5 text-lg text-body-color dark:text-dark-6 leading-relaxed">
                At our company, we're committed to sustainability and the future
                of transportation. That's why we're going fully electric within
                the next two years.
              </p>
              <p className="mb-8 text-lg text-body-color dark:text-dark-6 leading-relaxed">
                Book with us for a safe, comfortable, and eco-friendly ride to
                your destination — because every journey deserves care.
              </p>
              <a
                href="#"
                className="inline-block px-8 py-3 text-white bg-primary hover:bg-primary/90 rounded-xl font-semibold shadow-md transition duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
