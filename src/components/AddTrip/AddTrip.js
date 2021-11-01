import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Addtrip.css'

const AddTrip = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    axios.post('https://stormy-ridge-43208.herokuapp.com/tours', data)
    .then(res => {
        if(res.data.insertedId){
            alert('Added Successfully')
            console.log(res.data);
           reset()
        }
    })
   console.log(data);
   reset()
  }
    return (
        <div className='form-div'>
            <form className='bg-dark' onSubmit={handleSubmit(onSubmit)}>
                <h4 className='text-info pb-3 '>Add New Trip</h4>
      <input placeholder='Trip Name' {...register("name")} />
      <br />
      <input  placeholder='Location' {...register("country")} />
      <br />
      <input  placeholder='Cost' type="number" {...register("cost")} />
      <br />
      <input  placeholder='Image Url' type="text" {...register("img")} />
      <br />
      <input  placeholder='Time' type="text" {...register("time")} />
      <br />
      <textarea  placeholder='Write something about trip' type="text" {...register("about")} />
      <br />
      <input className="bg-info text-dark"  type="submit" />
    </form>
        </div>
    );
};

export default AddTrip;