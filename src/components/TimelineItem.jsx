import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

/* ---------------- ANIMATION ---------------- */

const contentVariants = {
  hidden: (side) => ({
    opacity: 0,
    x: side === "left" ? -50 : 50,
    y: 30,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- MAIN COMPONENT ---------------- */

export default function TimelineItem({
  year,
  title,
  description,
  impact,
  images = [],
  side = "left",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const isLeft = side === "left";

  return (
    <div
      ref={ref}
      className="
        relative grid grid-cols-1
        md:grid-cols-[1fr_auto_1fr]
        gap-10 items-stretch w-full
      "
    >
      {/* LEFT */}
      <div className="flex justify-end">
        {isLeft ? (
          <ContentCard
            year={year}
            title={title}
            description={description}
            impact={impact}
            isInView={isInView}
            side={side}
          />
        ) : (
          <ImageCollage images={images} />
        )}
      </div>

      {/* CENTER LINE */}
      <div className="relative flex justify-center">
        <span className="absolute top-0 w-1 h-full bg-gradient-to-b from-yellow-400 via-orange-400 to-green-500 rounded-full" />
        <span className="relative z-10 mt-2 w-4 h-4 bg-white border-4 border-orange-400 rounded-full" />
      </div>

      {/* RIGHT */}
      <div className="flex justify-start">
        {!isLeft ? (
          <ContentCard
            year={year}
            title={title}
            description={description}
            impact={impact}
            isInView={isInView}
            side={side}
          />
        ) : (
          <ImageCollage images={images} />
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
      className="
        w-[380px] h-full
        bg-white rounded-2xl shadow-lg
        p-6 flex flex-col
      "
    >
      <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold bg-yellow-100 text-yellow-700 rounded-full">
        {year}
      </span>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 mb-4 flex-grow">
        {description}
      </p>

      <div className="bg-yellow-50 rounded-xl p-3 space-y-1 mt-auto">
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

function ImageCollage({ images }) {
  const [activeImage, setActiveImage] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [16, -16]);

  const imgUrl = (url, w) =>
    `${url}?auto=format&fit=crop&w=${w}&q=80`;

  return (
    <>
      <motion.div
        ref={containerRef}
        style={{ y: parallaxY }}
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          w-[380px] h-full
          rounded-[28px]
          bg-white/70 backdrop-blur-md
          p-4 shadow-[0_20px_40px_rgba(0,0,0,0.12)]
          flex
        "
      >
        <div className="grid grid-cols-2 gap-4 h-full w-full">
          {images.map((img, i) => (
            <MagneticImage
              key={i}
              src={imgUrl(img, 900)}
              hero={i === 0}
              onClick={() => setActiveImage(img)}
            />
          ))}
        </div>
      </motion.div>

      {/* LIGHTBOX */}
      {activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <motion.img
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            src={imgUrl(activeImage, 1600)}
            alt="Expanded view"
            className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
}

/* ---------------- MAGNETIC IMAGE ---------------- */

function MagneticImage({ src, hero, onClick }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;

    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left - rect.width / 2) / rect.width) * 14,
      y: ((e.clientY - rect.top - rect.height / 2) / rect.height) * 14,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={pos}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl cursor-pointer
        ${hero ? "col-span-2 h-full" : "h-full"}
      `}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/25 via-black/5 to-transparent pointer-events-none" />
      <img
        src={src}
        loading="lazy"
        alt=""
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </motion.div>
  );
}
