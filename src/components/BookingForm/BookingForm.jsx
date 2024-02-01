import React, { Fragment, useState } from "react";
import "./BookingForm.css";

function BookingForm({handleSubmition, handleDate, handleTime, handleGuestNumber, handleOccasion, availableTimes, formContent}) {

  const handleFormSubmition = (e) => {
   handleSubmition(e)
  }

  const handleDateChange = (e) =>  {
      handleDate(e)
  }

  const handleTimeChange = (e) =>  {
   handleTime(e)
  }

  const handleGuestNumberChange = (e) =>  {
  handleGuestNumber(e)
  }

  const handleOccasionChange = (e) =>  {
   handleOccasion(e)
  }

  return (
    <Fragment>
    <section className="booking-section">
    <form onSubmit={handleFormSubmition}>

      <label htmlFor="res-date">Choose date</label>
      <input type="date" value={formContent.date} id="res-date" onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={formContent.time} onChange={handleTimeChange}>
      {availableTimes.map(times=> {
        return <option>{times}</option>
      })}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" value={formContent.numberOfGuests} placeholder="1" min="1" max="10" id="guests" onChange={handleGuestNumberChange}/>

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={formContent.occasion} onChange={handleOccasionChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button className="reservation-btn" type="submit"> Make Your reservation</button>

    </form>
    </section>
    </Fragment>
  );
}

export default BookingForm;
