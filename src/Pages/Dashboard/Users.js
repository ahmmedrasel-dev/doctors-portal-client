import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const Users = () => {

  const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://enigmatic-garden-93442.herokuapp.com/users`, {
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
      <h1 className='text-center text-primary text-2xl uppercase'>All Users: {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-compact w-4/5 mx-auto px-4 mt-4">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>User Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => <User
                key={user._id}
                user={user}
                refetch={refetch}
              ></User>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;