import React, {useEffect, useRef, useState} from "react";
import TimelineItem from "./TimelineItem";
import YearIndicator from "./YearIndicator";

function Timeline() {
    const events = [
        { year: "Beginnings", linkedImage: { url: "../assets/images/images.png", link: "https://example.com" }, description: "Beginnings: " },
        { year: "Summer at FirstBuild", linkedImage: { url: "../assets/images/images.png", link: "https://example.com" }, description: "Description for 2021" },
        { year: "DSA at DA", linkedImage: { url: "../assets/images/images.png", link: "https://example.com" }, description: "Description for 2022" },
        { year: "GEA Smarthome", linkedImage: { url: "../assets/images/images.png", link: "https://example.com" }, description: "Description for 2023" },
        { year: "Purdue", linkedImage: { url: "../assets/images/images.png", link: "https://example.com" }, description: "Description for 2023" },
    ];

    const [visibleYears, setVisibleYears] = useState(new Set());
    const [yearIndicatorAnimation, setYearIndicatorAnimation] = useState('');
    useEffect(() => {
        const handleScroll = () => {
            const scrolledPast50vh = window.scrollY > window.innerHeight * 0.8;
            setYearIndicatorAnimation(scrolledPast50vh ? 'fade-in' : 'fade-out');
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
                        linkedImage={event.linkedImage}
                        description={event.description}
                        alignment={index % 2 === 0 ? 'left' : 'right'}
                        onVisibilityChange={handleVisibilityChange}
                    />
                ))}
            </div>
            <YearIndicator activeYear={activeYear} animationClass={yearIndicatorAnimation}/>
        </>
    );
}

export default Timeline;
