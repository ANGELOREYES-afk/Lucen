// app/page.tsx
import Main from "./components/Hero"
import Companies from "./components/Companies"
import Industry from "./components/Industry";
import Recruiters from "./components/Recruiters";
import Smart_Industry from "./components/Smart_Industry";
import Benefits from "./components/KeyBene";
import FAQ from "./components/FAQ";
import Testimonials from "./components/testimonies";
import NewsletterSneakPeak from "./components/newsletter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <Main/>
      <Companies/>
      <Industry/>
      <Recruiters/>
      <Smart_Industry/>
      <NewsletterSneakPeak/>
      <Benefits/>
      <Testimonials/>
      <FAQ/>
    </main>
  );
}
