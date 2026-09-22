import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

function ArrowLink({ children, href }: { children: React.ReactNode; href: string }) {
  return <a className="arrow-link" href={href}>{children} <span aria-hidden="true">↗</span></a>;
}

export const metadata = {
  title: "About | Asian College of Law",
  description: "Learn about Asian College of Law, its mission, leadership, history, and values.",
};

export default function AboutPage() {
  return (
    <div id="top" className="site-shell">
      <Header />
      <main>
        <section className="about-page__hero section-wrap" aria-labelledby="about-page-title">
          <div>
            <p className="eyebrow">About the college</p>
            <h1 id="about-page-title">A serious education for a changing legal world.</h1>
            <p>[Official college introduction to be provided by Asian College of Law.]</p>
          </div>
          <div className="about-page__image">
            <Image src="/images/487947090_122121287666783676_7044240575081239006_n.png" alt="Asian College of Law promotional banner" fill sizes="(max-width: 760px) 100vw, 50vw" priority />
          </div>
        </section>

        <section className="about-page__section section-wrap section-wrap--split" aria-labelledby="overview-title">
          <div className="section-label"><span>01</span><span>The institution</span></div>
          <div className="section-content">
            <h2 id="overview-title">[Approved college overview to be provided.]</h2>
            <p className="lead">[College-approved introduction, purpose, and educational approach to be provided.]</p>
            <p>Information about history, recognition, affiliations, achievements, and community impact will be published here only after it has been verified and approved by the college.</p>
          </div>
        </section>

        <section className="about-page__grid section-wrap" aria-label="College information">
          <article><p className="eyebrow">Mission</p><h2>[Mission statement to be provided]</h2><p>[Official mission statement and supporting explanation to be provided by the college.]</p></article>
          <article><p className="eyebrow">Vision</p><h2>[Vision statement to be provided]</h2><p>[Official vision statement and supporting explanation to be provided by the college.]</p></article>
          <article><p className="eyebrow">Values</p><h2>[College values to be provided]</h2><p>[Approved institutional values and descriptions to be provided by the college.]</p></article>
        </section>

        <section className="about-page__leadership section-wrap" aria-labelledby="leadership-title">
          <div><p className="eyebrow">Leadership</p><h2 id="leadership-title">People who guide the college.</h2></div>
          <div><p>[Principal, dean, leadership names, messages, qualifications, and photographs to be provided by the college.]</p><ArrowLink href="/#faculty">Explore faculty</ArrowLink></div>
        </section>

        <section className="about-page__facts section-wrap" aria-labelledby="facts-title">
          <div className="about-page__facts-heading"><p className="eyebrow">The record</p><h2 id="facts-title">History, recognition, and affiliations.</h2></div>
          <div className="about-page__facts-copy"><p>[Official history to be provided.]</p><p>[Accreditation, affiliations, partnerships, rankings, awards, and other institutional information to be provided and verified.]</p></div>
        </section>
      </main>

      <footer className="site-footer section-wrap" id="contact">
        <div className="site-footer__top"><div><Link className="brand brand--footer" href="/"><Image className="brand__logo" src="/images/480978690_611206165225520_3595417105812416003_n.jpg" alt="Asian College of Law logo" width={43} height={43} /><span className="brand__name">Asian College <span>of Law</span></span></Link><p>[Official college description to be provided.]</p></div><div className="footer-cta"><p>Have a question?</p><Link className="arrow-link arrow-link--light" href="/#contact">Contact the college ↗</Link></div></div>
        <div className="site-footer__bottom"><div><span>Quick links</span><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/#programs">Programs</Link><Link href="/#admissions">Admissions</Link></div><div><span>Contact</span><p>[College address to be provided]<br />[College phone to be provided]<br />[College email to be provided]</p></div><p>© {new Date().getFullYear()} Asian College of Law<br />[Social links to be provided]</p></div>
      </footer>
    </div>
  );
}
