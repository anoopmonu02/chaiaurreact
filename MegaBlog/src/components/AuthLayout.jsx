import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



/* file ka name aur method ka name alag ho sakta hai */
/* authentication ke bagair bhi ho jayega sirf authStatus ko check karke ho jayega */

export default function Protected({children, authentication=true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    
    useEffect(() =>{
        if (authentication && authStatus!== authentication) {
            navigate("/login")
        } else if (!authentication && authStatus!== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return (
    loader? <h1>Loading...</h1> :<>{children}</>
  )
}
