import React, {useEffect, useRef, useState} from "react";
import TimelineItem from "./TimelineItem";
import YearIndicator from "./YearIndicator";
import debounce from "lodash/debounce";
import StaticIndicator from "./StaticIndicator";

function Timeline() {
    const events = [
        { year: "Beginnings", linkedImage: { url: "/assets/apcs.png", link: "" }, description: "Beginnings: ", text: "Developed a recipe scraping REST API for the Smart Home Solutions Cloud Team in my first week\n\n" +
                "- Recruited as one of the software developers to help launch SmartHQ AI - a partnership development between\n" +
                "GEA SmartHQ and Google Cloud’s generative AI platform to enhance consumer experience.\n\n" +
                "- Responsible for adding backend infrastructure features for new ChatGPT@GEA (a SmartHQ AI assistant):\n" +
                "Chat History Summary, Liking Messages to Enhance Model, Chat History Editing with Paths, and more\n\n" +
                "- Recognized by CTO as a key contributor for the successful launch and received an offer to continue working\n" +
                "throughout the school year to advance the Gen AI initiative\n\n"},
        { year: "FirstBuild", linkedImage: { url: "/assets/firstbuild.png", link: "https://www.youtube.com/watch?v=0-uuLpWo9jk" }, description: "Summer at FirstBuild:",text:"Developed a recipe scraping REST API for the Smart Home Solutions Cloud Team in my first week\n\n" +
                "- Recruited as one of the software developers to help launch SmartHQ AI - a partnership development between\n" +
                "GEA SmartHQ and Google Cloud’s generative AI platform to enhance consumer experience.\n\n" +
                "- Responsible for adding backend infrastructure features for new ChatGPT@GEA (a SmartHQ AI assistant):\n" +
                "Chat History Summary, Liking Messages to Enhance Model, Chat History Editing with Paths, and more\n\n" +
                "- Recognized by CTO as a key contributor for the successful launch and received an offer to continue working\n" +
                "throughout the school year to advance the Gen AI initiative\n\n" },
        { year: "DSA at DA", linkedImage: { url: "/assets/apcs.png", link: "" }, description: "Description for 2022", text:"Developed a recipe scraping REST API for the Smart Home Solutions Cloud Team in my first week\n\n" +
                "- Recruited as one of the software developers to help launch SmartHQ AI - a partnership development between\n" +
                "GEA SmartHQ and Google Cloud’s generative AI platform to enhance consumer experience.\n\n" +
                "- Responsible for adding backend infrastructure features for new ChatGPT@GEA (a SmartHQ AI assistant):\n" +
                "Chat History Summary, Liking Messages to Enhance Model, Chat History Editing with Paths, and more\n\n" +
                "- Recognized by CTO as a key contributor for the successful launch and received an offer to continue working\n" +
                "throughout the school year to advance the Gen AI initiative\n\n"},
        { year: "GE Appliances", linkedImage: { url: "/assets/apcs.png", link: "" }, description: "GE Appliances: ", text: "Developed a recipe scraping REST API for the Smart Home Solutions Cloud Team in my first week\n\n" +
                "- Recruited as one of the software developers to help launch SmartHQ AI - a partnership development between\n" +
                "GEA SmartHQ and Google Cloud’s generative AI platform to enhance consumer experience.\n\n" +
                "- Responsible for adding backend infrastructure features for new ChatGPT@GEA (a SmartHQ AI assistant):\n" +
                "Chat History Summary, Liking Messages to Enhance Model, Chat History Editing with Paths, and more\n\n" +
                "- Recognized by CTO as a key contributor for the successful launch and received an offer to continue working\n" +
                "throughout the school year to advance the Gen AI initiative\n\n" },
        { year: "Purdue", linkedImage: { url: "/assets/apcs.png", link: "" }, description: "Description for 2023", text: "Developed a recipe scraping REST API for the Smart Home Solutions Cloud Team in my first week\n\n" +
                "- Recruited as one of the software developers to help launch SmartHQ AI - a partnership development between\n" +
                "GEA SmartHQ and Google Cloud’s generative AI platform to enhance consumer experience.\n\n" +
                "- Responsible for adding backend infrastructure features for new ChatGPT@GEA (a SmartHQ AI assistant):\n" +
                "Chat History Summary, Liking Messages to Enhance Model, Chat History Editing with Paths, and more\n\n" +
                "- Recognized by CTO as a key contributor for the successful launch and received an offer to continue working\n" +
                "throughout the school year to advance the Gen AI initiative\n\n"},
    ];

    const [visibleYears, setVisibleYears] = useState(new Set());
    const [yearIndicatorAnimation, setYearIndicatorAnimation] = useState('');
    useEffect(() => {
        // Define a debounced version of handleScroll
        const debouncedHandleScroll = debounce(() => {
            const scrolledPast50vh = window.scrollY > window.innerHeight * 0.7;

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
        <section id={"timeline"}>
            <div className="timeline">
                {events.map((event, index) => (
                    <TimelineItem
                        key={index}
                        year={event.year}
                        linkedImage={event.linkedImage}
                        description={event.description}
                        text={event.text}
                        alignment={index % 2 === 0 ? 'left' : 'right'}
                        onVisibilityChange={handleVisibilityChange}
                    />
                ))}
            </div>
            <StaticIndicator
                activeYear={activeYear}
                yearIndicatorAnimation={yearIndicatorAnimation}
            />

        </section>
    );
}

export default Timeline;
