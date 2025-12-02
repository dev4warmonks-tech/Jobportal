"use client";
import React from "react";

export default function TagsSlider() {
    const tags = [
        "UI Designer", "UI Developer", "Frontend Developer", "Full Stack", "Mobile App Developer",
        "UI Designer", "Cloud Engineer", "Data Scientist", "ML Engineer", "SOC Analyst", "Security Engineer",
        "UX Designer", "Product Designer", "Manual Tester", "QA Engineer", "IT Support", "Network Engineer",
        "Systems Admin", "AI Engineer", "AR/VR Developer"
    ];

    return (
        <div className="w-full overflow-hidden py-6 space-y-4">

            <div className="marquee">
                <div className="marquee-content">
                    {[...tags, ...tags].map((t, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 mx-2 bg-white border border-gray-300 rounded-md bg-[linear-gradient(to_bottom_right,_#EFF2F3_0%,_#EAFAFF_40%,_white_100%)]"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
            <div className="marquee">
                <div className="marquee-content reverse">
                    {[...tags, ...tags].map((t, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 mx-2 bg-white border border-gray-300 rounded-md bg-[linear-gradient(to_bottom_right,_#EFF2F3_0%,_#EAFAFF_40%,_white_100%)]"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className="marquee">
                <div className="marquee-content">
                    {[...tags, ...tags].map((t, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 mx-2 bg-white border border-gray-300 rounded-md bg-[linear-gradient(to_bottom_right,_#EFF2F3_0%,_#EAFAFF_40%,_white_100%)]"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
