import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiService from '../services/api';

function UserView() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await apiService.getUser(id);
        setUser(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch user details. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Loading user details...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!user) {
    return <div className="alert alert-danger">User not found.</div>;
  }

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>City:</strong> {user.city}</p>
      
      <div style={{ marginTop: '20px' }}>
        <Link to={`/edit/${user._id}`} className="btn btn-success">
          Edit User
        </Link>
        <Link to="/" className="btn btn-secondary" style={{ marginLeft: '10px' }}>
          Back to List
        </Link>
      </div>
    </div>
  );
}

export default UserView;