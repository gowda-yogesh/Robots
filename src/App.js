// All imports 
import React from "react";
import Search from "./Search.js";
import Cardlist from "./Cardlist";
import Scroll from "./Scroll.js"
import ErrorBoundry from "./ErrorBoundry.js"
// import { robots } from "./member.js";
import "./App.css"


// This is the parent class : 
// So Dectrace it as a CLASS 
// with STATES and pass them as PROPERTIES to Componetns ,
// States in the Constructor can change by Develops dependong on  events and we pass this 
// changed state as Fixed Properties (always fixed before sending to Componets)

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchItem: "",
        }
    }

    //
    componentDidMount() {
        const a = fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(usr => this.setState({ robots: usr }));
        console.log(a);
        // this.setState({ robots: JSON.parse });
    }

    // Fuction that will will be passed as a property of component 
    userSearch = (event) => {

        // Taking the input from the input , calling the fuction 
        // Setting the value to state using the set method -> that is the only way to do .
        console.log(event.target);
        console.log(event.target.value);
        this.setState({ searchItem: event.target.value });
        console.log(this.state.searchItem.toUpperCase());

    }

    // Rendec func Present in React.Component very imp
    // We have to use this 100% when we creat a class using React
    // Else *******
    render() {

        // Filter the robot depending on user serach
        const fliteredItem = this.state.robots.filter((robo) => robo.name.toUpperCase().includes(this.state.searchItem.toUpperCase()));
        console.log(fliteredItem);

        if (this.state.robots.length === 0) {
            return (
                <h1 className="loading"  >LOADING ::: Please Have Patience Dear ...</h1>
            )
        }

        // Elements sent to index.js
        return (
            <div className="letsDecideLater">
                <div>
                    <h1 className="h1">ROBO:.:::.:FRIENDS</h1>
                    <Search className="search" userSearch={this.userSearch} />
                </div>
                <br />
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist roboList={fliteredItem} />
                    </ErrorBoundry>

                </Scroll >
                {/* <div style={{ overflow: "scroll", border: "0px solid black", height: "300px" }}>
                    <Cardlist roboList={fliteredItem} />
                </div> */}
            </div >
        )

    }
}


export default App;
