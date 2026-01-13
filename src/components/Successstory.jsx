import TimelineItem from "./TimelineItem";
import { timelineData } from "../assets/timelineData.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function SuccessStory() {
  return (
    <>
      <Navbar />
      <section
        className="bg-gradient-to-b 
        from-yellow-50 via-yellow-50 to-amber-50 
        py-24"
      >
        {/* Hero */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What We’ve Achieved Together 🌱
          </h2>

          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-16">
            Every milestone represents real lives changed, communities strengthened,
            and opportunities created through collective effort and shared purpose.
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-20">
            <Stat value="10,000+" label="Lives Impacted" />
            <Stat value="75+" label="Communities Reached" />
            <Stat value="40+" label="Active Programs" />
            <Stat value="25+" label="Partner Organizations" />
          </div>

          {/* Values */}
          
        </div>
        

        {/* IMPACT SUMMARY SECTION */}

        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Our Journey of Impact
          </h1>
          <p className="text-gray-700 text-lg">
            Transforming lives through education, empowerment, and sustainability.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-7xl mx-auto mb-40">
          {/* Center Line */}
          <div
            className="absolute left-1/2 top-0 w-[4px] h-full 
            bg-gradient-to-b from-yellow-400 via-orange-400 to-green-500 
            -translate-x-1/2 rounded-full"
          />

          <div className="flex flex-col gap-32">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                side={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>

       <div className="max-w-6xl mx-auto text-center">
        <div className="p-15 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <Value
              title="People First"
              text="We design programs around real needs, ensuring dignity, inclusion, and long-term impact."
            />
            <Value
              title="Sustainable Change"
              text="Our focus is not short-term aid, but lasting transformation through education and empowerment."
            />
            <Value
              title="Transparency & Trust"
              text="We believe accountability and openness are essential to meaningful social impact."
            />
          </div>

        </div>
        
      </section>
      <Footer />
    </>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Stat({ value, label }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <p className="text-4xl font-extrabold text-orange-500 mb-2">
        {value}
      </p>
      <p className="text-gray-700 font-medium">{label}</p>
    </div>
  );
}

function Value({ title, text }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

