import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AddDoctors = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const { data: services } = useQuery('/services', () => fetch(`https://enigmatic-garden-93442.herokuapp.com/services`).then(res => res.json()))

  const imgStorageKey = `71c3b2215e8817f9c1afc8f8d7c617f4`;
  const onSubmit = async data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            img: img
          }

          fetch('https://enigmatic-garden-93442.herokuapp.com/doctor', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor),
          })
            .then(res => res.json())
            .then(data => {

              if (data.success) {
                toast.success(data.message);
                reset();
              }
              else {
                toast.success('Fail to add the doctor.')
              }
            })

        }
      })
  }



  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="card w-1/3 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className='text-center text-primary text-2xl uppercase'>Add Doctors</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: 'Name is Required!'
                  }
                })}
              />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  pattern: {
                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: 'Invalid Email!'
                  },
                  required: {
                    value: true,
                    message: 'Email is Required!'
                  }
                })}
              />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
              </label>
            </div>

            <div className="form-control w-full max-w-xs mb-6">
              <label className="label">
                <span className="label-text">Speciality</span>
              </label>
              <select {...register('speciality')}
                className="select select-bordered w-full max-w-xs">
                {
                  services?.map(service => <option
                    value={service.name}
                    key={service._id}
                  >{service.name}</option>)
                }
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                className="input input-bordered w-full max-w-xs"
                {...register("image", {
                  required: {
                    value: true,
                    message: 'Image is Required!'
                  }
                })}
              />
              <label className="label">
                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
              </label>
            </div>

            <input
              type="submit"
              className="btn btn-accent uppercase w-full"
              value="Save"
            />

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctors;