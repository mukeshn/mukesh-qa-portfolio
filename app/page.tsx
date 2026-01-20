'use client';
import { useState } from 'react';

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <main className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition">
        <div className="max-w-6xl mx-auto px-6 py-10">

          {/* Header */}
          <header className="flex justify-between items-start mb-12">
            <div>
              <h1 className="text-4xl font-bold">Mukesh Ningadali</h1>
              <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
                Senior QA Automation Engineer | SDET | Germany
              </p>

              <p className="mt-4 max-w-2xl">
                Senior QA Automation Engineer / SDET with 10+ years of experience
                in test automation, quality engineering, and framework development
                across retail, e-commerce, and banking domains.
              </p>

              <a
                href="/Mukesh_Ningadali_Senior_QA_Automation_Engineer_Germany.pdf"
                download
                className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
              >
                Download CV (PDF)
              </a>
            </div>

            <button
              onClick={() => setDark(!dark)}
              className="px-4 py-2 border rounded-lg text-sm"
            >
              {dark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </header>

          {/* Skills */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Core Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                'Playwright (TypeScript)',
                'Selenium (Java)',
                'Appium',
                'REST API Automation',
                'CI/CD',
                'Jenkins',
                'GitLab CI',
                'GitHub Actions',
                'MS SQL',
                'Accessibility WCAG 2.1',
              ].map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-6">
              Automation Projects & Frameworks
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow">
                <h3 className="font-semibold text-lg">
                  Playwright E2E Automation Framework
                </h3>
                <p className="mt-2 text-sm">
                  Built scalable Playwright + TypeScript framework using Page
                  Object Model, CI/CD integration, parallel execution and
                  reporting for enterprise retail applications.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow">
                <h3 className="font-semibold text-lg">
                  API Automation Framework
                </h3>
                <p className="mt-2 text-sm">
                  Designed REST API automation using REST Assured and Postman
                  with database validation and Jenkins pipelines.
                </p>
              </div>
            </div>
          </section>

          {/* German Keywords */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">
              German Recruiter Keywords
            </h2>
            <p className="text-sm max-w-3xl">
              QA Automation Engineer, SDET, Testautomatisierung,
              Qualitätssicherung, Softwaretest, CI/CD Pipeline, Selenium,
              Playwright, API Testing, ISTQB, Deutschland, Permanent Residence
            </p>
          </section>

          {/* Footer */}
          <footer className="pt-10 border-t">
            <p>Email: ningadalimukesh@gmail.com</p>
            <p>Phone: +49 160 9149 3912</p>
            <p>
              LinkedIn:{' '}
              <a
                className="text-blue-500"
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
