import React from "react";
import Hero from "./sections/Hero";

import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";

import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <div className="relative">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>

        <section className="padding">
          <SuperQuality />
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="bg-black  pb-8 pt-8">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default App;
