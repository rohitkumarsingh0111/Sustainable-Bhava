import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Blog2 = () => {
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
      <div className="fixed top-0 left-0 z-50 h-1 w-full">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-amber-500 transition-all duration-150"
        />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80"
          alt="Growing food at home"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm bg-amber-500/90 text-white rounded-full w-fit">
            Sustainable Living
          </span>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl">
            Growing Your Own Food
            <span className="text-amber-300">
              {" "}
              for Health, Resilience & Freedom
            </span>
          </h1>

          <div className="flex items-center gap-4 mt-6 text-sm text-gray-200">
            <img
              src="https://i.pravatar.cc/40?img=68"
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
      {/* ================= END HERO ================= */}

      {/* ================= MAIN ================= */}
      <main className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* ================= ARTICLE ================= */}
        <article className="lg:col-span-8 space-y-20 text-[18px] leading-relaxed">

          {/* Intro Highlight */}
          <div className="bg-gradient-to-r from-amber-50 to-white rounded-2xl p-10 shadow-sm border-l-4 border-amber-500">
            <p className="text-xl font-medium">
              Growing your own food is a return to self-reliance — restoring a
              direct relationship between the soil, your plate, and your
              well-being.
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />

          {/* Section 1 */}
          <section id="benefits">
            <h2 className="text-3xl font-extrabold mb-6 tracking-tight">
              Why Growing Your Own Food Matters
            </h2>

            <p className="mb-8">
              Home gardening addresses critical challenges such as industrial
              food dependency, chemical exposure, rising grocery costs, and
              ecological degradation. Even small gardens can dramatically
              improve nutrition while lowering environmental impact.
            </p>

            <figure className="my-12">
              <img
                src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=1200&q=80"
                alt="Home gardening"
                className="rounded-2xl shadow-lg"
                loading="lazy"
              />
              <figcaption className="text-sm text-gray-500 mt-3 text-center">
                Home-grown produce reconnects people with seasonal and natural
                eating.
              </figcaption>
            </figure>

            <blockquote className="relative my-12 p-8 bg-amber-50 rounded-xl border-l-4 border-amber-500 italic text-gray-700">
              <span className="absolute top-2 left-4 text-6xl text-amber-200">
                “
              </span>
              When you grow food, you grow independence.
            </blockquote>
          </section>

          {/* Section 2 */}
          <section id="how" className="space-y-10">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Creating a Home Food System
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              You don’t need farmland to grow food. Balconies, terraces, and
              windowsills can support herbs, greens, and vegetables through
              container gardening, raised beds, and vertical systems.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  step: "Step 01",
                  title: "Start Small & Seasonal",
                  text:
                    "Choose crops that match your climate and season. Tomatoes, leafy greens, chilies, and herbs are ideal beginner plants."
                },
                {
                  step: "Step 02",
                  title: "Build Living Soil",
                  text:
                    "Healthy soil is the foundation of nutritious food. Composting food scraps improves soil quality while reducing waste."
                },
                {
                  step: "Step 03",
                  title: "Use Water Wisely",
                  text:
                    "Mulching, drip irrigation, and rainwater harvesting help conserve water and stabilize plant growth."
                },
                {
                  step: "Step 04",
                  title: "Design for Resilience",
                  text:
                    "Crop rotation, seed saving, and plant diversity create a food system that adapts to climate uncertainty."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <span className="text-amber-500 font-bold text-sm uppercase">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-gray-500">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-xl">
              <p className="italic text-gray-700">
                “Food security begins when people reclaim control over what they
                eat and how it is grown.”
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-orange-400 text-white rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4">
              Grow Food. Grow Resilience.
            </h3>
            <p className="mb-6 text-orange-100">
              Begin your journey toward healthier food and a more sustainable
              lifestyle.
            </p>
            <button className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-100 transition">
              Download Beginner Gardening Guide
            </button>
          </div>
        </article>

        {/* ================= SIDEBAR ================= */}
        <aside className="lg:col-span-4 space-y-10 sticky top-28 h-fit">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">On This Page</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#benefits" className="hover:text-amber-700">
                  → Why It Matters
                </a>
              </li>
              <li>
                <a href="#how" className="hover:text-amber-700">
                  → How to Start
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">About the Author</h3>
            <p className="text-sm text-gray-500">
              Sustainable Bhava explores food sovereignty, ethical living, and
              resilient lifestyles grounded in nature.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-6">Related Articles</h3>
            <ul className="space-y-4">
              {[
                "Urban Gardening Essentials",
                "Composting for Beginners",
                "Reducing Food Waste at Home"
              ].map((title, i) => (
                <li key={i}>
                  <a className="block text-amber-700 hover:translate-x-1 transition">
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

export default Blog2;
