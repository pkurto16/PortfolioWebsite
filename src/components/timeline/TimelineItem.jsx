import React from "react";
import { useInView } from 'react-intersection-observer';

function TimelineItem({ year, linkedImage, description, text, alignment, onVisibilityChange }) {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    // Call the callback function when the in-view status changes
    React.useEffect(() => {
        onVisibilityChange(year, inView);
    }, [year, inView, onVisibilityChange]);

    const isLeftAligned = alignment === 'left';
    const isClickable = !(linkedImage.link === '');
    const handleImageClick = () => {
        // Open the link in a new tab
        window.open(linkedImage.link, '_blank', 'noopener,noreferrer');
    };

    const generateImage = (containerClassName) => {
        if(isClickable) {
            return (
                <div className={containerClassName} onClick={handleImageClick}>
                    <img src={linkedImage.url} alt={`Year ${year}`} style={{cursor: 'pointer'}} />
                </div>
            );
        }
        return (
            <div className={containerClassName}>
                <img src={linkedImage.url} alt={`Year ${year}`} />
            </div>
        );
    }

    return (
        <section id = {year}>
        <div ref={ref} className={`timeline-item ${isLeftAligned ? 'left' : 'right'} ${inView ? 'on-screen' : ''}`}>
            {isLeftAligned && (
                generateImage("timeline-item.left")
            )}
            <div className="timeline-content">
                <p>{description}</p>
                <text>{text}</text>
            </div>
            {!isLeftAligned && (
                generateImage("timeline-item.right")
            )}
        </div>
        </section>
    );
}

export default TimelineItem;
