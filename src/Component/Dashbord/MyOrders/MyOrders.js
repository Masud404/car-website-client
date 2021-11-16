import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from './../../../hooks/useAuth/useAuth';


const MyOrders = () => {
    const { user } = useAuth();
    const id = user.displayName;
    const [list, setList] = useState([])

    useEffect(() => {
        const url = `https://salty-temple-68876.herokuapp.com/orders/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setList(data))
    }, [])

    // delete button
    const handleDelete = name => {
        const url = `https://salty-temple-68876.herokuapp.com/orders/${name}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = list.filter(list => list.name !== name);
                    setList(remaining);
                }

            })
    }

    return (
        // my order section
        <div className="container mx-auto my-5">
            <h1 className="text-center fw-bold">My Order</h1>
            {
                list.map(list =>

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Purchase</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {list.name}</td>
                                <td>{list.email}</td>
                                <td>{list.phone}</td>
                                <td>{list.address}</td>
                                <td className="text-danger">{list.order
                                }</td>
                                <td><button onClick={() => handleDelete(list.name)} className="btn btn-warning text-light fw-bold">Cancle</button></td>
                            </tr>
                        </tbody>
                    </Table>

                )
            }

        </div>
    );
};

export default MyOrders;