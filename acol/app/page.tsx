import Header from "./components/Header";
import HomeSlider from "./components/HomeSlider";
import Image from "next/image";
import Link from "next/link";

type Program = {
  number: string;
  name: string;
  description: string;
  duration: string;
};

type Notice = {
  date: string;
  category: string;
  title: string;
  summary: string;
};

const programs: Program[] = [
  { number: "01", name: "[Program name]", description: "[Official program description to be provided by the college.]", duration: "[Duration to be provided]" },
  { number: "02", name: "[Program name]", description: "[Official program description to be provided by the college.]", duration: "[Duration to be provided]" },
  { number: "03", name: "[Program name]", description: "[Official program description to be provided by the college.]", duration: "[Duration to be provided]" },
];

const notices: Notice[] = [
  { date: "[DATE]", category: "[CATEGORY]", title: "[Notice title to be provided]", summary: "[Notice summary to be provided by the college.]" },
  { date: "[DATE]", category: "[CATEGORY]", title: "[Notice title to be provided]", summary: "[Notice summary to be provided by the college.]" },
  { date: "[DATE]", category: "[CATEGORY]", title: "[Notice title to be provided]", summary: "[Notice summary to be provided by the college.]" },
];

function ArrowLink({ children, href = "#" }: { children: React.ReactNode; href?: string }) {
  return <a className="arrow-link" href={href}>{children} <span aria-hidden="true">↗</span></a>;
}

function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="program-card">
      <div className="program-card__number">{program.number}</div>
      <div>
        <h3>{program.name}</h3>
        <p>{program.description}</p>
        <div className="program-card__footer">
          <span>{program.duration}</span>
          <ArrowLink href="#admissions">View program</ArrowLink>
        </div>
      </div>
    </article>
  );
}

function NoticeCard({ notice }: { notice: Notice }) {
  return (
    <article className="notice-card">
      <div className="notice-card__meta"><span>{notice.date}</span><span>{notice.category}</span></div>
      <h3>{notice.title}</h3>
      <p>{notice.summary}</p>
      <ArrowLink href="#notices">Read more</ArrowLink>
    </article>
  );
}

export default function Home() {
  return (
    <div id="top" className="site-shell">
      <Header />
      <HomeSlider />
      <main>
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero__content">
            <p className="eyebrow">Asian College of Law</p>
            <h1 id="hero-title">Shaping the next generation of legal professionals.</h1>
            <p className="hero__intro">A considered digital home for the college community. Official institutional information will be added as it is provided and approved by the college.</p>
            <div className="button-row">
              <Link className="button button--accent" href="/programs">Explore programs <span aria-hidden="true">↗</span></Link>
              <Link className="button button--outline" href="/admissions">Admissions <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="hero__visual">
            <Image src="/images/480978690_611206165225520_3595417105812416003_n.jpg" alt="Asian College of Law logo" fill sizes="(max-width: 760px) 100vw, 45vw" priority />
          </div>
        </section>

        <section className="quick-links section-wrap" aria-label="Explore the college">
          {[
            ["01", "Academics", "Explore academics", "/academics"],
            ["02", "Admissions", "Find your next step", "#admissions"],
            ["03", "Student life", "Explore the experience", "#student-life"],
            ["04", "Notices", "See latest updates", "#notices"],
          ].map(([number, title, link, href]) => (
            <Link className="quick-link" href={href} key={number}>
              <span>{number}</span><strong>{title}</strong><em>{link} ↗</em>
            </Link>
          ))}
        </section>

        <section className="about section-wrap section-wrap--split" id="about" aria-labelledby="about-title">
          <div className="section-label"><span>01</span><span>About the college</span></div>
          <div className="section-content">
            <h2 id="about-title">A place to think carefully about law and its impact.</h2>
            <p className="lead">[Official college introduction to be provided.]</p>
            <p>[Approved information about the college, its mission, vision, values, leadership, history, and affiliations will be placed here. No institutional claims are being made until verified.]</p>
            <ArrowLink href="#contact">Learn more about us</ArrowLink>
          </div>
        </section>

        <section className="programs section-wrap" id="programs" aria-labelledby="programs-title">
          <div className="section-heading">
            <div><p className="eyebrow">Academic pathways</p><h2 id="programs-title">Programs shaped<br />for purposeful work.</h2></div>
            <p>[Official program list and descriptions to be provided by the college.]</p>
          </div>
          <div className="program-grid">{programs.map((program) => <ProgramCard key={program.number} program={program} />)}</div>
          <div className="section-action"><ArrowLink href="#contact">View all programs</ArrowLink></div>
        </section>

        <section className="admissions section-wrap" id="admissions" aria-labelledby="admissions-title">
          <div className="admissions__seal" aria-hidden="true">ACL<br /><span>ADMISSIONS</span></div>
          <div><p className="eyebrow">Your next chapter</p><h2 id="admissions-title">Begin your journey in law.</h2><p>[General admissions information to be provided. Eligibility, fees, dates, documents, and application procedures will be published only after college approval.]</p><div className="button-row"><a className="button button--light" href="#contact">Explore admissions ↗</a><a className="text-link text-link--light" href="#contact">Contact admissions <span aria-hidden="true">↗</span></a></div></div>
        </section>

        <section className="notices section-wrap" id="notices" aria-labelledby="notices-title">
          <div className="section-heading section-heading--notices"><div><p className="eyebrow">Stay informed</p><h2 id="notices-title">Notices &amp; updates.</h2></div><ArrowLink href="#notices">View all notices</ArrowLink></div>
          <div className="notice-grid">{notices.map((notice, index) => <NoticeCard key={`${notice.title}-${index}`} notice={notice} />)}</div>
        </section>

        <section className="faculty-placeholder section-wrap" id="faculty" aria-labelledby="faculty-title"><p className="eyebrow">People and perspective</p><h2 id="faculty-title">Faculty profiles<br />coming soon.</h2><p>[Faculty names, qualifications, departments, and biographies to be provided by the college.]</p></section>
        <section className="student-life-anchor" id="student-life" aria-label="Student life" />
      </main>

      <footer className="site-footer section-wrap" id="contact">
        <div className="site-footer__top"><div><a className="brand brand--footer" href="#top"><Image className="brand__logo" src="/images/480978690_611206165225520_3595417105812416003_n.jpg" alt="Asian College of Law logo" width={43} height={43} /><span className="brand__name">Asian College <span>of Law</span></span></a><p>[Official college description to be provided.]</p></div><div className="footer-cta"><p>Have a question?</p><a className="arrow-link arrow-link--light" href="mailto:college-email-to-be-provided">Contact the college ↗</a></div></div>
        <div className="site-footer__bottom"><div><span>Quick links</span><a href="#about">About</a><a href="#programs">Programs</a><a href="#admissions">Admissions</a><a href="#notices">Notices</a></div><div><span>Contact</span><p>[College address to be provided]<br />[College phone to be provided]<br />[College email to be provided]</p></div><p>© {new Date().getFullYear()} Asian College of Law<br />[Social links to be provided]</p></div>
      </footer>
    </div>
  );
}
