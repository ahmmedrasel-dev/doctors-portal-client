import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const MyAppoinment = () => {
  const [appoinments, setAppoinments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const apiUrl = `https://doctors-portal-server2.herokuapp.com/booking?patient=${user.email}`
    if (user) {
      fetch(apiUrl, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/')
          }
          return res.json()
        })
        .then(data => setAppoinments(data))
    }
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
              <th>Payment</th>
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
                <td>
                  {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-sm btn-success'>Pay</button></Link>}
                  {(a.price && a.paid) && <div>
                    <p className='text-success'>Paid</p>
                    <p>Transaction Id: <span className='text-orange-500'>{a.transactionId}</span></p>
                  </div>}
                </td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinment;