import React from "react";

const OwnersChooseUs = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-20 px-6 md:px-14 2xl:px-0 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2">
          <label className="font-medium uppercase tracking-wide text-sm">
            Our Expertise
          </label>
          <h2 className="text-3xl md:text-4xl font-bold">Why Owners Choose Us</h2>
          <p className="max-w-2xl text-sm md:text-lg leading-relaxed mt-4">
            We focus on clarity, professionalism, and a management approach
            designed around the needs of Downtown Dubai apartment owners.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col gap-4 border border-transparent hover:border-black/20 transition-all duration-300">
            <h3 className="text-xl font-semibold">
              Downtown-Focused Expertise
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              We work exclusively with apartments in Downtown Dubai, allowing us
              to understand local demand, building standards, and market
              expectations in depth.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col gap-4 border border-transparent hover:border-black/20 transition-all duration-300">
            <h3 className="text-xl font-semibold">
              Flexible, Case-by-Case Revenue
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              Every apartment is different. Our management approach is tailored
              to each property, with flexible arrangements based on location,
              unit type, and owner preferences.
            </p>
          </div>

          {/* Card 3 */}

          <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col gap-4 border border-transparent hover:border-black/20 transition-all duration-300">
            <h3 className="text-xl font-semibold">
              End-to-End Management & Compliance
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              From operations and guest coordination to housekeeping and ongoing
              oversight, we manage the full short-term rental process while
              maintaining alignment with applicable regulations and owner
              expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnersChooseUs;
