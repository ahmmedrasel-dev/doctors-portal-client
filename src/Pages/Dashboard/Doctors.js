import React from 'react';

const Doctors = ({ doctor, refetch, setDeleteDoctor }) => {
  const { name, email, speciality, img } = doctor;

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
      <td>
        <label for="delete-modal" onClick={() => setDeleteDoctor(doctor)} className="btn btn-xs bg-red-600">Delete</label>
      </td>
    </tr>
  );
};

export default Doctors;