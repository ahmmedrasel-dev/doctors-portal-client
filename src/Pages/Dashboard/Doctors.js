import React from 'react';
import { toast } from 'react-toastify';

const Doctors = ({ doctor, refetch }) => {
  const { name, email, speciality, img } = doctor;
  const handDelete = () => {
    fetch(`https://safe-gorge-75792.herokuapp.com/doctor/${email}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.warning(`Doctors: ${name} is Deleted!`)
          refetch()
        }
      })

  }
  return (
    <tr>
      <th>1</th>
      <td>{name}</td>
      <td><div className="avatar">
        <div className="w-16 rounded">
          <img src={img} alt='' />
        </div>
      </div></td>
      <td>{email}</td>
      <td>{speciality}</td>
      <td><button className="btn btn-xs bg-red-600" onClick={handDelete}>Delete</button></td>
    </tr>
  );
};

export default Doctors;