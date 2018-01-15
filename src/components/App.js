import {Component} from 'react'
import {First} from './First'
import {JokeApi} from './JokeApi'
import styles from './styles/styling.css';


export class App extends Component {
    render() {
        return (
            <div className="app">
                <First />
                <JokeApi />
            </div>
        )
    }
}