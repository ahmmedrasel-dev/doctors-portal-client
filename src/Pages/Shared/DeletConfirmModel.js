import React from 'react';
import { toast } from 'react-toastify';

const DeletConfirmModel = ({ deletDoctor, refetch, setDeleteDoctor }) => {
  const { name, email } = deletDoctor;

  const handDelete = () => {
    fetch(`https://enigmatic-garden-93442.herokuapp.com/doctor/${email}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.warning(`Doctors: ${name} is Deleted!`)
          setDeleteDoctor(null)
          refetch()
        }
      })

  }

  return (
    <div>
      {/* <!-- Put this part before </body> tag-- > */}
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">Are you want to delete ${name}!</h3>
          <div class="modal-action">
            <button onClick={handDelete} className="btn btn-xs bg-red-600" >Delete</button>
            <label for="delete-modal" class="btn btn-xs">Cancel!</label>
          </div>
        </div>
      </div>
    </div >
  );
};

export default DeletConfirmModel;