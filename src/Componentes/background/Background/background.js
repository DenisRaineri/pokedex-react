import React from "react";
import './background.css'

const Background = (props) => {
    const { background } = props;

    return (
        <>
            {(background === "background") &&
                <div id="background">
                </div>
            }

            {(background === "background-transparent") &&
                <div id="background-transparent">
                </div>
            }

            {(background === "background-error") &&
                <div id="background-error">
                </div>}
        </>
    )
}

export default Background;