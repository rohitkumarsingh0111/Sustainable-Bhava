import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import BlogCard4 from "../assets/BlogCard4.png";

const Blog4 = () => {
  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#f6f1ea] text-[#4b4036]">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src={BlogCard4}
          alt="Zero Waste Dorm Kit"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a2f25]/60 via-[#3a2f25]/40 to-[#3a2f25]/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm bg-[#b08968]/90 text-white rounded-full w-fit">
            Sustainable Student Living
          </span>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl">
            The Zero-Waste Dorm Kit:
            <span className="text-[#e7d5c2]"> Essentials That Actually Fit</span>
          </h1>

          <div className="flex items-center gap-4 mt-6 text-sm text-[#f2e6da]">
            <img
              src="https://i.pravatar.cc/40"
              className="w-10 h-10 rounded-full border border-white/20"
              alt="author"
            />
            <div>
              <p className="font-medium">By Sustainable Bhava</p>
              <p className="text-xs opacity-80">Dec 2025 · 13 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <main className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* ================= ARTICLE ================= */}
        <article className="lg:col-span-8 space-y-20 text-[18px] leading-relaxed">

          {/* Intro Highlight */}
          <div className="bg-[#fbf7f2] rounded-2xl p-10 shadow-sm border-l-4 border-[#c29a6a]">
            <p className="text-xl font-medium">
              Dorm rooms are compact ecosystems. Every item you bring in either
              becomes a long-term tool or short-term waste.
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#d8c6b4] to-transparent" />

          {/* ================= SECTION 1 ================= */}
          <section id="impact">
            <h2 className="text-3xl font-extrabold mb-6 tracking-tight">
              Why Zero-Waste Dorm Living Matters
            </h2>

            <p className="mb-6 text-[#5e5146]">
              Campus waste studies across North America, Europe, and Asia show
              that student housing generates a disproportionately high volume of
              single-use plastics.
            </p>

            <p className="mb-8 text-[#5e5146]">
              Replacing just 4–6 high-use disposable items with reusables can
              reduce a student’s personal waste output by nearly half.
            </p>

            <figure className="my-12">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
                alt="Campus plastic waste"
                loading="lazy"
                className="rounded-2xl shadow-lg"
              />
              <figcaption className="text-sm text-[#8a7a6a] mt-3 text-center">
                Single-use food packaging dominates campus waste streams.
              </figcaption>
            </figure>

            <blockquote className="my-12 p-8 bg-[#f1e9df] rounded-xl border-l-4 border-[#c29a6a] italic">
              Sustainability in dorms is less about space — and more about smart
              substitution.
            </blockquote>
          </section>

          {/* ================= SECTION 2 ================= */}
          <section id="resilience" className="space-y-10">
            <h2 className="text-3xl font-extrabold tracking-tight">
              The Essential Zero-Waste Dorm Kit
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  label: "Essential 01",
                  title: "Reusable Cutlery Set",
                  text:
                    "A single reusable set can replace hundreds of disposable utensils.",
                },
                {
                  label: "Essential 02",
                  title: "Glass or Steel Storage Jars",
                  text:
                    "Multi-purpose containers ideal for dorm storage.",
                },
                {
                  label: "Essential 03",
                  title: "Beeswax Wraps",
                  text:
                    "A compostable alternative to plastic wrap.",
                },
                {
                  label: "Essential 04",
                  title: "Reusable Bottle & Cup",
                  text:
                    "Reduces plastic waste and promotes hydration.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#fbf7f2] p-8 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <span className="text-[#b08968] font-bold text-sm uppercase">
                    {item.label}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-[#6b5c4f]">{item.text}</p>
                </div>
              ))}
            </div>

            <figure className="my-12">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
                alt="College dorm room"
                loading="lazy"
                className="rounded-2xl shadow-lg"
              />
              <figcaption className="text-sm text-[#8a7a6a] mt-3 text-center">
                Compact dorms work perfectly with space-efficient reusables.
              </figcaption>
            </figure>
          </section>

          {/* CTA */}
          <div className="bg-[#b08968] text-white rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4">
              Build Your Zero-Waste Dorm Kit
            </h3>
            <p className="mb-6 text-[#f3e6d8]">
              Start small, build habits, and scale sustainability naturally.
            </p>
            <button className="bg-white text-[#6b4f3a] px-6 py-3 rounded-lg font-semibold hover:bg-[#f1e9df] transition">
              Explore Zero-Waste Resources
            </button>
          </div>
        </article>

        
        {/* ================= SIDEBAR ================= */}
<aside className="lg:col-span-4 space-y-10 sticky top-28 h-fit">

  {/* On This Page */}
  <div className="bg-[#fbf7f2] rounded-2xl p-6 shadow-sm">
    <h3 className="font-semibold mb-4 text-[#4b4036]">On This Page</h3>
    <ul className="space-y-3 text-sm">
      <li>
        <a
          href="#impact"
          className="text-[#6b5c4f] hover:text-[#8b6a4f] transition"
        >
          → Why Zero-Waste Dorm Living Matters
        </a>
      </li>
      <li>
        <a
          href="#resilience"
          className="text-[#6b5c4f] hover:text-[#8b6a4f] transition"
        >
          → Essential Reusables Guide
        </a>
      </li>
    </ul>
  </div>

  {/* About the Author */}
  <div className="bg-gradient-to-br from-[#fbf7f2] to-[#f1e9df] rounded-2xl p-6 shadow-sm">
    <h3 className="font-semibold mb-4 text-[#4b4036]">About the Author</h3>
    <p className="text-sm text-[#6b5c4f] leading-relaxed">
      Sustainable Bhava produces research-driven content focused on zero-waste
      living, student sustainability, and ethical everyday design.
    </p>
  </div>

  {/* Related Articles */}
  <div className="bg-[#fbf7f2] rounded-2xl p-6 shadow-sm">
    <h3 className="font-semibold mb-6 text-[#4b4036]">Related Articles</h3>
    <ul className="space-y-4">
      {[
        "Minimalist Living for Students",
        "Zero-Waste Kitchen Basics",
        "Reducing Plastic Waste on Campus",
      ].map((title, i) => (
        <li key={i}>
          <a
            className="block font-medium text-[#6b5c4f] hover:text-[#8b6a4f] hover:translate-x-1 transition"
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

export default Blog4;
