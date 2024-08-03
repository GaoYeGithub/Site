import React from "react"
import Header from "/components/Header.jsx"

import Card from "/components/Card.jsx"
import data from "./data.jsx"
import './App.css'


import './App.css'

export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })        

    return (
        
        <div>
            <Header />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}