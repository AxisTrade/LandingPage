import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import Footer  from "@/components/Footer/Footer";
import AboutUs from "@/components/AboutUs/AboutUs";
import Solutions from "@/components/Solutions/Solutions";
import ContactUs from "@/components/ContactUs/ContactUs";
import Features from "@/components/Feature/Feature";
// import Services from "@/components/Services/Services";
// import Benefits from "@/components/Benefits/Benefits";
// import PricingBand from "@/components/PricingBand/PricingBand";
// import Integrations from "@/components/Integrations/Integrations";
// import CTA from "@/components/CTA/CTA";
// import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Solutions />
      <ContactUs />
      <Footer />
    </>
  );
}
