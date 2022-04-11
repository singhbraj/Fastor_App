import { TYPE } from "./type";
import axios from "axios";

export const getOtp = (databody) => {
  const params = {
    phone: `${databody.mobileNo}`,
    dial_code: "+91",
  };

  const data = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");

  

  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data,
    url: "https://staging.fastor.in/v1/pwa/user/register",
  };

  const request = axios(options).then((response) => response.data);
  return {
    type: TYPE.GETOTP,
    payload: request,
  };
};

export const verifyOtp = (databody) => {
  const params = {
    phone: `${databody.mobileNo}`,
    otp: `${databody.otp}`,
    dial_code: "+91",
  };

  const data = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");

  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data,
    url: "https://staging.fastor.in/v1/pwa/user/login",
  };

  const request = axios(options).then((response) => response.data);
  return {
    type: TYPE.GETOTP,
    payload: request,
  };
};
