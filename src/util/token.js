// saves the token to the local storage
export const postToken = (token) => localStorage.setItem('lead:token', JSON.stringify(token));
// get's the token from localstorage if present
export const getToken = () => localStorage.getItem('lead:token') ? `Bearer ${JSON.parse(localStorage.getItem('lead:token'))}` : '';