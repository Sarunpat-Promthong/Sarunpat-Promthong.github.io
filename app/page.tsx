import { Phone, asset } from "@/components/Phone";
import { CopyEmail } from "@/components/CopyEmail";
import { profile, flow, hipsbook, otherWork, skills, education, languages } from "@/lib/content";

const wrap = "mx-auto w-full max-w-6xl px-5 sm:px-8";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">{children}</p>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-paper-2 px-3 py-1 text-sm text-ink-soft ring-1 ring-line">{children}</li>
  );
}

export default function Home() {
  const [first, second, third] = [flow[0], flow[2], flow[3]];

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to work
      </a>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/75 backdrop-blur-xl">
        <div className={`${wrap} flex h-16 items-center justify-between gap-4`}>
          <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-pine text-xs font-bold text-white">
              SP
            </span>
            <span className="hidden sm:inline">Sarunpat Promthong</span>
          </a>
          <nav aria-label="Main">
            <ul className="flex items-center gap-1 text-sm">
              <li><a className="rounded-full px-3 py-1.5 text-ink-soft hover:bg-paper-2 hover:text-ink" href="#work">Work</a></li>
              <li><a className="rounded-full px-3 py-1.5 text-ink-soft hover:bg-paper-2 hover:text-ink" href="#about">About</a></li>
              <li><a className="ml-1 rounded-full bg-ink px-4 py-1.5 font-medium text-paper hover:opacity-85" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className={`${wrap} grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28`}>
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-ink-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
              </span>
              Open to web, mobile and backend roles
            </p>

            <h1 className="mt-7 text-[clamp(2.4rem,5.6vw,4.25rem)] font-extrabold leading-[1.04] tracking-[-0.035em]">
              I build the apps people{" "}
              <span className="text-pine">sign up, learn and pay</span> on.
            </h1>

            <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-ink-soft">
              I&apos;m Sarunpat, a software developer in Thailand working across web, mobile and backend. For two years
              I&apos;ve shipped sign-up, login and checkout for an online course platform, plus tools school staff use every day.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-ink px-6 py-3 font-semibold text-paper transition hover:opacity-85"
              >
                See my work
              </a>
              <CopyEmail
                email={profile.email}
                className="rounded-full px-6 py-3 font-semibold ring-1 ring-line transition hover:bg-paper-2"
              />
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-[auto_auto_auto] gap-6 border-t border-line pt-6">
              <div>
                <dt className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-ink-faint">Experience</dt>
                <dd className="mt-1 font-semibold">2 years</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-ink-faint">Builds</dt>
                <dd className="mt-1 font-semibold">Web · Mobile · API</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-ink-faint">Based in</dt>
                <dd className="mt-1 font-semibold">Thailand</dd>
              </div>
            </dl>
          </div>

          {/* Fan of three real screens */}
          <div className="relative mx-auto aspect-[10/8.6] w-full max-w-[540px]" aria-label="Hipsbook screens">
            <div aria-hidden className="absolute left-[4%] top-[8%] h-[70%] w-[62%] rounded-full bg-pine-soft blur-3xl" />
            <div aria-hidden className="absolute bottom-[4%] right-[2%] h-[55%] w-[52%] rounded-full bg-glow blur-3xl" />
            <Phone
              src={first.img}
              alt={first.alt}
              priority
              className="rise absolute left-[3%] top-[13%] w-[32%] -rotate-[7deg]"
            />
            <Phone
              src={third.img}
              alt={third.alt}
              priority
              className="rise absolute right-[3%] top-[13%] w-[32%] rotate-[7deg] [animation-delay:120ms]"
            />
            <Phone
              src={second.img}
              alt={second.alt}
              priority
              className="rise absolute left-1/2 top-0 z-10 w-[36%] -translate-x-1/2 [animation-delay:240ms]"
            />
          </div>
        </section>

        {/* Case study */}
        <section id="work" className="border-t border-line bg-paper-2">
          <div className={`${wrap} py-20 sm:py-28`}>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <div>
                <Label>Case study</Label>
                <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">{hipsbook.name}</h2>
                <p className="mt-2 text-ink-soft">
                  {hipsbook.employer} · {hipsbook.period}
                </p>
              </div>
              <div>
                <p className="max-w-[60ch] text-lg leading-relaxed">{hipsbook.summary}</p>
                <a
                  href={hipsbook.url}
                  className="mt-5 inline-flex items-center gap-1.5 font-semibold text-pine hover:underline hover:underline-offset-4"
                >
                  Visit hipsbook.com <span aria-hidden>↗</span>
                </a>
              </div>
            </div>

            {/* The flow, in order */}
            <div className="mt-16">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <Label>The purchase flow</Label>
                <p className="text-sm text-ink-faint">Screens from the React Native app. The website runs the same flow in Next.js.</p>
              </div>
              <ol className="relative -mx-5 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-6 sm:overflow-visible sm:px-0">
                <div aria-hidden className="absolute left-0 right-0 top-[11px] hidden h-px bg-line sm:block" />
                {flow.map((step, i) => (
                  <li key={step.title} className="relative flex w-[64vw] max-w-[250px] shrink-0 snap-start flex-col sm:w-auto sm:max-w-none">
                    <div className="flex items-center gap-3">
                      <span className="relative grid h-6 w-6 place-items-center rounded-full bg-ink font-mono text-[0.7rem] font-medium text-paper">
                        {i + 1}
                      </span>
                      <h3 className="font-semibold">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{step.detail}</p>
                    <div className="mt-auto pt-5"><Phone src={step.img} alt={step.alt} /></div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Role + stack */}
            <div className="mt-20 grid gap-10 border-t border-line pt-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <div>
                <Label>My role</Label>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {hipsbook.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </ul>
                <p className="mt-6 max-w-[44ch] text-sm text-ink-faint">
                  The code belongs to the company, so this page shows the product rather than the source.
                </p>
              </div>
              <ul className="space-y-5">
                {hipsbook.did.map((d) => (
                  <li key={d} className="flex gap-4">
                    <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-pine" />
                    <span className="max-w-[60ch] leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* More screens */}
            <div className="mt-20">
              <Label>More screens</Label>
              <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 md:grid-cols-4">
                {hipsbook.gallery.map((g) => (
                  <li key={g.img}>
                    <Phone src={g.img} alt={g.alt} className="mx-auto max-w-[250px]" />
                    <p className="mx-auto mt-4 max-w-[250px] text-sm leading-snug text-ink-soft">{g.caption}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Other work */}
        <section className={`${wrap} py-20 sm:py-28`}>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <Label>Other work</Label>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em]">Systems people use daily</h2>
            </div>
            <div className="divide-y divide-line border-y border-line">
              {otherWork.map((p) => (
                <article key={p.name} className="grid gap-3 py-8 sm:grid-cols-[1fr_auto] sm:gap-8">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold tracking-tight">{p.name}</h3>
                    <p className="mt-0.5 text-ink-soft">{p.what}</p>
                    <ul className="mt-4 space-y-1.5 text-[0.95rem]">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-3">
                          <span aria-hidden className="text-ink-faint">–</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-faint sm:pt-1.5 sm:text-right">
                    {p.period}
                    <br className="hidden sm:block" />
                    <span className="sm:hidden"> · </span>
                    {p.org}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About: skills + education */}
        <section id="about" className="border-t border-line">
          <div className={`${wrap} grid gap-10 py-20 sm:py-28 lg:grid-cols-[1fr_2fr] lg:gap-16`}>
            <div>
              <Label>About</Label>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em]">Skills and background</h2>
              <img
                src={asset("profile.webp")}
                alt="Portrait of Sarunpat Promthong"
                width={160}
                height={160}
                className="mt-8 h-28 w-28 rounded-2xl object-cover object-top ring-1 ring-line"
              />
            </div>
            <div className="space-y-10">
              {skills.map((s) => (
                <div key={s.group} className="grid gap-3 sm:grid-cols-[9rem_1fr]">
                  <h3 className="pt-1 font-semibold">{s.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <Chip key={it}>{it}</Chip>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="grid gap-3 border-t border-line pt-10 sm:grid-cols-[9rem_1fr]">
                <h3 className="font-semibold">Education</h3>
                <p className="text-ink-soft">
                  <span className="text-ink">{education.school}</span>
                  <br />
                  {education.degree}
                  <br />
                  {education.years} · GPAX {education.gpa}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-[9rem_1fr]">
                <h3 className="font-semibold">Languages</h3>
                <p className="text-ink-soft">{languages}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Contact */}
      <footer id="contact" className="border-t border-line bg-paper-2">
        <div className={`${wrap} py-20 sm:py-28`}>
          <Label>Contact</Label>
          <h2 className="mt-3 max-w-[18ch] text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
            Hiring a developer? Let&apos;s talk.
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <p className="select-all break-all rounded-full bg-paper px-5 py-3 font-mono text-[0.95rem] ring-1 ring-line">
              {profile.email}
            </p>
            <CopyEmail
              email={profile.email}
              className="rounded-full bg-ink px-6 py-3 font-semibold text-paper transition hover:opacity-85"
            />
            <a
              href={profile.github}
              className="rounded-full px-6 py-3 font-semibold ring-1 ring-line transition hover:bg-paper"
            >
              GitHub
            </a>
          </div>
          <div className="mt-20 flex flex-wrap justify-between gap-4 border-t border-line pt-6 text-sm text-ink-faint">
            <p>© 2026 Sarunpat Promthong</p>
            <p>Built with Next.js, TypeScript and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </>
  );
}
