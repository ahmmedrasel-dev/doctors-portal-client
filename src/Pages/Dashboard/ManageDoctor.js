import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeletConfirmModel from '../Shared/DeletConfirmModel';
import Loading from '../Shared/Loading';
import Doctors from './Doctors';

const ManageDoctor = () => {
  const [deletDoctor, setDeleteDoctor] = useState(null);
  const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch(`https://doctors-portal-server2.herokuapp.com/doctors`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    }
  }).then(res => res.json()))

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <h1 className='text-center text-primary text-2xl uppercase'>All Doctors: {doctors.length}</h1>

      <div className="overflow-x-auto">
        <table className="table table-compact w-4/5 mx-auto px-4 mt-4">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Photo</th>
              <th>Doctors Email</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              doctors.map(doctor => <Doctors
                key={doctor._id}
                doctor={doctor}
                refetch={refetch}
                setDeleteDoctor={setDeleteDoctor}
              ></Doctors>)
            }
          </tbody>
        </table>
      </div>

      {deletDoctor && <DeletConfirmModel
        deletDoctor={deletDoctor}
        refetch={refetch}
        setDeleteDoctor={setDeleteDoctor}
      ></DeletConfirmModel>}
    </div>
  );
};

export default ManageDoctor;