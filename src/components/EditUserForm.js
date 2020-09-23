import React, { useState, useEffect } from 'react';

const EditUserForm = ({currentUser, updateUser, setModalIsOpen}) => {

    const [user, setUser] = useState(currentUser)
        
    const handleInputChange = (event) => {
        const { name, value } = event.target
        const newUser = { ...user, [name]: value }
        console.log("Hell", user)
        setUser(newUser)
        console.log("checking", newUser)
        console.log("checking2", value)
      }

      useEffect(() => {
          console.log("Hello Check")
      },[])

    return (
        <div className="model_box">
            <div className="model_box_right">
                <h5 className="center">Edit User<span className="btn-floating pulse right cancel-btn" onClick={() => {setModalIsOpen(false)}}><i className="material-icons right">cancel</i> </span></h5>
            </div>

            <div className="row">
                <form onSubmit={(event) => {
                    event.preventDefault()
                    updateUser(user.id, user)
                    console.log("Testing SUbmit", user.id)
                    }} className="col s12">

                    <div className="row">
                        <div className="input-field col s6">                            
                            <input placeholder="Name" type="text" className="validate" name="name" value={user.name} onChange={handleInputChange} />                            
                        </div>
                        <div className="input-field col s6">                            
                            <input placeholder="E-mail" type="email" className="validate" name="email" value={user.email} onChange={handleInputChange} />
                        </div>
                        <div className="input-field col s6">                            
                            <input placeholder="Phone" type="text" className="validate" name="phone" value={user.phone} onChange={handleInputChange} />                            
                        </div>
                        <div className="input-field col s6">                            
                            <input placeholder="Website" type="text" className="validate" name="website" value={user.website} onChange={handleInputChange} />                            
                        </div>
                        <button className="btn waves-effect waves-light modal-submit modal-buttons" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                        <button onClick={() => setModalIsOpen(false)} className="btn waves-effect waves-light modal-cancel modal-buttons" type="submit" name="action">Cancel
                            <i className="material-icons">cancel</i>
                        </button>
                    </div>

                </form>
            </div>
        </div>        
    );
}
 
export default EditUserForm;