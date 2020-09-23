import React, { Component } from 'react';
import axios from 'axios'
import Modal from 'react-modal'

class Home extends Component {  
    state = {
        users: [ ],
        modalIsOpen: false       
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res)
                this.setState({
                    users: res.data.slice(0, 10)
                })
            })
    }
    deleteUser = (id) => {
        let users = this.state.users.filter(user => {
            return  user.id !== id
        })
        this.setState({
            users
        })
    }
    handleModelIsOpen = () => {
        let modalIsOpen = this.setState({
            modalIsOpen: !modalIsOpen
        })                
    }

    render() { 
        const { users } = this.state        
        const userList = users.length ? (
            users.map(user => {
                return (                                                            
                        <div className="card" key={user.id}>
                            <div className="card-image">
                                <img src="" alt="" />
                            </div>
                            <div className="card-content">
                                <span className="card-title">{user.name}</span>                                                                
                                <p><i className="tiny material-icons">email</i> {user.email}</p>
                                <p><i className="tiny material-icons">phone</i> {user.phone}</p>
                                <p><i className="tiny material-icons">web</i> {user.website}</p>
                            </div>
                            <div className="card-action">
                            <div class="row">                                
                                <div class="col s4">
                                    <span className=""><i className="material-icons">favorite_border</i></span>
                                </div>
                                <div class="col s4">
                                    <span className="" onClick={() => {this.handleModelIsOpen(true)}}><i className="material-icons">edit</i></span>
                                </div>
                                <div class="col s4">
                                    <span style={{cursor: "pointer"}} onClick={() => {this.deleteUser(user.id)}} ><i className="material-icons red-text">delete</i></span>
                                </div>
                            </div>                                                                                                
                            </div>
                        </div>                    
                )
            })
        ) : (
            <div className="center">No Post Yet</div>
        )
        return (
            <div>
                <div className="row">
                    <div className="col s4">
                        {userList}     
                        <Modal isOpen={this.handleModelIsOpen}>
                            <h2> Writern Somthing fucked</h2>
                            <button onClick={}></button>
                        </Modal>               
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;