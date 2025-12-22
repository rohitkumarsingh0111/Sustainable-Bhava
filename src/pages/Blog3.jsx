import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BlogCard3 from "../assets/BlogCard3.png";

const Blog3 = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress((scrollTop / docHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-neutral-50 text-gray-800">
      <Navbar />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 z-50 h-1 w-full bg-transparent">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-violet-600 transition-all duration-150"
        />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src={BlogCard3}
          alt="Eco Friendly Study Habits"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm bg-violet-600/90 text-white rounded-full w-fit">
            Sustainable Learning & Lifestyle
          </span>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl">
            Eco-Friendly Study Habits:
            <span className="text-violet-400"> Learning with Purpose</span>
          </h1>

          <div className="flex items-center gap-4 mt-6 text-sm text-gray-200">
            <img
              src="https://i.pravatar.cc/40"
              className="w-10 h-10 rounded-full border border-white/30"
              alt="author"
            />
            <div>
              <p className="font-medium">By Sustainable Bhava</p>
              <p className="text-xs opacity-80">Dec 2025 · 9 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <main className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* ================= ARTICLE ================= */}
        <article className="lg:col-span-8 space-y-20 text-[18px] leading-relaxed">

          {/* Intro Highlight */}
          <div className="bg-gradient-to-r from-violet-50 to-white rounded-2xl p-10 shadow-sm border-l-4 border-violet-6=500">
            <p className="text-xl font-medium">
              Eco-friendly study habits are not just about saving paper or using
              digital tools — they represent a mindset shift toward intentional
              learning. Sustainable studying aligns academic success with
              environmental responsibility, mental clarity, and long-term
              well-being.
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />

          {/* Section 1 */}
          <section id="impact">
            <h2 className="text-3xl font-extrabold mb-6 tracking-tight">
              Why Eco-Friendly Study Habits Matter
            </h2>

            <p className="mb-6">
              According to UNESCO and global education sustainability reports,
              the education sector contributes significantly to paper waste,
              energy consumption, and digital carbon emissions. Students often
              underestimate how everyday academic routines — excessive printing,
              prolonged screen time, and inefficient study setups — impact both
              the planet and personal health.
            </p>

            <p className="mb-8">
              Research in environmental psychology shows that cluttered,
              resource-intensive study environments increase cognitive load and
              stress. In contrast, minimal, nature-connected, and energy-efficient
              spaces improve focus, memory retention, and emotional regulation.
            </p>

            <figure className="my-12">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                alt="Sustainable studying"
                className="rounded-2xl shadow-lg"
              />
              <figcaption className="text-sm text-gray-500 mt-3 text-center">
                Clean, intentional study environments support deeper focus and
                reduced mental fatigue.
              </figcaption>
            </figure>

            <blockquote className="relative my-12 p-8 bg-violet-50 rounded-xl border-l-4 border-violet-500 italic text-gray-700">
              <span className="absolute top-2 left-4 text-6xl text-violet-200">“</span>
              Education becomes truly powerful when learning itself does not
              come at the cost of the planet.
            </blockquote>
          </section>

          {/* Section 2 */}
          <section id="resilience" className="space-y-10">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Research-Backed Eco-Friendly Study Habits
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Sustainable study habits sit at the intersection of neuroscience,
              behavioral psychology, and environmental science. Studies published
              in academic journals show that environmentally conscious routines
              often enhance self-discipline, intrinsic motivation, and learning
              satisfaction.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Below are evidence-based practices that reduce environmental impact
              while improving academic performance and mental resilience.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">

              {[
                "Digital-First, Not Digital-Overload",
                "Energy-Efficient Study Spaces",
                "Low-Waste Study Materials",
                "Time, Focus & Resource Optimization",
              ].map((title, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <span className="text-violet-500 font-bold text-sm uppercase tracking-wide">
                    Strategy 0{i + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    Sustainable practices aligned with behavioral science help
                    reduce waste while improving focus, efficiency, and long-term
                    academic performance.
                  </p>
                </div>
              ))}
            </div>

            <figure className="my-12">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                alt="Mindful studying"
                className="rounded-2xl shadow-lg"
              />
              <figcaption className="text-sm text-gray-500 mt-3 text-center">
                Mindful studying supports better learning outcomes with lower
                environmental impact.
              </figcaption>
            </figure>

            <div className="mt-12 bg-violet-50 border-l-4 border-violet-500 p-6 rounded-xl">
              <p className="text-gray-700 italic leading-relaxed">
                “Sustainable learning is not about doing more — it is about doing
                better, with awareness and responsibility.”
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-violet-400 text-white rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4">
              Learn Better. Live Intentionally.
            </h3>
            <p className="mb-6 text-violet-100">
              Build study habits that respect your goals, focus, and the world
              around you.
            </p>
            <button className="bg-white text-violet-700 px-6 py-3 rounded-lg font-semibold hover:bg-violet-100 transition">
              Explore Sustainable Learning Resources
            </button>
          </div>
        </article>

        {/* ================= SIDEBAR ================= */}
        <aside className="lg:col-span-4 space-y-10 sticky top-28 h-fit">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">On This Page</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#impact" className="text-gray-600 hover:text-violet-400">
                  → Why Eco-Friendly Studying Matters
                </a>
              </li>
              <li>
                <a href="#resilience" className="text-gray-600 hover:text-violet-400">
                  → Research-Backed Study Habits
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-violet-50 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">About the Author</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sustainable Bhava creates research-driven content focused on
              conscious learning, ethical habits, and long-term well-being.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-6">Related Articles</h3>
            <ul className="space-y-4">
              {[
                "Sustainable Learning Environments",
                "Minimalism for Students",
                "Reducing Digital Carbon Footprint",
              ].map((title, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="block font-medium text-violet-700 hover:text-violet-800 hover:translate-x-1 transition"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Blog3;
