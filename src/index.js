import React from 'react'
import {render} from 'react-dom'
import {App} from './components/App'
import {First} from './components/First'
import {JokeApi} from './components/JokeApi'

window.React = React

render(
    <div>
            <JokeApi />
    </div>,
    document.getElementById('react-container')
)