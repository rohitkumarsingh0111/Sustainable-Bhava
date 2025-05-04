import React from "react";
import event_1 from "../assets/event_1.svg";
import event_2 from "../assets/event_2.svg";
import event_3 from "../assets/event_3.svg";
import event_4 from "../assets/event_4.svg";

const MainBody = () => {
  return (
    <>
      <div className="flex overflow-x-auto md:mx-24 mx-2 justify-center">
        <div className="m-2 mt-10">
          <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-8 hover:scale-105 transition duration-150ms shadow-2xl">
            <img src={event_1} alt="event 1" className="mx-auto rounded-lg" />
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Art for planet: open mic event
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                <span className="font-bold">Date: May 4th, 2024</span>
                <br />
                Join us for a captivating evening dedicated to artistic
                expression! Our open mic event features performances in dance,
                music, poetry, and drama, all aimed at raising awareness through
                creativity and talent. Don't miss this opportunity to be
                inspired and entertained!
                <br />
                <br />
                <span className="font-bold">
                  Venue: TOT Studio, Lajpat Nagar
                </span>
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJg05FhyN8lsHGZCA0vXkjPLRK6CxoNb5HlTpDo-BvXbxzdA/viewform">
                  Register here
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="m-2 mt-10">
          <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-8 hover:scale-105 transition duration-150ms shadow-2xl">
            <img src={event_2} alt="event 2" className="mx-auto rounded-lg" />
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Song Release: "Sargam Geet: Plastic Mukt Bharat"
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                <span className="font-bold">Date: April 18th, 2024</span>
                <br />
                Join us for the release of "Sargam Geet: Plastic Mukt Bharat," a musical ode to a Plastic-Free India. Experience the harmony of music and activism as we unveil this inspiring composition aimed at promoting environmental sustainability. Let's come together to celebrate the power of music in fostering positive change!
              </p>
              <br />
            </div>
            <div className="p-6 pt-0">
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJg05FhyN8lsHGZCA0vXkjPLRK6CxoNb5HlTpDo-BvXbxzdA/viewform">
                  Register here
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="m-2 mt-10">
          <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-8 hover:scale-105 transition duration-150ms shadow-2xl">
            <img src={event_3} alt="event 3" className="mx-auto rounded-lg" />
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Planet vs Plastic Online Session
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                <span className="font-bold">Date: 19th April, 2024</span>
                <br />
                Join us for an engaging online session on Friday, April 19th, where we delve into this year earth day theme of "Planet vs Plastic" with the bright minds of Sheikhupur Primary School. Together, we'll explore the impact of plastic pollution on our environment and discuss sustainable solutions to combat this pressing issue. Don't miss out on this enlightening discussion!
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJg05FhyN8lsHGZCA0vXkjPLRK6CxoNb5HlTpDo-BvXbxzdA/viewform">
                  Register here
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="m-2 mt-10">
          <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-8 hover:scale-105 transition duration-150ms shadow-2xl">
            <img src={event_4} alt="event 4" className="mx-auto rounded-lg" />
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Poster Making Competition
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                <span className="font-bold">Date: 27th April 2024</span>
                <br />
                Get ready to unleash your creativity and raise awareness about the urgent need to tackle plastic pollution! Join us for the Planet vs Plastic Poster Making Competition at Mount Abu School on April 27th. Express your ideas, inspire change, and be part of the solution to protect our planet. Let your artistic talent shine as you create impactful posters that advocate for a plastic-free future!
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJg05FhyN8lsHGZCA0vXkjPLRK6CxoNb5HlTpDo-BvXbxzdA/viewform">
                  Register here
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
