import React from 'react'
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

function Widgets() {

    const newsArtical = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linked News</h2>
                <InfoIcon />
            </div>

            {newsArtical("Akash Zalavadiya", "Top news - 9099 readers")}
            {newsArtical("Akash Zalavadiya", "Top news - 8000 readers")}
            {newsArtical("Krunal Mungalpara", "Top news - 1551 readers")}
            {newsArtical("Yagnik Moradiya", "Top news - 3489 readers")}
            {newsArtical("Dhairya Patel", "Top news - 9054 readers")}
            {newsArtical("Yash Rudani", "Top news - 7423 readers")}
        </div>
    )
}

export default Widgets;
