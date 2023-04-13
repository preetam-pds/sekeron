const isEmailValid = (email: string) => {
  const regX = new RegExp(
    /^[a-zA-Z0-9_]+(\.[_a-zA-Z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/,
  ).test(email)
  return regX
}

export const validations = { isEmailValid }
