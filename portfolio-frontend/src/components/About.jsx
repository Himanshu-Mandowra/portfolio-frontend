import React from "react";

function About() {
  return (
    <section className="mx-auto w-full max-w-6xl py-12 md:py-16" id="about">
      <div className="mb-7">
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-400/10 px-4 py-2 text-sm uppercase tracking-[0.05em] text-amber-400">
          About
        </div>

        <h2 className="mt-4 max-w-3xl font-['Arsenal_SC'] text-4xl leading-tight text-[#f6f1e8] md:text-5xl">
          Building scalable web applications with clean architecture and modern
          technologies.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-neutral-900/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
          <h3 className="mb-2 text-lg font-semibold text-[#f6f1e8]">
            About Me
          </h3>

          <p className="leading-7 text-stone-400">
            I'm a Full Stack Developer with 1.5+ years of professional
            experience building scalable web applications from responsive
            frontend interfaces to secure backend services. I enjoy turning
            complex ideas into intuitive, high-performance digital products.
          </p>

          <p className="mt-4 leading-7 text-stone-400">
            My primary stack includes React.js, Next.js, TypeScript, Node.js,
            Express.js, NestJS, PostgreSQL, MongoDB, Prisma ORM, and Tailwind
            CSS. I focus on writing clean, maintainable code while delivering
            fast and reliable user experiences.
          </p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-neutral-900/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
          <h3 className="mb-2 text-lg font-semibold text-[#f6f1e8]">
            Experience Snapshot
          </h3>

          <p className="leading-7 text-stone-400">
            At APS Matrix, I contributed to 4+ production projects by developing
            frontend features, architecting REST APIs, implementing secure
            authentication, integrating 30+ API endpoints, and managing MySQL,
            MongoDB, and PostgreSQL databases.
          </p>

          <p className="mt-4 leading-7 text-stone-400">
            I've also built full-stack solutions including a Wellness Service
            Platform, Task Management System, Blog Backend API, and an
            E-Commerce Backend—strengthening my expertise in scalable
            architecture, API design, and modern web development practices.
          </p>
        </article>
      </div>
    </section>
  );
}
export default About;
