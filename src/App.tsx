import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Industries from "./components/Industries";
import WhyChooseUs from "./components/WhyChooseUs";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NewsDetail from "./pages/NewsDetail";
import SolutionDetail from "./pages/SolutionDetail";
import LegalPage from "./pages/LegalPage";
import ScrollToTop from "./components/ScrollToTop";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Services />
        <Solutions />
        <Industries />
        <WhyChooseUs />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/solutions/:id" element={<SolutionDetail />} />
        <Route path="/legal/:type" element={<LegalPage />} />
      </Routes>
    </>
  );
}
