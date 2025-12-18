import React from "react";

const WhatWeDo = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6 md:px-14 2xl:px-0 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <label className="font-medium uppercase tracking-wide text-sm">
          Overview
        </label>
        <h1 className="text-4xl font-bold">What We Do</h1>
      </div>

      <p className="max-w-3xl md:text-lg leading-relaxed">
        We provide professional short-term rental management for apartment owners
        in Downtown Dubai. Our role is to manage your property end-to-end—so you
        can earn flexible income without dealing with day-to-day operations or
        the limitations of long-term leasing.
      </p>

      <p className="max-w-3xl text-sm md:text-base leading-relaxed">
        From listing and pricing to guest communication, housekeeping, and
        ongoing coordination, we handle every aspect of short-term rental
        management while you retain full ownership and visibility over your
        apartment.
      </p>
    </div>
  );
};

export default WhatWeDo;
