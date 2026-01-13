import React from "react";
import Navbar from "../components/Navbar";
import BlogCard1 from "../assets/BlogCard1.png";
import Footer from "../components/Footer";

const Blog1 = () => {

  return (
    <div className="bg-[#FBF9F4] text-gray-800">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src={BlogCard1}
          alt="Eco Anxiety"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm bg-[#8A7A4A]/90 text-white rounded-full w-fit">
            Mental Health & Sustainability
          </span>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl">
            Navigating Eco-Anxiety:
            <span className="text-[#F4EEDB]"> Research & Resilience</span>
          </h1>

          <div className="flex items-center gap-4 mt-6 text-sm text-gray-200">
            <img
              src="https://i.pravatar.cc/40"
              className="w-10 h-10 rounded-full border border-white/30"
              alt="author"
            />
            <div>
              <p className="font-medium">By Sustainable Bhava</p>
              <p className="text-xs opacity-80">Dec 2025 · 8 min read</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <main className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* ================= ARTICLE ================= */}
        <article className="lg:col-span-8 space-y-20 text-[18px] leading-relaxed">

          {/* Intro Highlight */}
          <div className="bg-[#F4EEDB] rounded-2xl p-10 shadow-sm border-l-4 border-[#D6CCA8]">
            <p className="text-xl font-medium">
              Eco-anxiety is not a weakness. It is a rational response to a world
              facing environmental uncertainty — and it deserves empathy,
              awareness, and thoughtful action.
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#E3DAC2] to-transparent" />

          {/* Section 1 */}
          <section id="impact">
            <h2 className="text-3xl font-extrabold mb-6 tracking-tight">
              Understanding the Psychological Impact
            </h2>

            <p className="mb-8">
              Eco-anxiety refers to the chronic fear of environmental collapse.
              Researchers have found it to be especially prevalent among young
              adults, climate activists, and communities experiencing climate
              disruptions firsthand.
            </p>

            <figure className="my-12">
              <img
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
                alt="Nature & mental health"
                className="rounded-2xl shadow-lg"
              />
              <figcaption className="text-sm text-gray-500 mt-3 text-center">
                Exposure to nature has been shown to significantly reduce stress
                and anxiety levels.
              </figcaption>
            </figure>

            <blockquote className="relative my-12 p-8 bg-[#F4EEDB] rounded-xl border-l-4 border-[#D6CCA8] italic text-gray-700">
              <span className="absolute top-2 left-4 text-6xl text-[#E3DAC2]"></span>
              The greatest threat to our planet is the belief that someone else
              will save it.
            </blockquote>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#8A7A4A] font-semibold hover:gap-3 transition-all"
            >
              Read the full research paper →
            </a>
          </section>

          {/* Section 2 */}
          <section id="resilience" className="space-y-10">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Building Mental Resilience in the Age of Climate Uncertainty
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Mental resilience does not mean emotional numbness or blind optimism.
              It is the capacity to adapt, recover, and grow while staying informed
              and engaged.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <span className="text-[#8A7A4A] font-bold text-sm uppercase tracking-wide">
                    Strategy 0{i + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">
                    Strategy Title
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    Research-backed approaches that transform anxiety into
                    purposeful, sustainable action.
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-[#F4EEDB] border-l-4 border-[#D6CCA8] p-6 rounded-xl">
              <p className="text-gray-700 italic leading-relaxed">
                Resilience is not about eliminating fear, but about learning how
                to live meaningfully alongside uncertainty.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-[#BFAE70] text-white rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4">
              Turn Awareness into Action
            </h3>
            <p className="mb-6 text-[#FBF9F4]">
              Explore evidence-based practices that protect both mental health
              and the planet.
            </p>
            <button className="bg-white text-[#8A7A4A] px-6 py-3 rounded-lg font-semibold hover:bg-[#F4EEDB] transition">
              Explore Research Resources
            </button>
          </div>
        </article>

        {/* ================= SIDEBAR ================= */}
        <aside className="lg:col-span-4 space-y-10 sticky top-28 h-fit">

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">On This Page</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#impact" className="text-gray-600 hover:text-[#8A7A4A]">
                  → Psychological Impact
                </a>
              </li>
              <li>
                <a href="#resilience" className="text-gray-600 hover:text-[#8A7A4A]">
                  → Mental Resilience
                </a>
              </li>
            </ul>
          </div>

          {/* Author Card */}
          <div className="bg-gradient-to-tr from-[#F4EEDB] via-[#F8F3E6] to-[#ECE3C8] rounded-2xl p-6 shadow-sm">

            <h3 className="font-semibold mb-4">About the Author</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sustainable Bhava focuses on mental well-being, climate awareness,
              and ethical living through research-backed storytelling.
            </p>
          </div>

          {/* Related Articles */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold mb-6">Related Articles</h3>
            <ul className="space-y-4">
              {[
                "Eco-Assessment & Emotional Health",
                "Climate Change & Mental Well-Being",
                "Mindfulness in the Age of Crisis",
              ].map((title, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="block font-medium text-[#8A7A4A] hover:text-[#6F6238] hover:translate-x-1 transition"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default Blog1;
