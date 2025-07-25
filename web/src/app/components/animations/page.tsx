// src/app/components/animations/page.tsx

"use client";

import Cta from "../cta";
import FeaturesPlanet from "../features-planet";
// This import path has been corrected
import LargeTestimonial from "../large-testimonial"; 

export default function Animations() {
    return (
        <div className="pt-20">
            <FeaturesPlanet />
            <LargeTestimonial />
            <Cta />
        </div>
    )
}