import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BlogCard4 from "../assets/BlogCard4.png";

const Blog4 = () => {
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
    <div className="bg-neutral-50 text-slate-800">
      <Navbar />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 z-50 h-1 w-full bg-transparent">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-indigo-600 transition-all duration-150"
        />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src={BlogCard4}
          alt="Zero Waste Dorm Kit"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm bg-indigo-600/90 text-white rounded-full w-fit">
            Sustainable Student Living
          </span>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl">
            The Zero-Waste Dorm Kit:
            <span className="text-indigo-300">
              {" "}
              Essentials That Actually Fit
            </span>
          </h1>

          <div className="flex items-center gap-4 mt-6 text-sm text-gray-200">
            <img
              src="https://i.pravatar.cc/40"
              className="w-10 h-10 rounded-full border border-white/30"
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
          <div className="bg-gradient-to-r from-indigo-50 to-white rounded-2xl p-10 shadow-sm border-l-4 border-indigo-600">
            <p className="text-xl font-medium">
              Dorm rooms are compact ecosystems. Every item you bring in either
              becomes a long-term tool or short-term waste. A zero-waste dorm kit
              focuses on high-frequency items — the things students use daily —
              and replaces disposables with durable, space-efficient reusables.
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

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

            {/* IMAGE 1 — campus waste */}
            <figure className="my-12">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
                alt="Campus plastic waste"
                loading="lazy"
                className="rounded-2xl shadow-lg"
              />
              <figcaption className="text-sm text-gray-500 mt-3 text-center">
                Single-use food packaging forms a major portion of student waste
                on campuses worldwide.
              </figcaption>
            </figure>

            <blockquote className="relative my-12 p-8 bg-indigo-50 rounded-xl border-l-4 border-indigo-600 italic text-slate-700">
              <span className="absolute top-2 left-4 text-6xl text-indigo-200">“</span>
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

              {/* Essential 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <span className="text-indigo-600 font-bold text-sm uppercase tracking-wide">
                  Essential 01
                </span>
                <h3 className="mt-2 text-xl font-semibold">
                  Reusable Cutlery Set
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Plastic cutlery is among the most frequently discarded items
                  on campuses. A single reusable stainless-steel or bamboo set,
                  kept in a pouch inside a backpack, can replace hundreds of
                  disposable utensils over a year of takeaway meals.
                </p>
              </div>

              {/* Essential 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <span className="text-indigo-600 font-bold text-sm uppercase tracking-wide">
                  Essential 02
                </span>
                <h3 className="mt-2 text-xl font-semibold">
                  Glass or Steel Storage Jars
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Research on food waste reduction shows that transparent,
                  reusable containers reduce spoilage by improving visibility
                  and portion control. In dorms, jars function as food storage,
                  mugs, leftover containers, and dry-snack holders.
                </p>
              </div>

              {/* Essential 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <span className="text-indigo-600 font-bold text-sm uppercase tracking-wide">
                  Essential 03
                </span>
                <h3 className="mt-2 text-xl font-semibold">
                  Beeswax Wraps
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Beeswax wraps replace plastic wrap and foil — two items that
                  are almost never recycled. They are breathable, washable, and
                  ideal for wrapping sandwiches or covering bowls in shared dorm
                  refrigerators.
                </p>
              </div>

              {/* Essential 4 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <span className="text-indigo-600 font-bold text-sm uppercase tracking-wide">
                  Essential 04
                </span>
                <h3 className="mt-2 text-xl font-semibold">
                  Reusable Bottle & Cup
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Studies show that students with reusable bottles consume more
                  tap water and generate significantly less plastic waste.
                  Insulated bottles also reduce repeated heating or cooling,
                  saving energy over time.
                </p>
              </div>
            </div>

            {/* IMAGE 2 — REAL DORM ROOM */}
            <figure className="my-12">
  <img
    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
    alt="College dorm room with bed and study desk"
    loading="lazy"
    className="rounded-2xl shadow-lg"
  />
  <figcaption className="text-sm text-gray-500 mt-3 text-center">
    A realistic college dorm setup — compact bed, study desk, and limited
    storage, making space-efficient zero-waste essentials especially valuable.
  </figcaption>
</figure>


            <div className="mt-12 bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-xl">
              <p className="text-slate-700 italic leading-relaxed">
                “Zero-waste dorm living works best when reusables replace habits,
                not add clutter.”
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-indigo-400 text-white rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4">
              Build Your Zero-Waste Dorm Kit
            </h3>
            <p className="mb-6 text-indigo-100">
              Start with a few essentials, form habits, and let sustainability
              scale naturally throughout your college life.
            </p>
            <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition">
              Explore Zero-Waste Resources
            </button>
          </div>
        </article>

        {/* ================= SIDEBAR ================= */}
        <aside className="lg:col-span-4 space-y-10 sticky top-28 h-fit">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">On This Page</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#impact" className="text-slate-600 hover:text-indigo-400">
                  → Why Zero-Waste Dorm Living Matters
                </a>
              </li>
              <li>
                <a href="#resilience" className="text-slate-600 hover:text-indigo-400">
                  → Essential Reusables Guide
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">About the Author</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sustainable Bhava produces research-driven content focused on
              zero-waste living, student sustainability, and ethical everyday
              design.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-6">Related Articles</h3>
            <ul className="space-y-4">
              {[
                "Minimalist Living for Students",
                "Zero-Waste Kitchen Basics",
                "Reducing Plastic Waste on Campus",
              ].map((title, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="block font-medium text-indigo-400 hover:text-indigo-800 hover:translate-x-1 transition"
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
