import React from "react";

function YearIndicator({ activeYear, animationClass }) {
    const years = ["Beginnings", "FirstBuild", "DSA at DA", "GE Appliances", "Purdue"];

    return (
        <div className={`year-indicator ${animationClass}`}>
            {years.map((year) => (
                <div key={year} className={`year ${year === activeYear ? 'active' : ''}`}>
                    {year}
                </div>
            ))}
        </div>
    );
}

export default YearIndicator;
