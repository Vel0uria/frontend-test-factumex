import { useState } from "react";

const initialState = {
    place: "Login",
    user: null
} as any;

interface ILoged {
    success: boolean;
  }

  const initialLogged: ILoged = {
    success: false,
  };

  const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const [beforeLocation, setBeforeLocation] = useState<string>();
    const user = localStorage.getItem("user");
    const [logged, setLogged] = useState<ILoged>(
        user ? JSON.parse(user) : JSON.stringify(initialLogged)
      );

      const handleLogged = (data: ILoged) => {
        setLogged(data);
      };

      return{
        state, beforeLocation, setBeforeLocation, logged, handleLogged
      }
  }

  export default useInitialState
