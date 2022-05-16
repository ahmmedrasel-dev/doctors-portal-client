import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth)
  const handleBooking = e => {
    e.preventDefault()
    const slots = e.target.slot.value;
    console.log(slots)
    setTreatment(null)
  }
  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg text-secondary text-center">Booking For: {name}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center mt-5'>
            <input type="text" readOnly value={format(date, 'PP')} className="input input-bordered input-primary w-full max-w-xs" />
            <select name="slot" className="select select-bordered w-full max-w-xs">
              {
                slots?.map((eachSlot, index) => <option
                  key={index}
                  value={eachSlot}
                >{eachSlot}</option>)
              }
            </select>

            <input type="text" disabled value={user?.displayName || ''} className="input input-bordered input-primary w-full max-w-xs" />
            <input type="email" disabled value={user?.email || ''} className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="Your Phone Number" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs text-white" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;