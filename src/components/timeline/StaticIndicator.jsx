import React from "react";
import YearIndicator from "./YearIndicator";

function StaticIndicator({activeYear,yearIndicatorAnimation, autoScroll}) {

    return (
        <div className={"static-indicator"}>
            <YearIndicator activeYear={activeYear} animationClass={yearIndicatorAnimation}/>
        </div>
    );
}

export default StaticIndicator;
