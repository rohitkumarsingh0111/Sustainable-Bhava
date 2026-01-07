import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const Blog2 = () => {
  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#f6f2ec] text-[#4a4036]">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80"
          alt="Growing food at home"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#3b3026]/70 via-[#3b3026]/45 to-[#3b3026]/80" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm bg-[#b08968]/90 text-white rounded-full w-fit">
            Sustainable Living
          </span>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl">
            Growing Your Own Food
            <span className="text-[#e6d5c3]">
              {" "}
              for Health, Resilience & Freedom
            </span>
          </h1>

          <div className="flex items-center gap-4 mt-6 text-sm text-[#f1e6da]">
            <img
              src="https://i.pravatar.cc/40?img=68"
              className="w-10 h-10 rounded-full border border-white/20"
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

          {/* Intro */}
          <div className="bg-[#fbf7f2] rounded-2xl p-10 shadow-sm border-l-4 border-[#c29a6a]">
            <p className="text-xl font-medium">
              Growing your own food is not nostalgia — it is a practical response
              to fragile food systems, rising costs, and declining nutritional
              quality. Even a few plants can restore control over what you eat.
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#d6c3b0] to-transparent" />

          {/* Section 1 */}
          <section id="benefits">
            <h2 className="text-3xl font-extrabold mb-6 tracking-tight">
              Why Growing Your Own Food Matters
            </h2>

            <p className="mb-8 text-[#5e5146]">
              Modern food systems prioritize shelf life and profit over
              nutrition. Home-grown food restores freshness, reduces chemical
              exposure, and lowers dependence on long supply chains vulnerable
              to disruption.
            </p>

            <figure className="my-12">
              <img
                src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2"
                alt="Home gardening"
                className="rounded-2xl shadow-lg"
                loading="lazy"
              />
              <figcaption className="text-sm text-[#8a7a6a] mt-3 text-center">
                Growing food reconnects people with seasons, soil, and nutrition.
              </figcaption>
            </figure>

            <blockquote className="my-12 p-8 bg-[#f1e9df] rounded-xl border-l-4 border-[#c29a6a] italic">
              When you grow food, you grow independence.
            </blockquote>
          </section>

          {/* Section 2 */}
          <section id="how" className="space-y-10">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Creating a Resilient Home Food System
            </h2>

            <p className="text-lg text-[#5e5146]">
              You don’t need farmland. A few containers, sunlight, and living
              soil are enough to begin producing meaningful nutrition in urban
              spaces.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  step: "Step 01",
                  title: "Grow What You Actually Eat",
                  text:
                    "Focus on crops you consume weekly. Leafy greens, herbs, chilies, and tomatoes provide high returns in small spaces."
                },
                {
                  step: "Step 02",
                  title: "Feed the Soil, Not the Plant",
                  text:
                    "Compost and organic matter build soil biology, increasing nutrient density and plant resilience naturally."
                },
                {
                  step: "Step 03",
                  title: "Design for Water Efficiency",
                  text:
                    "Mulch heavily and water deeply but infrequently to encourage strong root systems."
                },
                {
                  step: "Step 04",
                  title: "Save Seeds & Observe",
                  text:
                    "Seed saving and observation help adapt plants to your micro-climate year after year."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#fbf7f2] p-8 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <span className="text-[#b08968] font-bold text-sm uppercase">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-[#6b5c4f]">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-[#f1e9df] border-l-4 border-[#c29a6a] p-6 rounded-xl">
              <p className="italic text-[#5e5146]">
                Food resilience begins with small, consistent actions — not
                perfection.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-[#b08968] text-white rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4">
              Grow Food. Grow Resilience.
            </h3>
            <p className="mb-6 text-[#f3e6d8]">
              Begin building a food system that supports your health and future.
            </p>
            <button className="bg-white text-[#6b4f3a] px-6 py-3 rounded-lg font-semibold hover:bg-[#f1e9df] transition">
              Download Beginner Gardening Guide
            </button>
          </div>
        </article>

        {/* ================= SIDEBAR ================= */}
        <aside className="lg:col-span-4 space-y-10 sticky top-28 h-fit">

          {/* On this page */}
          <div className="bg-[#fbf7f2] rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">On This Page</h3>
            <ul className="space-y-3 text-sm text-[#6b5c4f]">
              <li><a href="#benefits">→ Why It Matters</a></li>
              <li><a href="#how">→ How to Start</a></li>
            </ul>
          </div>

          {/* About */}
          <div className="bg-gradient-to-br from-[#fbf7f2] to-[#f1e9df] rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">About the Author</h3>
            <p className="text-sm text-[#6b5c4f]">
              Sustainable Bhava focuses on food sovereignty, ethical living, and
              long-term resilience through nature-aligned practices.
            </p>
          </div>

          {/* Related Articles (Detailed) */}
          <div className="bg-[#fbf7f2] rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-6">Related Articles</h3>

            <ul className="space-y-5">
              {[
                {
                  title: "Urban Gardening Essentials",
                  desc: "Tools, containers, and crops best suited for city living."
                },
                {
                  title: "Composting for Beginners",
                  desc: "Turn kitchen waste into living soil, even in apartments."
                },
                {
                  title: "Reducing Food Waste at Home",
                  desc: "Simple habits that cut waste and save money."
                }
              ].map((item, i) => (
                <li key={i}>
                  <p className="font-medium text-[#6b5c4f] hover:text-[#8b6a4f] transition">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#8a7a6a] mt-1">
                    {item.desc}
                  </p>
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
