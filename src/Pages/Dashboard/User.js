import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://enigmatic-garden-93442.herokuapp.com/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 403) {
          toast.error('Fail to Make Admin!')
        }
        return res.json()
      })
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Successfully Make Admin')
          refetch()
        }
      })
  }
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>{role !== 'admin' && <button className="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td>
      <td><button className="btn btn-xs bg-red-600">Delete</button></td>
    </tr>
  );
};

export default User;