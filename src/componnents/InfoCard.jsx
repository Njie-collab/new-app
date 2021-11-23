import React, {useContext, useState ,useEffect} from 'react'

import MyContext from '../context/MyContext'

function InfoCard() {
const context =useContext(MyContext)

  
  const [Sub,setSub]=useState()

  const handleSubmit=(e)=>{
    e.preventDefault()
    setSub(e.target.value)
  }
 
  useEffect(() => {
    
    
  },[Sub])

    return (
      <div>
        <form>
          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" />
          <label name="Password">Password</label>
          <input type="password" />
          <label>Submit</label>
          <button onClick={(e)=>handleSubmit(e)} type="submit">Submit</button> 
        </form>
      </div>
    );
}

export default InfoCard
