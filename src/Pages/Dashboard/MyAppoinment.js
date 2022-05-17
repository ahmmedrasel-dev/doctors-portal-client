import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppoinment = () => {
  const [appoinments, setAppoinments] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const apiUrl = `http://localhost:5000/booking?patient=${user.email}`
    const getData = async () => {
      const { data } = await axios.get(apiUrl);
      setAppoinments(data);
    }
    getData()
  }, [])
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
              appoinments.map((a, index) => <tr>
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