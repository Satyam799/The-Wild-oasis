import { useEffect, useRef } from "react"

function useOpacity(close,listenCapturing = true) {
    const ref=useRef()

    useEffect(function(){
        function handelsubmit(e){
        if(ref.current && !ref.current.contains(e.target))
        close()
        }
        document.addEventListener('click',handelsubmit,listenCapturing)
    
        return ()=>document.removeEventListener('click',handelsubmit,listenCapturing)
      },[close,listenCapturing])
   return ref
}

export default useOpacity
