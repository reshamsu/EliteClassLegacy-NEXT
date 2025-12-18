import Hero from "@/components/home/Hero";
import OwnersChooseUs from "@/components/home/OwnersChooseUs";
import WhatWeDo from "@/components/home/WhatWeDo";

export default function Home() {
  return (
    <div className="relative z-30">
      <Hero />
      <WhatWeDo />
      <OwnersChooseUs />
    </div>
  );
}
