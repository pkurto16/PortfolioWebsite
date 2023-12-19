import React from "react";

function YearIndicator({ activeYear }) {
    const years = [2020, 2021, 2022, 2023];

    return (
        <div className="year-indicator">
            {years.map((year) => (
                <div key={year} className={`year ${year === activeYear ? 'active' : ''}`}>
                    {year}
                </div>
            ))}
        </div>
    );
}

export default YearIndicator;
