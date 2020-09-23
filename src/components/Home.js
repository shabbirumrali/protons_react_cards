import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Modal from 'react-modal'
import EditUserForm from './EditUserForm';
import Loader from './Loader';

Modal.setAppElement('#root')
const Home = () => {
    const [users, setUsers] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [editing, setEditing] = useState(false)
    const [like, setLike] = useState([])
    
    const initialFormState = {
        id: null, 
        name: '', 
        email: '', 
        phone: '', 
        website: ''
    }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res)
                setUsers(res.data.slice(0, 10))
            })
    }, [])

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    const editRow = (user) => { 
        setModalIsOpen(true)       
        setEditing(true)
        
        setCurrentUser( user)
    }

    const updateUser = (id, updatedUser) => {
        setModalIsOpen(false)
        setEditing(false)
      
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
      }
    
    const handleLike = (id) => {
        const isLIcked = like.includes(id)
        setLike(isLIcked ? like.filter(idx => id !== idx) : [...like, id])    

        console.log(like)
    }
    
    const userList = users.length ? (
        users.map(user => {
            return (            
                <div className="col s12 m3">
                <div className="card checking" key={user.id}>                            
                    <div className="card-content">
                        <img src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} />
                        <p className="user_name">{user.name}</p>                                                                
                        <p className="user_details"><i className="tiny material-icons">email</i> {user.email}</p>
                        <p className="user_details"><i className="tiny material-icons">phone</i> {user.phone}</p>
                        <p className="user_details"><i className="tiny material-icons">web</i> {user.website}</p>
                    </div>
                    <div className="card-action center">
                        <div class="row">                                
                            <div class="col s4">
                                <span className="like-icon icons" onClick={()=> {handleLike(user.id)}} ><i className={like.includes(user.id) ? 'material-icons red-text' : 'material-icons'} >favorite</i></span>
                            </div>
                            <div class="col s4">
                                <span className="edit-icon icons" onClick={() => {editRow(user)}} ><i className="material-icons">edit</i></span>
                            </div>
                            <div class="col s4">
                                <span className="delete-icon icons" onClick={() => {deleteUser(user.id)}} ><i className="material-icons">delete</i></span>
                            </div>
                        </div>                                                                                                
                    </div>
                </div>
            </div>    
            )
        })
    ) : (
        <Loader />        
    )
    return (
        <div className="row">
            <div className="col s12">
                <div className="row">
                    {userList}            
                    <Modal className="modal-box-con" isOpen={modalIsOpen} shouldCloseOnOverlayClick={true} onRequestClose={() => setModalIsOpen(false)} >                        
                            <EditUserForm 
                                setModalIsOpen={setModalIsOpen} 
                                setEditing={setEditing} 
                                currentUser={currentUser} 
                                updateUser={updateUser} 
                                />
                    </Modal>
                </div>
            </div>
        </div>
    );
}
 
export default Home;