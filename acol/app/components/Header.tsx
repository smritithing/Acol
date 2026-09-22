"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Faculty", href: "/faculty" },
  { label: "News", href: "/News" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="Asian College of Law home">
          <Image className="brand__logo brand__logo--header" src="/images/480978690_611206165225520_3595417105812416003_n.jpg" alt="Asian College of Law logo" width={56} height={56} priority />
          <span className="brand__name"><strong>ASIAN</strong><span>COLLEGE</span><span>OF LAW</span></span>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={isMenuOpen} aria-controls="primary-navigation" onClick={() => setIsMenuOpen((open) => !open)}>
          <span className="sr-only">{isMenuOpen ? "Close" : "Open"} navigation menu</span>
          <span aria-hidden="true" className="menu-toggle__icon">{isMenuOpen ? "×" : "☰"}</span>
        </button>
        <nav id="primary-navigation" className={`primary-navigation${isMenuOpen ? " primary-navigation--open" : ""}`} aria-label="Primary navigation">
          {navigation.map((item) => <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</Link>)}
          <Link className="button button--small button--accent" href="/admissions" onClick={() => setIsMenuOpen(false)}>Apply now <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}