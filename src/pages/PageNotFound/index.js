import React from 'react'
import team from "../../assets/images/team.png"
import StyledLink from "../../components/utils/styledLink"
export default function PageNotFound() {
    return (
        <div className="not-found">
            <div className="not-found__content">
                <img src={team} alt=""/>
                <div className="not-found__content-title">The rocket team <span>has won this time </span> </div>
                <button className="not-found__content-button"><StyledLink to="/">Return</StyledLink></button>
            </div>
        </div>
    )
}
