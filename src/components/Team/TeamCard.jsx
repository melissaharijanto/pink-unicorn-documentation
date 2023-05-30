import React from "react"

const TeamCard = (props) => {
    return (
        <div>
            <img src={props.data.img} />
            <div>
                {props.data.name}
            </div>
            <button onClick={() => { window.location.href = props.data.github }}>
                GitHub
            </button>
        </div>
    )
}
export default TeamCard