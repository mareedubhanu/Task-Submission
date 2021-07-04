import React, { useCallback } from 'react';


class Costumerage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: ""
        }
        this.HandleInputChange = this.HandleInputChange.bind(this);
        this.HandlerClick = this.HandlerClick.bind(this);
    }

    HandlerClick() {
        if (this.state["name"].length > 2 && parseInt(this.state["age"]) >= 18 && parseInt(this.state["age"]) < 60) {
            localStorage.setItem('name', this.state["name"]);
            localStorage.setItem('age', this.state["age"]);
            window.location.assign('/task/customer');
        }
        else {
            document.getElementById('wrong').innerHTML = "* please enter the valid name and age must be between 18-60"
        }
    }


    HandleInputChange(e) {

        const { name, value } = e.target;

        this.setState({

            [name]: value
        });
    };




    render() {

        //-------------------------------------------------------return input--------------------------------------------

        return (

            <div className="card">
                <h2 className="title"> Customer info</h2>



                <div className="email-login">
                    <label htmlFor="username">name:</label>
                    <input type="text" onChange={this.HandleInputChange} value={this.state["name"]} name="name" id="username" /><br />
                    <label htmlFor="age">Age:</label>
                    <input type="text" onChange={this.HandleInputChange} value={this.state["age"]} id="age" name="age" />

                </div>
                <p id="wrong" style={{color:"red"}}></p>
                <button className="cta-btn" id="Costumerage" onClick={this.HandlerClick}>Submit</button>



            </div>

        )




    }
}
export default Costumerage;