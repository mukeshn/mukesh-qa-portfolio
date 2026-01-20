'use client';

import Image from 'next/image';
import { useState } from 'react';
import { profile } from '@/data/profile';

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <main className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition">
        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* ================= HEADER ================= */}
          <header className="flex justify-between items-center mb-20">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                {profile.name}
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {profile.title}
              </p>
            </div>

            <button
              onClick={() => setDark(!dark)}
              className="px-4 py-2 border border-slate-400/40 rounded-lg text-sm"
            >
              {dark ? 'Light' : 'Dark'}
            </button>
          </header>

          {/* ================= HERO ================= */}
          <section className="grid lg:grid-cols-2 gap-16 mb-28">

            {/* LEFT: INTRO */}
            <div>
              <h2 className="text-4xl font-semibold leading-tight mb-6">
                Quality Engineering for scalable,
                <br />
                business-critical systems
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                {profile.summary}
              </p>

              <div className="flex gap-4">
                <a
                  href="/Mukesh_Ningadali_Senior_QA_Automation_Engineer_Germany.pdf"
                  download
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
                >
                  Download CV
                </a>

                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  className="px-6 py-3 border border-slate-400/40 rounded-xl"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* RIGHT: PROFILE SNAPSHOT + PHOTO */}
            <div className="bg-slate-800/80 rounded-2xl p-8 shadow flex flex-col items-center text-center">

              {/* PROFILE PHOTO */}
              <Image
                src={profile.photo}
                alt={profile.name}
                width={150}
                height={150}
                priority
                className="rounded-full object-cover mb-6 border border-slate-600"
              />

              <h3 className="font-semibold text-lg mb-4">
                Profile Snapshot
              </h3>

              <ul className="space-y-3 text-sm text-left w-full">
                {profile.quickFacts.map((fact) => (
                  <li key={fact}>• {fact}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* ================= SKILLS ================= */}
          <section className="mb-28">
            <h2 className="text-2xl font-semibold mb-10">
              Core Competencies
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <SkillCard title="Automation" items={profile.skills.automation} />
              <SkillCard title="API & Backend" items={profile.skills.api} />
              <SkillCard title="Quality Engineering" items={profile.skills.quality} />
            </div>
          </section>

          {/* ================= EXPERIENCE ================= */}
          <section className="mb-28">
            <h2 className="text-2xl font-semibold mb-12">
              Professional Experience
            </h2>

            <div className="border-l border-slate-400/30 pl-6 space-y-12">
              {profile.experience.map((exp) => (
                <div key={exp.company}>
                  <h3 className="font-semibold">{exp.company}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {exp.role} · {exp.period}
                  </p>
                  {exp.description && (
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ================= PROJECTS ================= */}
          <section className="mb-28">
            <h2 className="text-2xl font-semibold mb-10">
              Automation Frameworks & Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {profile.projects.map((project) => (
                <div
                  key={project.title}
                  className="bg-slate-800/80 rounded-2xl p-6 shadow"
                >
                  <h3 className="font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= FOOTER ================= */}
          <footer className="border-t border-slate-400/30 pt-10 text-sm text-slate-600 dark:text-slate-300">
            <p>Email: {profile.contact.email}</p>
            <p>Phone: {profile.contact.phone}</p>
            <p>
              LinkedIn:{' '}
              <a
                href={profile.contact.linkedin}
                target="_blank"
                className="text-blue-500"
              >
                {profile.contact.linkedin}
              </a>
            </p>
          </footer>

        </div>
      </div>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-slate-800/80 rounded-2xl p-6 shadow">
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
