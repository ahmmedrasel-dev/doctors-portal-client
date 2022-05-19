import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
  const [token, setToken] = useState('');
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email }
    if (email) {
      const putUser = async () => {
        const { data } = await axios.put(`https://safe-gorge-75792.herokuapp.com/user/${email}`, currentUser);
        const accessToken = data.token;
        localStorage.setItem('accessToken', accessToken)
        setToken(accessToken)
      }
      putUser();
    }

  }, [user])
  return [token]
}

export default useToken