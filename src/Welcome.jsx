import React , {Component} from 'react'
class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    render() {
        return(
            <>
                <h1>Welcome to Class Components</h1>
                <h2>This is React Enthusiast</h2>
                <h1>{this.state.date.toLocaleTimeString()}</h1>

            </>
        )
    }
}
export default Welcome;