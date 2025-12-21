import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BlogCard1 from "../assets/BlogCard1.png";

const Blog1 = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
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
          className="h-full bg-green-600 transition-all duration-150"
        />
      </div>

      {/* ================= HERO (UNCHANGED) ================= */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src={BlogCard1}
          alt="Eco Anxiety"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm bg-green-600/90 text-white rounded-full w-fit">
            Mental Health & Sustainability
          </span>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl">
            Navigating Eco-Anxiety:
            <span className="text-green-400"> Research & Resilience</span>
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
      {/* ================= END HERO ================= */}

      {/* ================= MAIN ================= */}
      <main className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* ================= ARTICLE ================= */}
        <article className="lg:col-span-8 space-y-20 text-[18px] leading-relaxed">

          {/* Intro Highlight */}
          <div className="bg-gradient-to-r from-green-50 to-white rounded-2xl p-10 shadow-sm border-l-4 border-green-600">
            <p className="text-xl font-medium">
              Eco-anxiety is not a weakness. It is a rational response to a world
              facing environmental uncertainty — and it deserves empathy,
              awareness, and thoughtful action.
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />

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

            <blockquote className="relative my-12 p-8 bg-green-50 rounded-xl border-l-4 border-green-600 italic text-gray-700">
              <span className="absolute top-2 left-4 text-6xl text-green-200">“</span>
              The greatest threat to our planet is the belief that someone else
              will save it.
            </blockquote>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-green-700 font-semibold hover:gap-3 transition-all"
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
    Psychological research defines resilience as the capacity to adapt, recover,
    and grow in the face of ongoing stressors. In the context of climate change,
    this means learning how to remain emotionally grounded while staying
    informed, engaged, and ethically responsive.
  </p>

  <p className="text-gray-700 leading-relaxed">
    Studies published by the American Psychological Association (APA) and the
    Lancet Countdown on Health and Climate Change indicate that individuals who
    cultivate adaptive coping strategies are significantly less likely to
    experience chronic anxiety, burnout, and eco-related despair.
  </p>

  {/* Research-backed strategies */}
  <div className="grid md:grid-cols-2 gap-8 mt-12">

    {/* Card 1 */}
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
      <span className="text-green-600 font-bold text-sm uppercase tracking-wide">
        Strategy 01
      </span>
      <h3 className="mt-2 text-xl font-semibold">
        Mindfulness & Emotional Regulation
      </h3>
      <p className="mt-4 text-gray-600 leading-relaxed">
        Mindfulness-based practices such as meditation, breath awareness, and
        somatic grounding have been shown to reduce activity in the amygdala —
        the brain’s fear center. Research from Harvard Medical School suggests
        that even 10 minutes of daily mindfulness can significantly lower stress
        hormones associated with climate-related anxiety.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
      <span className="text-green-600 font-bold text-sm uppercase tracking-wide">
        Strategy 02
      </span>
      <h3 className="mt-2 text-xl font-semibold">
        Conscious Media & Information Boundaries
      </h3>
      <p className="mt-4 text-gray-600 leading-relaxed">
        Continuous exposure to alarming climate news can reinforce feelings of
        helplessness. Psychologists recommend setting intentional boundaries —
        such as limiting news consumption to reliable sources and specific time
        windows — to prevent emotional overload while staying responsibly
        informed.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
      <span className="text-green-600 font-bold text-sm uppercase tracking-wide">
        Strategy 03
      </span>
      <h3 className="mt-2 text-xl font-semibold">
        Community-Based Environmental Engagement
      </h3>
      <p className="mt-4 text-gray-600 leading-relaxed">
        Research consistently shows that collective action buffers anxiety more
        effectively than individual effort. Participating in local climate
        initiatives, sustainability groups, or environmental education programs
        helps transform abstract fear into shared purpose and measurable impact.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
      <span className="text-green-600 font-bold text-sm uppercase tracking-wide">
        Strategy 04
      </span>
      <h3 className="mt-2 text-xl font-semibold">
        Meaning-Making & Purpose-Oriented Action
      </h3>
      <p className="mt-4 text-gray-600 leading-relaxed">
        According to existential psychology, distress becomes manageable when it
        is connected to meaning. Transforming eco-anxiety into purposeful action
        — whether through sustainable living, advocacy, or education — fosters a
        sense of agency and long-term psychological resilience.
      </p>
    </div>
  </div>

  {/* Insight callout */}
  <div className="mt-12 bg-green-50 border-l-4 border-green-600 p-6 rounded-xl">
    <p className="text-gray-700 italic leading-relaxed">
      “Resilience is not about eliminating fear, but about learning how to live
      meaningfully alongside uncertainty.” — Environmental Psychology Review
    </p>
  </div>
</section>


          {/* CTA */}
          <div className="bg-green-700 text-white rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4">
              Turn Awareness into Action
            </h3>
            <p className="mb-6 text-green-100">
              Explore evidence-based practices that protect both mental health
              and the planet.
            </p>
            <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition">
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
                <a href="#impact" className="text-gray-600 hover:text-green-700">
                  → Psychological Impact
                </a>
              </li>
              <li>
                <a href="#resilience" className="text-gray-600 hover:text-green-700">
                  → Mental Resilience
                </a>
              </li>
            </ul>
          </div>

          {/* Author Card */}
          <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 shadow-sm">
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
                    className="block font-medium text-green-700 hover:text-green-800 hover:translate-x-1 transition"
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

export default Blog1;
