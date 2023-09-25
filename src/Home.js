import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    // Fetch the user details first to get the user ID
    axios.get('http://localhost:3000/userDetails')
      .then((response) => {
        if (response.data && response.data.length > 0) {
          const userId = response.data[response.data.length - 1]._id          
          // Fetch user details by ID
          axios.get(`http://localhost:3000/userDetails/${userId}`)
            .then((userResponse) => {
              setUserDetails(userResponse.data); // Set the user details in state
            })
            .catch((error) => {
              console.error('Error fetching user details by ID:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  return (
    <div >
      <h2>Welcome to the Home Screen {userDetails.email}</h2>
      <p>Email: {userDetails.email}</p>
      <p>Password: {userDetails.password}</p>
    </div>
  );
}

export default Home;
