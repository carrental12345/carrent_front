import React from "react";

const Services = () => {
  return (
    <section className="overflow-hidden px-2 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <img src="https://images.unsplash.com/photo-1490650404312-a2175773bbf5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF4aXxlbnwwfHwwfHx8MA%3D%3D" alt="" className="img-fluid"/>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="block mb-4 text-lg font-semibold text-primary">
                Why Choose Us
              </span>
              <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
              Choose taking your ride with our company  
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
              We care about the environment and  sustainability which is why we plan on going full electric in the coming two years. 
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
              choose our Taxi services for a comfortable and convenient ride to your destination.
              </p>
              <a
                href="javascript:void(0)"
                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
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
