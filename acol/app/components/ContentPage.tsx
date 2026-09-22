import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

type ContentSection = {
  label: string;
  title: string;
  description: string;
};

type ContentPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: ContentSection[];
  heroAside?: React.ReactNode;
  additionalContent?: React.ReactNode;
};

export default function ContentPage({ eyebrow, title, intro, sections, heroAside, additionalContent }: ContentPageProps) {
  return (
    <div id="top" className="site-shell">
      <Header />
      <main>
        <section className="content-page__hero section-wrap" aria-labelledby="content-page-title">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 id="content-page-title">{title}</h1>
            {intro && <p>{intro}</p>}
          </div>
          {heroAside ?? <div className="content-page__image"><Image src="/images/487947090_122121287666783676_7044240575081239006_n.png" alt="Asian College of Law promotional banner" fill sizes="(max-width: 760px) 100vw, 50vw" priority /></div>}
        </section>
        {additionalContent}

        <section className="content-page__sections section-wrap" aria-label={`${eyebrow} information`}>
          {sections.map((section, index) => (
            <article className="content-page__card" key={section.label}>
              <span className="content-page__number">{String(index + 1).padStart(2, "0")}</span>
              <div><p className="eyebrow">{section.label}</p><h2>{section.title}</h2><p>{section.description}</p><Link className="arrow-link" href="/contact">Request information <span aria-hidden="true">↗</span></Link></div>
            </article>
          ))}
        </section>
      </main>

      <footer className="site-footer section-wrap" id="contact">
        <div className="site-footer__top"><div><Link className="brand brand--footer" href="/"><Image className="brand__logo" src="/images/480978690_611206165225520_3595417105812416003_n.jpg" alt="Asian College of Law logo" width={43} height={43} /><span className="brand__name">Asian College <span>of Law</span></span></Link><p>[Official college description to be provided.]</p></div><div className="footer-cta"><p>Have a question?</p><Link className="arrow-link arrow-link--light" href="/contact">Contact the college ↗</Link></div></div>
        <div className="site-footer__bottom"><div><span>Quick links</span><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/programs">Programs</Link><Link href="/admissions">Admissions</Link></div><div><span>Contact</span><p>[College address to be provided]<br />[College phone to be provided]<br />[College email to be provided]</p></div><p>© {new Date().getFullYear()} Asian College of Law<br />[Social links to be provided]</p></div>
      </footer>
    </div>
  );
}
