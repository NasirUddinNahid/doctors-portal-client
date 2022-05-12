import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date ,setTreatment}) => {
    const {_id, name, slots } = treatment;
    
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot,name,_id);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div class="modal-box relative">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-secondary">Booking For:{name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center mt-5'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">

                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-secondary text-white w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;