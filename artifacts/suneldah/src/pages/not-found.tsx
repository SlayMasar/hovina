import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <div className="b b-page b-legal">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 max-w-3xl pt-32 pb-24">
        <p className="b-m" style={{ margin: "0 0 18px" }}>Error 404</p>
        <h1 className="b-d" style={{ fontSize: "clamp(3.4rem,12vw,9rem)" }}>Page not found.</h1>
        <p style={{ fontSize: "1.25rem", margin: "28px 0 32px" }}>That page doesn't exist, or it has moved.</p>
        <a className="b-pill lime" href="/">Back to home</a>
      </main>
      <Footer />
    </div>
  );
}
