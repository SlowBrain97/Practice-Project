import { create } from "zustand";
import {persist} from "zustand/middleware";




const useLoginContent = create(
    persist((set) => ({
    currentUser:null,
    isLogin:false,
    setCurrentUser: (currentUser)=> set({currentUser:currentUser,isLogin:!!currentUser}),
    logout : () => {
        set({currentUser:null, isLogin:false})
        localStorage.removeItem("current-user");
        localStorage.removeItem("token");
    }
}),
    {
        name:"current-user",
    }
),
    

)

export default useLoginContent;