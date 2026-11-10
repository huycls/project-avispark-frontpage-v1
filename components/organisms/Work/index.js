"use client";

import { useState } from "react";

import Title from "@/components/atoms/Title";
import ProjectCard from "@/components/molecules/ProjectCard";
import ProjectFilter from "@/components/molecules/ProjectFilter";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "framer", label: "Framer Templates" },
  { id: "figma", label: "Figma Kits" },
  { id: "custom", label: "Custom Websites" },
  { id: "nextjs", label: "Next.js" },
];

const projects = [
  {
    title: "Vows & Moments",
    category: "Wedding & Storytelling",
    platforms: ["Next.js", "GSAP"],
    filters: ["nextjs", "custom"],
    accent: "bg-linear-to-br from-tint-3 via-tint-5 to-secondary/20 dark:from-shade-3 dark:via-shade-4 dark:to-secondary/20",
    text: "An interactive digital wedding invitation template featuring immersive storytelling chapters, smooth micro-interactions, RSVP management, and mobile-first photo galleries.",
    previewHref: "#",
    marketHref: "#",
  },
  {
    title: "Aura Studio",
    category: "Agency & Portfolio",
    platforms: ["Framer", "Figma"],
    filters: ["framer", "figma"],
    accent: "bg-linear-to-br from-neutral-d-grey via-neutral-grey to-shade-3 dark:from-ink dark:via-shade-4 dark:to-shade-2",
    text: "A minimalist portfolio template for design studios and art directors, built with dynamic CMS project grids, clean typography, and dark mode toggles.",
    previewHref: "#",
    marketHref: "#",
  },
  {
    title: "Synthex AI",
    category: "Tech & SaaS Landing",
    platforms: ["Framer", "Tailwind"],
    filters: ["framer"],
    accent: "bg-linear-to-br from-tint-4 via-tint-5 to-primary/25 dark:from-shade-4 dark:via-shade-5 dark:to-primary/30",
    text: "High-converting SaaS landing page template with modern Bento-grid layouts, interactive feature tabs, pricing calculator, and clean code blocks.",
    previewHref: "#",
    marketHref: "#",
  },
  {
    title: "Kanso Goods",
    category: "Commerce & Lifestyle",
    platforms: ["Figma", "Framer"],
    filters: ["figma", "framer"],
    accent: "bg-linear-to-br from-warning/25 via-tint-5 to-tint-3 dark:from-warning/20 dark:via-shade-4 dark:to-shade-3",
    text: "An editorial-style e-commerce template for boutique lifestyle brands, focusing on large product imagery, streamlined catalog filters, and fast checkout flow.",
    previewHref: "#",
    marketHref: "#",
  },
  {
    title: "Monocle Journal",
    category: "Editorial & Magazine",
    platforms: ["Astro", "Next.js"],
    filters: ["nextjs", "custom"],
    accent: "bg-linear-to-br from-neutral-silver via-tint-5 to-neutral-grey-blue/40 dark:from-neutral-d-grey dark:via-shade-4 dark:to-shade-3",
    text: "A distraction-free reading experience for digital publications, featuring lightning-fast page loads, reading time estimates, and newsletter capture blocks.",
    previewHref: "#",
    marketHref: "#",
  },
  {
    title: "Savor Kitchen",
    category: "Hospitality & Dining",
    platforms: ["Framer", "Webflow"],
    filters: ["framer"],
    accent: "bg-linear-to-br from-tertiary/20 via-tint-5 to-warning/20 dark:from-tertiary/25 dark:via-shade-4 dark:to-warning/15",
    text: "An atmospheric website template for fine dining and boutique cafes, complete with an interactive menu, photo showcase, and table reservation flow.",
    previewHref: "#",
    marketHref: "#",
  },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.filters.includes(activeFilter));

  return (
    <section id="work" className="bg-background py-16 md:py-24">
      <div className="container">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          Portfolio & Marketplace
        </p>
        <Title className="mt-3 max-w-2xl">Crafted Templates & Live Projects</Title>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-grey dark:text-neutral-l-grey">
          A curated collection of production-ready templates and custom digital
          experiences built for creators, agencies, and modern brands.
        </p>

        <ProjectFilter
          filters={FILTERS}
          activeId={activeFilter}
          onChange={setActiveFilter}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              platforms={project.platforms}
              accent={project.accent}
              previewHref={project.previewHref}
              marketHref={project.marketHref}
            >
              {project.text}
            </ProjectCard>
          ))}
        </div>

        {visibleProjects.length === 0 ? (
          <p className="mt-10 text-center text-neutral-grey dark:text-neutral-l-grey">
            No projects in this category yet.
          </p>
        ) : null}
      </div>
    </section>
  );
}
