import { Link } from "wouter";
import "@/big-type.css";

export function Footer() {
  return (
    <div className="b b-legal-foot">
      <div className="b-wrap">
        <footer className="b-foot" style={{ marginTop: 0, borderTop: 0 }}>
          <span>© {new Date().getFullYear()} Hovina</span>
          <nav aria-label="Legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/data-deletion">Data Deletion</Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}
