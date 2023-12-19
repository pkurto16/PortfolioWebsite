import React, {useRef, useState} from "react";
import TimelineItem from "./TimelineItem";
import YearIndicator from "./YearIndicator";

function Timeline() {
    const events = [
        { year: 2020, image: "image1.jpg", description: "Beginnings: " },
        { year: 2021, image: "image2.jpg", description: "Description for 2021" },
        { year: 2022, image: "image3.jpg", description: "Description for 2022" },
        { year: 2023, image: "image4.jpg", description: "Description for 2023" },
    ];

    const [visibleYears, setVisibleYears] = useState(new Set());

    const handleVisibilityChange = (year, isVisible) => {
        setVisibleYears(prevVisibleYears => {
            const updatedVisibleYears = new Set(prevVisibleYears);
            if (isVisible) {
                updatedVisibleYears.add(year);
            } else {
                updatedVisibleYears.delete(year);
            }
            return updatedVisibleYears;
        });
    };

    // Determine the most relevant year to display
    const activeYear = Array.from(visibleYears).sort().reverse()[0];

    return (
        <>
            <div className="timeline">
                {events.map((event, index) => (
                    <TimelineItem
                        key={index}
                        year={event.year}
                        image={event.image}
                        description={event.description}
                        alignment={index % 2 === 0 ? 'left' : 'right'}
                        onVisibilityChange={handleVisibilityChange}
                    />
                ))}
            </div>
            <YearIndicator activeYear={activeYear} />
        </>
    );
}

export default Timeline;
