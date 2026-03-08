"use client";

const experiences = [
  { company: "New Media Services", period: "2026-Present | Full-Time" },
  { company: "City Government Of Baguio - Accounting Office", period: "2024-2025 | Contract" },
  { company: "New Media Services", period: "2023-2024 | Full-Time" },
  { company: "City Government Of Baguio - MITD", period: "2023 | Internship" },
  { company: "AC/PC Depot LG Shop", period: "2019 | Immersion" },
];

const education = [
  { school: "University Of Baguio", degree: "Bachelor of Science in Computer Science" },
  { school: "University Of Baguio", degree: "Senior HighSchool | School of Information and Technology" },
  { school: "Baguio City National HighSchool", degree: "HighSchool | Technical Drafting" },
];

export default function Stats() {
  return (
    <section className="py-24 px-8 md:px-20 max-w-7xl mx-auto border-t-2 border-primary/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h3 className="text-5xl font-black mb-12 uppercase tracking-tighter">Experiences</h3>
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-primary rotate-45" />
                <h4 className="text-xl font-bold leading-none">{exp.company}</h4>
                <p className="text-primary/50 text-sm mt-1">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-5xl font-black mb-12 uppercase tracking-tighter">Education</h3>
          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-primary/20">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-primary rotate-45" />
                <h4 className="text-xl font-bold leading-none">{edu.school}</h4>
                <p className="text-primary/50 text-sm mt-1">{edu.degree}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
             <div className="relative w-full aspect-video bg-grid border-2 border-primary rounded-2xl p-8 flex items-end justify-between overflow-hidden">
                <div className="text-6xl">🐈</div>
                <div className="absolute top-4 right-4 text-4xl opacity-10 uppercase font-black">Creative</div>
                <div className="sticker bg-secondary text-white transform -rotate-3">Busy Being Awesome</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
