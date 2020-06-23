import React from 'react'
import ListDestinations from './ListDestinations'


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            destinations: [],
            currentDestination : {
                text: '',
                key: ''
            }
        }
        //bind the functions to the context of the App component
        this.handleInput=this.handleInput.bind(this);
        this.addDestination=this.addDestination.bind(this);
    }
    //handle destinations added in the input field 
    handleInput(e){
        this.setState({
            currentDestination : {
                text: e.target.value,
                key: Date.now()
            }
        })

    }
    addDestination(e){
        //prevent page from refreshing when add destination button is clicked
        e.preventDefault();
        const newDestination = this.state.currentDestination;
        if(newDestination.text !== ""){
            //create new variable to combine newDestination and grab all the contents of destinations
            const updatedDestinations=[...this.state.destinations,newDestination];
            this.setState({
                destinations : updatedDestinations,
                currentDestination : {
                    key : '',
                    text: '' //reset entire currentDestination fields to empty values
                }

            })
        }


    }


    render(){
        return(<div>
            <form onSubmit={this.addDestination}>
                <input 
                    value={this.state.currentDestination.text}
                    placeholder ="Enter destination visited"
                    onChange = {this.handleInput}
                    />
                    
                    <button type="submit">Add destination</button>

            </form>
            <p>Destinations Covered</p>
            <ListDestinations 
            destinations = {this.state.destinations} />
        </div>)
    }

}



export default App;