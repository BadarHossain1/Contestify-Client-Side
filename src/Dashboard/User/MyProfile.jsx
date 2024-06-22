import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";


const MyProfile = () => {
    const { updateUserProfile, user } = useContext(AuthContext);
    console.log(user);
    const [contact, setContact] = useState();




    const notify = (success) => {
        if (success) {
            toast.success('Profile Updated', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else {
            toast.error('Failed', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,

            });

        }
    }


    const {
        register,
        handleSubmit,


    } = useForm()



    const onSubmit = (data) => {

        console.log(data.Photo)
        console.log(data.Contact)

        setContact(data.Contact);

        updateUserProfile(data.FullName, data.Photo, data.Contact)
            .then(() => {
                console.log('It worked');
                console.log(data.FullName, data.Photo)

                notify(true);




            })
            .catch(error => {
                console.log(error);
                // notify(false);

            })



    }






    return (
        <div className="hero min-h-[90%] mx-auto bg-gray-200">

            <div className="card shrink-0 w-full max-w-sm shadow-2xl  mx-auto mt-10 pt-8 mb-6 bg-white">
                <p className="text-4xl text-indigo-400  font-bold mx-auto font-playfair-display">Update Profile</p>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-indigo mx-auto mt-5">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-white">

                    <div className="form-control " >
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="FullName" className="input input-bordered bg-white " defaultValue={user?.displayName}  {...register("FullName", { required: false })} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered bg-white disabled:bg-gray-100" disabled value={user?.email || 'Email Unavailable'} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" placeholder="Photo" className="input input-bordered bg-white" defaultValue={user?.photoURL} {...register("Photo", { required: false })} />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contact Number</span>
                        </label>
                        <input type="number" placeholder="Contact Number" className="input input-bordered bg-white disabled:bg-gray-200" disabled={contact} defaultValue={contact} {...register("Contact", { required: false })} />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gradient-to-r from-indigo-500 to-blue-400 text-white ">Update</button>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;