import React from "react"

export default function Card(props) {
    let badgeText
    if (props.item.Progress === 0) {
        badgeText = "In Progress"
    } else if (props.item.Progress === 1) {
        badgeText = "Working"
    }

    return (
        <main>
            <div className="grid-container">
                <section className="card">
                    {badgeText && <div className="card--badge">{badgeText}</div>}
                    <img src={`/images/${props.item.coverImg}`} className="card--image" />
                    <p className="card--title">{props.item.title}</p>
                    <p className="card--link"><span className="bold"><a href={props.item.link}>Link</a></span> </p>
                </section>
            </div>
        </main>
    )
}