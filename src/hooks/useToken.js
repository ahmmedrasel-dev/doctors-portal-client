import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
  const [token, setToken] = useState('');
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email }
    if (email) {
      const putUser = async () => {
        const { data } = await axios.put(`http://localhost:5000/user/${email}`, currentUser);
        const token = data.accessToken;
        localStorage.setItem('accessToken', token)
        setToken(token)
      }
      putUser();
    }

  }, [user])
  return [token]
}

export default useToken