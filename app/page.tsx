'use client';
import { useState } from 'react';

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <main className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition">
        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* Header */}
          <header className="flex justify-between items-center mb-20">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                Mukesh Ningadali
              </h1>
              <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
                Senior QA Automation Engineer · SDET · Germany
              </p>
            </div>

            <button
              onClick={() => setDark(!dark)}
              className="px-4 py-2 border rounded-lg text-sm"
            >
              {dark ? 'Light' : 'Dark'}
            </button>
          </header>

          {/* Hero */}
          <section className="grid md:grid-cols-2 gap-12 mb-24">
            <div>
              <h2 className="text-3xl font-semibold leading-tight">
                Building reliable quality engineering systems for
                enterprise-scale products
              </h2>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
                QA Automation Engineer / SDET with 10+ years of experience
                designing scalable automation frameworks, CI/CD pipelines,
                and end-to-end quality strategies across retail, e-commerce,
                and banking domains.
              </p>

              <a
                href="/Mukesh_Ningadali_Senior_QA_Automation_Engineer_Germany.pdf"
                download
                className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
              >
                Download CV (PDF)
              </a>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow">
              <h3 className="font-semibold text-lg mb-4">Quick Profile</h3>
              <ul className="space-y-3 text-sm">
                <li>📍 Germany (Permanent Residence)</li>
                <li>💼 QA Automation / SDET</li>
                <li>🧪 Playwright · Selenium · API</li>
                <li>🔁 CI/CD · Jenkins · GitHub Actions</li>
                <li>📜 ISTQB Certified</li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-24">
            <h2 className="text-2xl font-semibold mb-8">Core Skills</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Playwright (TypeScript)',
                'Selenium (Java)',
                'API Automation',
                'REST Assured',
                'CI/CD Pipelines',
                'Jenkins',
                'GitHub Actions',
                'MS SQL',
                'Accessibility (WCAG 2.1)',
                'Agile / Scrum',
              ].map(skill => (
                <div
                  key={skill}
                  className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-24">
            <h2 className="text-2xl font-semibold mb-10">Professional Experience</h2>

            <div className="space-y-8 border-l pl-6">
              <div>
                <h3 className="font-semibold">ALDI Süd · Germany</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  QA Automation Engineer · Jul 2023 – Present
                </p>
                <p className="mt-2 text-sm">
                  Playwright automation, CI/CD integration, accessibility
                  testing (WCAG 2.1), enterprise retail platforms.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">LTIMindtree · India</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Test Specialist · Aug 2022 – Jun 2023
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Persistent Systems · India</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Lead QA Engineer · Feb 2021 – Aug 2022
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Capgemini · India</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  QA Automation Engineer · Mar 2016 – Feb 2021
                </p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-24">
            <h2 className="text-2xl font-semibold mb-8">
              Automation Frameworks & Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
                <h3 className="font-semibold">
                  Playwright E2E Automation Framework
                </h3>
                <p className="mt-2 text-sm">
                  Scalable TypeScript-based framework with POM, parallel
                  execution, reporting, and CI/CD integration.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
                <h3 className="font-semibold">
                  API Automation Framework
                </h3>
                <p className="mt-2 text-sm">
                  REST Assured + Postman automation with database validation
                  and Jenkins pipelines.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t pt-10 text-sm">
            <p>Email: ningadalimukesh@gmail.com</p>
            <p>Phone: +49 160 9149 3912</p>
            <p>
              LinkedIn:{' '}
              <a
                className="text-blue-600"
                href="https://www.linkedin.com/in/mukesh-ningadali/"
                target="_blank"
              >
                linkedin.com/in/mukesh-ningadali
              </a>
            </p>
          </footer>

        </div>
      </div>
    </main>
  );
}
