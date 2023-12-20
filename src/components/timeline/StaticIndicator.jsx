import React from "react";
import YearIndicator from "./YearIndicator";

function StaticIndicator({activeYear,yearIndicatorAnimation}) {

    return (
        <div className={"static-indicator"}>
            <YearIndicator activeYear={activeYear} animationClass={yearIndicatorAnimation}/>
        </div>
    );
}

export default StaticIndicator;
