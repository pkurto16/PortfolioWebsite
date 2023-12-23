import React from "react";

function YearIndicator({ activeYear, animationClass }) {

    const timePeriods = ["Beginnings", "FirstBuild", "DSA at DA", "GE Appliances", "Purdue"];
    const timePeriodUrls = ["beginnings", "firstbuild", "dsa-at-da", "gea", "purdue"]
    return (
        <div className={`year-indicator ${animationClass}`}>
            {timePeriods.map((year) => (
                <div key={year} className={`year ${year === activeYear ? 'active' : ''}`}>
                    <a href = {`#${year}`}>
                        {year}
                    </a>
                </div>
            ))}
        </div>
    );
}

export default YearIndicator;
