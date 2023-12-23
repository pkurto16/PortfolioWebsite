import React from "react";
import YearIndicator from "./yearIndicator/YearIndicator";
import "./StaticIndicator.css";

function StaticIndicator({activeYear,yearIndicatorAnimation}) {

    return (
        <div className={"static-indicator"}>
            <YearIndicator activeYear={activeYear} animationClass={yearIndicatorAnimation}/>
        </div>
    );
}

export default StaticIndicator;
