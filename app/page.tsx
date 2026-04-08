import HeroSection from "@/components/home/HeroSection";
import SearchBar from "@/components/home/SearchBar";
import StatsBar from "@/components/home/StatsBar";
import FilterAndCityGrid from "@/components/home/FilterAndCityGrid";
import ReviewsSection from "@/components/home/ReviewsSection";
import MeetupsSection from "@/components/home/MeetupsSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SearchBar />
      <StatsBar />
      <FilterAndCityGrid />
      <ReviewsSection />
      <MeetupsSection />
      <Footer />
    </>
  );
}
