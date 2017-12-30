import React, {Component} from 'react';

export class JokeApi extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch('http://api.icndb.com/jokes/random/').
            then((Response) => Response.json()).
        then((findresponse) => {
            this.setState({
                data:findresponse.value['joke']
            })
        })
    }

    render()
    {
        return(
            <div>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}

