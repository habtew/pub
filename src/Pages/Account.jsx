import React, { useState, useEffect } from 'react';
import { getUserDetails, updateUser } from '../api/fakeStoreApi';

function Account() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editUser, setEditUser] = useState({
    name: '',
    email: '',
    // ... other editable fields
  });

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserDetails();
      setUser(data);
      setEditUser(data);
    };
    fetchUser();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditUser(user);
  };

  const handleChange = (event) => {
    setEditUser({ ...editUser, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUser(editUser);
    setIsEditing(false);
    setUser(editUser);
  };

  return (
    <div>
      <h2>Account</h2>
      {user ? (
        <div>
          <h3>Profile Information</h3>
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={editUser.name} onChange={handleChange} />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={editUser.email} onChange={handleChange} />
              {/* Add other editable fields as needed */}
              <button type="submit">Save</button>
              <button type="button" onClick={handleCancelEdit}>Cancel</button>
            </form>
          ) : (
            <>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              {/* Display other user details */}
              <button onClick={handleEditClick}>Edit Profile</button>
            </>
          )}
          <h3>Order History</h3>
          {/* Display order history, if available */}
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}

export default Account;