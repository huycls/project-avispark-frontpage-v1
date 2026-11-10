"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

import styles from "./Index.module.scss";

const MOCKUPS = [
  {
    id: "aurora",
    title: "Aurora Studio",
    tag: "Framer",
    image: "/assets/images/banner-image.png",
    float: styles.floatA,
    className:
      "left-[4%] top-[8%] z-10 w-[58%] max-w-[280px] sm:max-w-[320px] lg:left-0 lg:top-[6%] lg:w-[62%]",
  },
  {
    id: "northwind",
    title: "Northwind",
    tag: "Next.js",
    image: null,
    accent: "from-tint-4 via-neutral-white to-tint-5",
    float: styles.floatB,
    className:
      "right-[2%] top-[22%] z-20 w-[52%] max-w-[240px] sm:max-w-[280px] lg:right-0 lg:top-[18%] lg:w-[56%]",
  },
  {
    id: "fieldnote",
    title: "Fieldnote",
    tag: "Figma",
    image: null,
    accent: "from-secondary/20 via-neutral-white to-tint-3",
    float: styles.floatC,
    className:
      "bottom-[4%] left-[18%] z-30 w-[48%] max-w-[220px] sm:max-w-[250px] lg:bottom-[2%] lg:left-[16%] lg:w-[50%]",
  },
];

function MockupCard({ mockup, index }) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 220, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 220, damping: 18 });
  const glareX = useTransform(springY, [-12, 12], [20, 80]);
  const glareY = useTransform(springX, [-10, 10], [70, 30]);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.75), transparent 55%)`,
  );

  const handleMove = (event) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * 16);
    rotateY.set((px - 0.5) * 18);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: springX, rotateY: springY }}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 + index * 0.12, ease: "easeOut" }}
      className={`absolute ${mockup.className} ${styles.card}`}
    >
      <div className={mockup.float}>
        <div className="overflow-hidden rounded-xl border border-neutral-silver bg-neutral-white shadow-[0_24px_60px_-28px_rgba(18,23,34,0.45)] dark:border-neutral-d-grey dark:bg-neutral-black dark:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)]">
          <div className="flex items-center gap-1.5 border-b border-neutral-silver px-3 py-2 dark:border-neutral-d-grey">
            <span className="size-2 rounded-full bg-error/80" />
            <span className="size-2 rounded-full bg-warning/80" />
            <span className="size-2 rounded-full bg-success/80" />
            <span className="ml-2 truncate text-[10px] text-neutral-l-grey">
              {mockup.title}.avispark
            </span>
          </div>
          <div className="relative aspect-4/3 overflow-hidden">
            {mockup.image ? (
              <Image
                src={mockup.image}
                alt={`${mockup.title} template preview`}
                fill
                sizes="(max-width: 768px) 60vw, 320px"
                className="object-cover"
                priority={index === 0}
              />
            ) : (
              <div
                className={`absolute inset-0 bg-linear-to-br ${mockup.accent} p-4`}
              >
                <div className="mb-3 h-2.5 w-2/5 rounded-full bg-primary/30" />
                <div className="mb-2 h-2 w-4/5 rounded-full bg-neutral-grey-blue/50" />
                <div className="mb-4 h-2 w-3/5 rounded-full bg-neutral-grey-blue/40" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-14 rounded-lg bg-primary/15" />
                  <div className="h-14 rounded-lg bg-secondary/20" />
                  <div className="col-span-2 h-10 rounded-lg bg-neutral-silver/80 dark:bg-neutral-d-grey" />
                </div>
              </div>
            )}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light"
              style={{ background: glareBackground }}
            />
          </div>
          <div className="flex items-center justify-between px-3 py-2">
            <p className="text-xs font-semibold text-foreground">{mockup.title}</p>
            <span className="text-[10px] font-medium tracking-wide text-neutral-l-grey uppercase">
              {mockup.tag}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function TemplateMockups() {
  return (
    <div
      className={`relative mx-auto h-85 w-full max-w-130 sm:h-100 lg:mx-0 lg:h-115 lg:max-w-none ${styles.stage}`}
      aria-label="Featured template previews"
    >
      {MOCKUPS.map((mockup, index) => (
        <MockupCard key={mockup.id} mockup={mockup} index={index} />
      ))}
    </div>
  );
}
