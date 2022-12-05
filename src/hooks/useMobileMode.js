import { useEffect, useState } from "react"

const useMobileMode = ()=>{
    const [mobileMode,setMobileMode] = useState(window.innerWidth < 720);
    const [screenWidth,setScreenWidth] = useState();

    const handleResize = ()=>{
        if (window.innerWidth < 720) {
            setMobileMode(true)
        } else {
            setMobileMode(false)
        }
      
    }
    useEffect(()=>{
        window.addEventListener("resize", handleResize)
    })

    return mobileMode;
    
}

export default useMobileMode;