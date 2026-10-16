import { LogoMark } from "@/components/logo";
import { Link } from "wouter";
import "@/big-type.css";

export function Navbar() {
  return (
    <div className="b b-bar">
      <div className="b-wrap">
        <header className="b-nav">
          <Link className="b-logo" href="/" aria-label="Hovina home"><LogoMark />Hovina<i>.</i></Link>
          <nav className="b-links" aria-label="Main">
            <a className="hide-s" href="/#services">Services</a>
            <a className="hide-s" href="/#work">Work</a>
            <a className="hide-s" href="/#process">Process</a>
            <a className="b-pill" href="/#contact">Let's talk</a>
          </nav>
        </header>
      </div>
    </div>
  );
}
