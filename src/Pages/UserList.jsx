// src/components/UserList.jsx
import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/users");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container">
            <h2>User List</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="row">
                    {users.map((user) => (
                        <div className="col-md-4" key={user.id}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">{`${user.name.firstname} ${user.name.lastname}`}</h5>
                                    <p className="card-text">Email: {user.email}</p>
                                    <p className="card-text">Phone: {user.phone}</p>
                                    <p className="card-text">Username: {user.username}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserList;