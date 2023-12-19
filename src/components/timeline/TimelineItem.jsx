import React from "react";
import { useInView } from 'react-intersection-observer';

function TimelineItem({ year, image, description, alignment, onVisibilityChange }) {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    // Call the callback function when the in-view status changes
    React.useEffect(() => {
        onVisibilityChange(year, inView);
    }, [year, inView, onVisibilityChange]);

    const isLeftAligned = alignment === 'left';

    return (
        <div ref={ref} className={`timeline-item ${isLeftAligned ? 'left' : 'right'} ${inView ? 'on-screen' : ''}`}>
            {isLeftAligned && <div className="timeline-image"><img src={image} alt={`Year ${year}`} /></div>}
            <div className="timeline-content"><p>{description}</p></div>
            {!isLeftAligned && <div className="timeline-image"><img src={image} alt={`Year ${year}`} /></div>}
        </div>
    );
}

export default TimelineItem;
