import { format } from 'date-fns';
import React from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {

  const { _id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formateDate = format(date, 'PP');

  const handleBooking = e => {
    e.preventDefault()
    const slot = e.target.slot.value;
    const booking = {
      teatmentId: _id,
      teatmentName: name,
      date: formateDate,
      slot,
      patientName: user.displayName,
      patiendEmail: user.email,
      phone: e.target.phone.value
    };

    try {
      const postBooking = async () => {
        const { data } = await axios.post('http://localhost:5000/booking', booking);
        if (data.success) {
          toast.success(data.message)
        } else {
          toast.error(data.message)
        }
      }
      postBooking();
    }
    catch (error) {
      console.log(error.message)
    }

    refetch()
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
            <input type="text" name='phone' placeholder="Your Phone Number" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs text-white" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;