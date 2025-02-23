
// USER LOGIN
export async function login(authDetail){
    const requestOptions = {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(authDetail),
      };
  
      const response = await fetch(`${import.meta.env.VITE_APP_HOST}/login`, requestOptions);
      if(!response.ok){
        throw {message: response.statusText, status: response.statusText}
    }
      const data = await response.json();
      // console.log(data);

      if(data.accessToken){
        sessionStorage.setItem('token', JSON.stringify(data.accessToken))
        sessionStorage.setItem('cbid', JSON.stringify(data.user.id))
      }

      return data
}


// USER REGISTRATION
export async function register(authDetail){
    const requestOptions = {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(authDetail),
    }

    const response = await fetch(`${import.meta.env.VITE_APP_HOST}/register`, requestOptions);
    if(!response.ok){
      throw {message: response.statusText, status: response.statusText}
  }

    const data = await response.json();
    // console.log(data);

    if(data.accessToken){
        sessionStorage.setItem('token', JSON.stringify(data.accessToken))
        sessionStorage.setItem('cbid', JSON.stringify(data.user.id))
      }

    return data

}


// USER LOGOUT
export function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}
