import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const contentVariants = {
  hidden: (side) => ({
    opacity: 0,
    x: side === "left" ? -60 : 60,
    y: 40,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TimelineItem({
  year,
  title,
  description,
  impact,
  images = [],
  side = "left",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isLeft = side === "left";

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-1 md:grid-cols-3 gap-12 items-start w-full"
    >
      {/* LEFT SIDE */}
      <div className="flex justify-end">
        {isLeft && (
          <ContentCard
            year={year}
            title={title}
            description={description}
            impact={impact}
            isInView={isInView}
            side={side}
          />
        )}
        {!isLeft && (
          <ImageCollage images={images} isInView={isInView} />
        )}
      </div>

      {/* CENTER LINE */}
      <div className="relative flex justify-center">
        <span className="absolute top-0 w-1 h-full bg-gradient-to-b from-yellow-400 via-orange-400 to-green-500 rounded-full" />
        <span className="relative z-10 mt-2 w-5 h-5 bg-white border-4 border-orange-400 rounded-full" />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-start">
        {!isLeft && (
          <ContentCard
            year={year}
            title={title}
            description={description}
            impact={impact}
            isInView={isInView}
            side={side}
          />
        )}
        {isLeft && (
          <ImageCollage images={images} isInView={isInView} />
        )}
      </div>
    </div>
  );
}

/* ---------------- CONTENT CARD ---------------- */

function ContentCard({ year, title, description, impact, isInView, side }) {
  return (
    <motion.div
      custom={side}
      variants={contentVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-[440px] bg-white rounded-2xl shadow-lg p-6"
    >
      <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold bg-yellow-100 text-yellow-700 rounded-full">
        {year}
      </span>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <div className="bg-yellow-50 rounded-xl p-3 space-y-1">
        {impact.map((item, index) => (
          <p
            key={index}
            className="text-sm font-medium text-yellow-700"
          >
            {item}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

/* ---------------- IMAGE COLLAGE + LIGHTBOX ---------------- */

function ImageCollage({ images, isInView }) {
  const [activeImage, setActiveImage] = useState(null);

  const imgUrl = (url, w) =>
    `${url}?auto=format&fit=crop&w=${w}&q=80`;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 gap-3 w-[440px]"
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={imgUrl(img, 800)}
            loading="lazy"
            alt=""
            onClick={() => setActiveImage(img)}
            className={`
              ${i === 0 ? "col-span-2 h-48" : "h-32"}
              object-cover rounded-2xl cursor-pointer
              hover:scale-105 transition
            `}
          />
        ))}
      </motion.div>

      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={imgUrl(activeImage, 1600)}
            alt="Expanded view"
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </>
  );
}
