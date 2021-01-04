import React, { useState } from "react";

const AccountDashboard = () => {

    return (
        <div>
            <form
                onSubmit=""
                className="bg-white px-20 py-8 rounded-3xl subtle-shadow text-black w-full my-15"
            >

                <h2 className="text-left items-center font-semibold">Names:
                    <div className="sm:w-4/5 grid self-center pt-4">
                        <input
                        type="text"
                        name="names"
                        value=""
                        placeholder="Ex. Juan Dela Cruz, Maria Dela Cruz..."
                        id=""
                        autoComplete="off"
                        />
                    </div>
                </h2>

                <h2 className="text-left items-center font-semibold">Address:
                    <div className="sm:w-4/5 grid self-center pt-4">
                        <input
                        type="text"
                        name="address"
                        value=""
                        placeholder="Ex. 1121 Pedro Gil Street, Ermita"
                        id=""
                        autoComplete="off"
                        />
                    </div>
                </h2>

                <h2 className="text-left items-center font-semibold">City/Municipality/Province:
                    <div className="sm:w-4/5 grid self-center pt-4">
                        <input
                        type="text"
                        name="city"
                        value=""
                        placeholder="Ex. Manila"
                        id=""
                        autoComplete="off"
                        />
                    </div>
                </h2>

                <h2 className="text-left items-center font-semibold">Source:
                    <div className="sm:w-4/5 grid self-center pt-4">
                        <input
                        type="text"
                        name="sources"
                        value=""
                        placeholder="Name / Social Media Links"
                        id=""
                        autoComplete="off"
                        />
                    </div>
                </h2>

                <h2 className="text-left items-center font-semibold">Remarks:
                    <div className="sm:w-4/5 grid self-center pt-4">
                        <input
                        type="text"
                        name="remarks"
                        value=""
                        placeholder="Notes / Message"
                        id=""
                        autoComplete="off"
                        />
                    </div>
                </h2>

                <div className="grid justify-center w-9/12">
                    <button 
                        type="submit"
                        className="btn btn-primary subtle-shadow w-40 py-3 my-6 font-medium tracking-widest text-white focus:outline-none hover:bg-gray-900 hover:shadow-none"
                    >
                    {" "}
                    Submit
                    </button> 
                </div>
            </form>
        </div>
    )
}

export default AccountDashboard;
