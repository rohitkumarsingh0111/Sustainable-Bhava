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


const collageVariants = {
  hidden: (side) => ({
    opacity: 0,
    x: side === "left" ? 60 : -60,
    scale: 0.96,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
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
  const [lightboxImage, setLightboxImage] = useState(null);

  const isLeft = side === "left";

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-3 gap-12 items-start w-full"
    >
      {/* LEFT SIDE */}
      <div className="flex justify-end">
        {isLeft && <ContentCard {...{ year, title, description, impact, isInView, side }} />}
        {!isLeft && <ImageCollage images={images} isInView={isInView} side={side} />}
      </div>

      {/* CENTER LINE */}
      <div className="relative flex justify-center">
        <span className="absolute top-0 w-1 h-full bg-blue-500" />
        <span className="relative z-10 mt-2 w-5 h-5 bg-white border-4 border-blue-500 rounded-full" />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-start">
        {!isLeft && <ContentCard {...{ year, title, description, impact, isInView, side }} />}
        {isLeft && <ImageCollage images={images} isInView={isInView} side={side} />}
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
      {/* Year */}
      <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold bg-blue-100 text-blue-600 rounded-full">
        {year}
      </span>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-4">
        {description}
      </p>

      {/* Impact */}
      <div className="bg-yellow-50 rounded-xl p-3 space-y-1">
        {impact.map((item, index) => (
          <p key={index} className="text-sm font-medium text-yellow-700">
            {item}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

/* ---------------- IMAGE COLLAGE ---------------- */

function ImageCollage({ images, isInView, side }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <motion.div
        custom={side}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-2 gap-3 w-[440px]"
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            onClick={() => setActiveImage(img)}
            className={`
              ${i === 0 ? "col-span-2 h-48" : "h-32"}
              object-cover rounded-2xl cursor-pointer
              transition-transform duration-300
              hover:scale-105 hover:shadow-xl
            `}
          />
        ))}
      </motion.div>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setActiveImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}

