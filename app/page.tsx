
import HeroSection from "@/components/page/homePage/HeroSection";
import AboutSection from "@/components/page/homePage/AboutSection";
import SignSection from "@/components/page/homePage/SignSection";
import CategorySection from "@/components/page/homePage/CategorySection";
import BlogSection from "@/components/page/homePage/BlogSection";
import DetailSection from "@/components/page/homePage/DetailSection";
import ContactSection from "@/components/page/homePage/ContactSection";
import Pattern from "@/components/page/homePage/Patterm";
import BigLogo from "@/components/shared/common/BigLogo";
export default function Home() {
  const categories = [
    "ترابری",
    "فناوری",
    "مالی",
    "آموزش",
    "گردشگری",
    "سلامت",
    "کشاورزی",
    "ساختمان",
    "خدمات",
    "دیجیتال مارکتینگ"
  ];

  return (
    <div className="home-container max-w-full overflow-hidden w-full flex flex-col">
      <HeroSection />
      <AboutSection />
      <SignSection />
      <CategorySection {...categories} />
      <BlogSection />
      <DetailSection />
      <ContactSection/>
      <Pattern/>
      <BigLogo src="/images/big-logo.png" title="logo"/>
    </div>
  );
}
