import React, { useState } from 'react';

const Admin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    setSuccess(true)
                }

            })


        e.preventDefault()
    }

    return (
        <div>
            <h1 className="fw-bold text-center my-5">Make an admin</h1>
            {/* admin form */}

            <div className="admin text-center">
                {success && alert('Made Admin Successfully')}
                <form onSubmit={handleAdminSubmit}>
                    <input placeholder="Email" onBlur={handleOnBlur} type="email" name="email" id="" />
                    <button type="submit" className="btn btn-primary ms-2">Make Admin</button>
                </form>

            </div>

        </div>
    );
};

export default Admin;