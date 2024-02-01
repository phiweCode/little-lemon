import React, {Fragment, useState} from 'react'
import BookingForm from '../components/BookingForm/BookingForm'

function BookingPage() {

  const [formContent, setFormContent] = useState({
    date: Date(),
    time: Date(),
    numberOfGuests: 0,
    occasion: "",
  })

  const [availableTimes, setAvailableTimes] = useState([
    "17:00", "18:00", "19:00","20:00", "21:00","22:00"
  ])

  const handleSubmition = (e) => {
    e.preventDefault()
    console.log(formContent)
  }

  const handleDate = (e) =>  {
    e.preventDefault()
    setFormContent((prev)=> {
      return {
      ...prev,
      date: e.target.value}
    })
  }

  const handleTime = (e) =>  {
    e.preventDefault()
    setFormContent((prev)=> {
      return {
      ...prev,
      time: e.target.value}
    })
  }

  const handleGuestNumber = (e) =>  {
    e.preventDefault()
    setFormContent((prev)=> {
      return {
      ...prev,
      numberOfGuests: e.target.value}
    })
  }

  const handleOccasion = (e) =>  {
    e.preventDefault()
    setFormContent((prev)=> {
      return {
      ...prev,
      occasion: e.target.value}
    })
  }


  return (
    <Fragment>
        <BookingForm
          handleSubmition = {handleSubmition}
          handleDate = {handleDate}
          handleTime = {handleTime}
          handleGuestNumber = { handleGuestNumber}
          handleOccasion = {handleOccasion}
          availableTimes = {availableTimes}
          formContent = {formContent}
        />
    </Fragment>
  )
}

export default BookingPage
