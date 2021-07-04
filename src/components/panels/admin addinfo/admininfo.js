import React from 'react';
import { Link } from 'react-router-dom';
import { ADD_DATA } from '../../../services/reducers/constant';
import store from '../../../services/reducers/store';
class Admininfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            task: ""

        }
        this.HandleInputChange = this.HandleInputChange.bind(this);
    }

    componentDidMount() {
        document.getElementById('add').onclick = () => {
            store.dispatch({
                type: ADD_DATA,
                payload: {
                    key: store.getState().length,
                    name: this.state["name"],
                    task: this.state["task"]
                }
            })
            this.setState({
                name: "",
                task: ""
            })
            localStorage.setItem('arr', JSON.stringify(store.getState()));
        }
        
    }

    HandleInputChange(e) {

        const { name, value } = e.target;

        this.setState({

            [name]: value
        });
    };

    render() {
        return (
            <div className="card">
                <h2 className="title"> ADD TASK</h2>



                <div className="email-login">
                    <label htmlFor="username">Name:</label>
                    <input type="text" onChange={this.HandleInputChange} value={this.state["name"]} name="name" id="name" /><br />
                    <label htmlFor="task">Task:</label>
                    <input type="text" onChange={this.HandleInputChange} value={this.state["task"]} id="task" name="task" />

                </div>
                <button className="cta-btn" id="add">Add</button><Link to="/task/admin"><button className="cta-btn">Submit</button></Link>


            </div>
        )
    }
}
export default Admininfo;