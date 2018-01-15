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

                data:findresponse.value['joke'].replace(/&quot;/g,'"')
            })
        })
    }

    render()
    {
        var text = this.state.data;

        return(
            <div>
                <h1>{text}</h1>
            </div>
        )
    }
}

