import React from 'react';

const ProfilePage = () => {
    return (
        <div>
            <form
                onSubmit=""
                className="bg-white px-20 py-8 rounded-3xl subtle-shadow text-black w-full my-15"
            >

                <h2 className="grid grid-cols-3 col-span-1 gap-3 text-right items-center sm:w-4/5">First Name:
                    <div className="w-5/5 sm:w-4/5 col-span-2 grid self-center pt-4">
                        <input
                        type="text"
                        name="firstName"
                        value=""
                        placeholder="First Name"
                        id=""
                        autoComplete="off"
                        />
                    </div>
                </h2>

                <h2 className="grid grid-cols-3 col-span-1 gap-3 text-right items-center sm:w-4/5">Last Name:
                    <div className="w-5/5 sm:w-4/5 col-span-2 grid self-center pt-4">
                        <input
                        type="text"
                        name="lastname"
                        value=""
                        placeholder="Last Name"
                        id=""
                        autoComplete="off"
                        />
                    </div>
                </h2>

                <h2 className="grid grid-cols-3 col-span-1 gap-3 text-right items-center sm:w-4/5">Email:
                    <div className="w-5/5 sm:w-4/5 col-span-2 grid self-center pt-4">
                        <input
                        type="text"
                        name="email"
                        value=""
                        placeholder="Email"
                        id=""
                        autoComplete="off"
                        />
                    </div>
                </h2>
                
                <h2 className="text-left text-lg font-semibold py-1">Change your Password :</h2>

                <h2 className="grid grid-cols-3 col-span-1 gap-3 text-right items-center sm:w-4/5">Current Password:
                    <div className="w-5/5 sm:w-4/5 col-span-2 grid self-center pt-4">
                        <input
                        type="password"
                        name="password"
                        value=""
                        placeholder="Current Password"
                        id=""
                        autoComplete="off"
                        />
                    </div>
                </h2>
                <h2 className="grid grid-cols-3 col-span-1 gap-3 text-right items-center sm:w-4/5">New Password:
                    <div className="w-5/5 sm:w-4/5 col-span-2 grid self-center pt-4">
                        <input
                        type="password"
                        name="password"
                        value=""
                        placeholder="New Password"
                        id=""
                        autoComplete="off"
                        />
                    </div>
                </h2>
                <div className="grid justify-center w-11/12">
                    <button 
                        type="submit"
                        className="btn btn-primary subtle-shadow w-40 py-3 my-6 font-medium tracking-widest text-white focus:outline-none hover:bg-gray-900 hover:shadow-none"
                    >
                    {" "}
                    Update
                    </button> 
                </div>
            </form>
        </div>
    )
}

export default ProfilePage;
