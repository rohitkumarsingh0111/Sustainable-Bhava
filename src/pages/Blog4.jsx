import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BlogCard4 from "../assets/BlogCard4.png";

const Blog4 = () => {
  const [setProgress] = useState(0);

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
    <div className="bg-neutral-100 text-slate-800">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src={BlogCard4}
          alt="Zero Waste Dorm Kit"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm bg-stone-600/90 text-white rounded-full w-fit">
            Sustainable Student Living
          </span>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl">
            The Zero-Waste Dorm Kit:
            <span className="text-stone-300">
              {" "}
              Essentials That Actually Fit
            </span>
          </h1>

          <div className="flex items-center gap-4 mt-6 text-sm text-neutral-200">
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
          <div className="bg-gradient-to-r from-stone-100 to-neutral-50 rounded-2xl p-10 shadow-sm border-l-4 border-stone-500">
            <p className="text-xl font-medium">
              Dorm rooms are compact ecosystems. Every item you bring in either
              becomes a long-term tool or short-term waste. A zero-waste dorm kit
              focuses on high-frequency items — the things students use daily —
              and replaces disposables with durable, space-efficient reusables.
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />

          {/* ================= SECTION 1 ================= */}
          <section id="impact">
            <h2 className="text-3xl font-extrabold mb-6 tracking-tight">
              Why Zero-Waste Dorm Living Matters
            </h2>

            <p className="mb-6">
              Campus waste studies across North America, Europe, and Asia show
              that student housing generates a disproportionately high volume of
              single-use plastics. Items like takeaway containers, plastic
              cutlery, cups, and packaging dominate dorm waste streams due to
              convenience-based consumption.
            </p>

            <p className="mb-8">
              Environmental life-cycle research demonstrates that replacing just
              4–6 high-use disposable items with reusables can reduce a student’s
              personal waste output by nearly half over an academic year. Dorms,
              despite limited space, are ideal for habit-driven sustainability.
            </p>

            <figure className="my-12">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
                alt="Campus plastic waste"
                loading="lazy"
                className="rounded-2xl shadow-lg"
              />
              <figcaption className="text-sm text-neutral-500 mt-3 text-center">
                Single-use food packaging forms a major portion of student waste
                on campuses worldwide.
              </figcaption>
            </figure>

            <blockquote className="relative my-12 p-8 bg-stone-100 rounded-xl border-l-4 border-stone-500 italic text-slate-700">
              Sustainability in dorms is less about space — and more about smart
              substitution.
            </blockquote>
          </section>

          {/* ================= SECTION 2 ================= */}
          <section id="resilience" className="space-y-10">
            <h2 className="text-3xl font-extrabold tracking-tight">
              The Essential Zero-Waste Dorm Kit (Small-Space Optimized)
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed">
              Zero-waste research consistently highlights three design principles
              for student reusables: compactness, multi-functionality, and ease
              of cleaning. The following essentials meet all three criteria and
              are widely recommended by campus sustainability programs.
            </p>

            <p className="text-slate-700 leading-relaxed">
              These items are selected not for aesthetic minimalism, but for
              measurable waste reduction and daily usability in real dorm
              conditions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  label: "Essential 01",
                  title: "Reusable Cutlery Set",
                  text:
                    "Plastic cutlery is among the most frequently discarded items on campuses. A single reusable stainless-steel or bamboo set can replace hundreds of disposable utensils over a year.",
                },
                {
                  label: "Essential 02",
                  title: "Glass or Steel Storage Jars",
                  text:
                    "Transparent, reusable containers reduce food spoilage by improving visibility and portion control while serving multiple dorm functions.",
                },
                {
                  label: "Essential 03",
                  title: "Beeswax Wraps",
                  text:
                    "Beeswax wraps replace plastic wrap and foil — items rarely recycled — and work well for sandwiches or shared refrigerators.",
                },
                {
                  label: "Essential 04",
                  title: "Reusable Bottle & Cup",
                  text:
                    "Students with reusable bottles generate less plastic waste and consume more tap water, reducing overall energy and material use.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-neutral-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <span className="text-stone-500 font-bold text-sm uppercase tracking-wide">
                    {item.label}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <figure className="my-12">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
                alt="College dorm room with bed and study desk"
                loading="lazy"
                className="rounded-2xl shadow-lg"
              />
              <figcaption className="text-sm text-neutral-500 mt-3 text-center">
                A realistic college dorm setup — compact, functional, and ideal
                for space-efficient zero-waste essentials.
              </figcaption>
            </figure>

            <div className="mt-12 bg-stone-100 border-l-4 border-stone-500 p-6 rounded-xl">
              <p className="text-slate-700 italic leading-relaxed">
                Zero-waste dorm living works best when reusables replace habits,
                not add clutter.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-stone-600 text-white rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4">
              Build Your Zero-Waste Dorm Kit
            </h3>
            <p className="mb-6 text-stone-200">
              Start with a few essentials, form habits, and let sustainability
              scale naturally throughout your college life.
            </p>
            <button className="bg-white text-stone-700 px-6 py-3 rounded-lg font-semibold hover:bg-stone-100 transition">
              Explore Zero-Waste Resources
            </button>
          </div>
        </article>

        {/* ================= SIDEBAR ================= */}
        <aside className="lg:col-span-4 space-y-10 sticky top-28 h-fit">

          <div className="bg-neutral-50 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">On This Page</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#impact" className="text-slate-600 hover:text-stone-700">
                  → Why Zero-Waste Dorm Living Matters
                </a>
              </li>
              <li>
                <a href="#resilience" className="text-slate-600 hover:text-stone-700">
                  → Essential Reusables Guide
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-neutral-50 to-stone-100 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">About the Author</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sustainable Bhava produces research-driven content focused on
              zero-waste living, student sustainability, and ethical everyday
              design.
            </p>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-6">Related Articles</h3>
            <ul className="space-y-4">
              {[
                "Minimalist Living for Students",
                "Zero-Waste Kitchen Basics",
                "Reducing Plastic Waste on Campus",
              ].map((title, i) => (
                <li key={i}>
                  <a className="block font-medium text-stone-600 hover:text-stone-700 hover:translate-x-1 transition">
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
