export const getLocalStorageItem = (key: string) => {
  // let data: any
  // if (localStorage.getItem(key)) {
  //   data = JSON.parse(localStorage.getItem(key) || '{}')
  // }
  // return data !== undefined && data !== null && data !== 'undefined'
  //   ? data
  //   : undefined
  return localStorage.getItem(key)
}

export const setLocalStorageItem = (key: string, data: any) => {
  localStorage.setItem(key, data)
}

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key)
}
