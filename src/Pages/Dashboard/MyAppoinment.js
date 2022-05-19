import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const MyAppoinment = () => {
  const [appoinments, setAppoinments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const apiUrl = `https://safe-gorge-75792.herokuapp.com/booking?patient=${user.email}`

    const getData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get(apiUrl, {
          headers: {
            'authorization': `Bearer ${token}`
          }
        });

        setAppoinments(response.data);
      }
      catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          localStorage.removeItem('accessToken');
          navigate('/')
        }
      }
    }

    getData()
  }, [user])
  return (
    <div>
      <h1 className='text-center text-primary text-2xl uppercase'>My Appoinment: {appoinments.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-compact w-3/5 mx-auto mt-3">
          <thead>
            <tr>
              <th></th>
              <th>Treatment</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              appoinments.map((a, index) => <tr key={index}>
                <th>{index + 1}</th>
                <td>{a.teatmentName}</td>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinment;