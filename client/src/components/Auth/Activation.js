import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  showErrMsg,
  showSuccessMsg,
} from "../utils/Notification/notificationMsg";

function ActivationEmail() {
  const { activation_token } = useParams();

  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(
            "http://localhost:5000/user/activation",
            {
              activation_token,
            }
          );
          setSuccess(res.data.msg);
        } catch (err) {
          err.response.data.msg && setErr(err.response.data.msg);
        }
      };
      activationEmail();
    }
  }, [activation_token]);

  return (
    <div className="flex flex-col">
      <div className="bg-white px-20 py-8 rounded-3xl subtle-shadow text-black w-full my-15">
        <h1 className="mb-8 text-2xl text-center font-bold capitalize">
          {err && showErrMsg(err)}
          {success && showSuccessMsg(success)}
        </h1>
      </div>
    </div>
  );
}

export default ActivationEmail;
