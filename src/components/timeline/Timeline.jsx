import React, {useEffect, useRef, useState} from "react";
import TimelineItem from "./TimelineItem";
import YearIndicator from "./YearIndicator";
import debounce from "lodash/debounce";
import StaticIndicator from "./StaticIndicator";

function Timeline() {
    const events = [
        { year: "Beginnings", linkedImage: { url: "/assets/apcs.png", link: "/" }, description: "Beginnings: " },
        { year: "Summer at FirstBuild", linkedImage: { url: "/assets/apcs.png", link: "https://www.youtube.com/watch?v=0-uuLpWo9jk" }, description: "Description for 2021" },
        { year: "DSA at DA", linkedImage: { url: "/assets/apcs.png", link: "https://example.com" }, description: "Description for 2022" },
        { year: "GEA Smarthome", linkedImage: { url: "/assets/apcs.png", link: "https://example.com" }, description: "Description for 2023" },
        { year: "Purdue", linkedImage: { url: "/assets/apcs.png", link: "https://example.com" }, description: "Description for 2023" },
    ];

    const [visibleYears, setVisibleYears] = useState(new Set());
    const [yearIndicatorAnimation, setYearIndicatorAnimation] = useState('');
    useEffect(() => {
        // Define a debounced version of handleScroll
        const debouncedHandleScroll = debounce(() => {
            const scrolledPast50vh = window.scrollY > window.innerHeight * 0.8;

            setYearIndicatorAnimation((prevAnimation) => {
                if (
                    (scrolledPast50vh && prevAnimation !== "fade-in") ||
                    (!scrolledPast50vh && prevAnimation !== "fade-out")
                ) {
                    return scrolledPast50vh ? "fade-in" : "fade-out";
                }
                return prevAnimation;
            });
        }, 5); // Adjust the debounce delay as needed

        window.addEventListener("scroll", debouncedHandleScroll);

        return () => {
            window.removeEventListener("scroll", debouncedHandleScroll);
        };
    }, []);
    const handleVisibilityChange = (year, isVisible) => {
        setVisibleYears(prevVisibleYears => {
            const updatedVisibleYears = new Set(prevVisibleYears);
            const needsUpdate = isVisible ? !updatedVisibleYears.has(year) : updatedVisibleYears.has(year);

            if (needsUpdate) {
                if (isVisible) {
                    updatedVisibleYears.add(year);
                } else {
                    updatedVisibleYears.delete(year);
                }
                return updatedVisibleYears;
            }
            return prevVisibleYears;
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
            <StaticIndicator
                activeYear={activeYear}
                yearIndicatorAnimation={yearIndicatorAnimation}/>

        </>
    );
}

export default Timeline;
