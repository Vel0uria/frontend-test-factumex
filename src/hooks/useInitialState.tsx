import { useState } from "react";

const initialState = {
    user: null
} as any;

interface ILoged {
    success: boolean;
  }

  const initialLogged: ILoged = {
    success: false,
  };

  const successLogged: ILoged = {
    success: true,
  };



  const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const user = localStorage.getItem("USER");
    const [logged, setLogged] = useState<ILoged>(
        user ? successLogged :initialLogged
      );

      const handleLogged = (data: ILoged) => {
        setLogged(data);
      };

      return{
        state, setState, logged, handleLogged, 
      }
  }

  export default useInitialState
