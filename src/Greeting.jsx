import React from 'react';

const date = new Date();
const hours = date.getHours()
let greeting = ''

if (hours < 12) {
    greeting = 'Good morning'
} else if (hours < 18) {
    greeting = 'Good afternoon'
} else {
    greeting = 'Good evening'
}

const fontColor = {
    color: ""
}

if(greeting === 'Good morning') {
    fontColor.color = "green"
} else if (greeting === 'Good afternoon') {
    fontColor.color = "red"
} else {
    fontColor.color = "blue"
}

const Greeting = () => {
    return (
        <h1 className='heading' style={fontColor}>{greeting}</h1>
    )
}

export default Greeting