import Footer from "@/components/Footer";
import ActivitySection from "@/components/homeComponents/ActivitySection";
import CommunitySection from "@/components/homeComponents/CommunitySection";
import EngageSection from "@/components/homeComponents/EngageSection";
import HeroSection from "@/components/homeComponents/HeroSection";
import LeadershipSection from "@/components/homeComponents/LeadershipSection";
import Newsletter from "@/components/homeComponents/Newsletter";
import ReviewSection from "@/components/homeComponents/ReviewSection";
import UpcomingEventsSection from "@/components/homeComponents/UpcomingEventsSection";
import WelcomeSection from "@/components/homeComponents/WelcomeSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Newsletter />
      <div className="bg-slate-200">
        <WelcomeSection />
        <CommunitySection />
      </div>
      <div className="bg-gray-100">
        <ActivitySection />
        <LeadershipSection />
        <UpcomingEventsSection />
        <ReviewSection />
      </div>
      <EngageSection />

    </main>
  );
}
