
import { create } from "zustand";

const useContextStatus = create((set)=>({
    status:false,

    setStatusOnOff : ()=>set((state)=>(
        {status:!state.status})),
}))
export default useContextStatus;