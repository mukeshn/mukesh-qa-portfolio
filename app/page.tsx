'use client';
import { useState } from 'react';

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <main className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition">
        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* ===== Header ===== */}
          <header className="flex justify-between items-center mb-20 sticky top-0 bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur z-10 py-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Mukesh Ningadali
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-300">
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

          {/* ===== Hero ===== */}
          <section className="grid lg:grid-cols-2 gap-16 mb-28">
            <div>
              <h2 className="text-4xl font-semibold leading-tight">
                Quality Engineering for scalable,
                business-critical systems
              </h2>

              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
                Senior QA Automation Engineer / SDET with 10+ years of experience
                building reliable automation frameworks, CI/CD pipelines, and
                quality strategies across retail, e-commerce, and banking
                platforms.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="/Mukesh_Ningadali_Senior_QA_Automation_Engineer_Germany.pdf"
                  download
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
                >
                  Download CV
                </a>
                <a
                  href="https://www.linkedin.com/in/mukesh-ningadali/"
                  target="_blank"
                  className="px-6 py-3 border rounded-xl"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Profile Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow">
              <h3 className="font-semibold mb-4">Profile Snapshot</h3>
              <ul className="space-y-3 text-sm">
                <li><strong>Location:</strong> Germany (Permanent Residence)</li>
                <li><strong>Role:</strong> Senior QA Automation / SDET</li>
                <li><strong>Focus:</strong> UI, API, CI/CD, Accessibility</li>
                <li><strong>Tools:</strong> Playwright, Selenium, REST Assured</li>
                <li><strong>Certification:</strong> ISTQB</li>
              </ul>
            </div>
          </section>

          {/* ===== Skills ===== */}
          <section className="mb-28">
            <h2 className="text-2xl font-semibold mb-10">Core Competencies</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <SkillCard
                title="Automation"
                items={[
                  'Playwright (TypeScript)',
                  'Selenium (Java)',
                  'Appium',
                  'TestNG / JUnit',
                ]}
              />
              <SkillCard
                title="API & Backend"
                items={[
                  'REST API Automation',
                  'REST Assured',
                  'Postman',
                  'MS SQL Validation',
                ]}
              />
              <SkillCard
                title="Quality Engineering"
                items={[
                  'CI/CD Pipelines',
                  'Jenkins / GitHub Actions',
                  'Accessibility (WCAG 2.1)',
                  'Agile / Scrum',
                ]}
              />
            </div>
          </section>

          {/* ===== Experience ===== */}
          <section className="mb-28">
            <h2 className="text-2xl font-semibold mb-12">
              Professional Experience
            </h2>

            <div className="border-l pl-6 space-y-12">
              <Experience
                company="ALDI Süd · Germany"
                role="QA Automation Engineer"
                period="Jul 2023 – Present"
                desc="Playwright automation, CI/CD integration, accessibility testing for enterprise retail platforms."
              />
              <Experience
                company="LTIMindtree · India"
                role="Test Specialist"
                period="Aug 2022 – Jun 2023"
              />
              <Experience
                company="Persistent Systems · India"
                role="Lead QA Engineer"
                period="Feb 2021 – Aug 2022"
              />
              <Experience
                company="Capgemini · India"
                role="QA Automation Engineer"
                period="Mar 2016 – Feb 2021"
              />
            </div>
          </section>

          {/* ===== Projects ===== */}
          <section className="mb-28">
            <h2 className="text-2xl font-semibold mb-10">
              Automation Frameworks & Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Project
                title="Playwright E2E Framework"
                desc="TypeScript-based scalable framework with POM, parallel execution, reporting, and CI/CD integration."
              />
              <Project
                title="API Automation Framework"
                desc="REST Assured + Postman automation with database validation and Jenkins pipelines."
              />
            </div>
          </section>

          {/* ===== Footer ===== */}
          <footer className="border-t pt-10 text-sm text-slate-600 dark:text-slate-300">
            <p>Email: ningadalimukesh@gmail.com</p>
            <p>Phone: +49 160 9149 3912</p>
            <p>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/mukesh-ningadali/"
                className="text-blue-600"
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

/* ===== Components ===== */

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm">
        {items.map(i => <li key={i}>• {i}</li>)}
      </ul>
    </div>
  );
}

function Experience({
  company,
  role,
  period,
  desc,
}: {
  company: string;
  role: string;
  period: string;
  desc?: string;
}) {
  return (
    <div>
      <h3 className="font-semibold">{company}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">
        {role} · {period}
      </p>
      {desc && <p className="mt-2 text-sm">{desc}</p>}
    </div>
  );
}

function Project({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm">{desc}</p>
    </div>
  );
}
