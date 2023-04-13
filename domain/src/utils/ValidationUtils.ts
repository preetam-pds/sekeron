import { countryCodeJson } from "./json/CountryCodeJson";

const isEmailValid = () => {
  const regX = new RegExp(
    /^[a-zA-Z0-9_]+(\.[_a-zA-Z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/
  );
  return regX;
};

const isPhoneNumberValid = (countryCode, phoneNumber) => {
  let isPhoneNumberValid = false;
  let phoneNumberLength;
  const selectedCountryCodeData = countryCodeJson.find((item) => item.dial_code === countryCode);

  phoneNumberLength = selectedCountryCodeData?.pLength;
  if (phoneNumber && phoneNumber.length == phoneNumberLength) {
    isPhoneNumberValid = true;
  } else {
    isPhoneNumberValid = false;
  }
  return isPhoneNumberValid;
};

const isUserNameAvailable = (userName) => {
  const listOfUserNames = [
    {
      name: "punya",
    },
    {
      name: "sheetal",
    },
    {
      name: "michael",
    },
    {
      name: "vikas",
    },
  ];
  let isUserNameAvailable = true;
  listOfUserNames.every((item: any) => {
    if (userName === item.name) {
      isUserNameAvailable = false;
      return false;
    }
    return true;
  });
  return isUserNameAvailable;
};

const isFullNameValid = () => {
  const regX = new RegExp(/^[a-zA-Z ]*$/);
  return regX;
};

const isPasswordValid = () => {
  const regx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return regx;
};

const isValidPhoneNumber = () => {
  const regx = /^[0-9]{10}$/;
  return regx;
};
const isValidEmail = (email: string) => {
  const regX = new RegExp(
    /^[a-zA-Z0-9_]+(\.[_a-zA-Z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/
  );
  return regX.test(email);
};

const isMobileNumberValid = (ph: string) => {
  const regX = new RegExp(/^((?!(0))[0-9]{10})$/);
  return regX.test(ph);
};

const isNameValid = (name: any) => {
  const regX = new RegExp(/^[a-zA-Z ]*$/);
  return regX.test(name);
};
const isEmpty = (str: string) => {
  return str.length === 0 ? true : false;
};
const isOtpValid = (otp: any) => {
  const regX = new RegExp(/^\d*[]?\d*$/);
  return regX.test(otp);
};

const ValidationUtils = {
  isEmailValid,
  isPasswordValid,
  isPhoneNumberValid,
  isFullNameValid,
  isUserNameAvailable,
  isValidPhoneNumber,
  isValidEmail,
  isMobileNumberValid,
  isNameValid,
  isEmpty,
  isOtpValid,
};

export default ValidationUtils;
