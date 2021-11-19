import React, {useContext, useState ,useEffect} from 'react'

import MyContext from '../context/MyContext'

function InfoCard() {
const context =useContext(MyContext)

  
  const [Sub,setSub]=useState()

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  const handleDelate=(e)=>{
  setSub(e.target.value)

  }
  useEffect(() => {
    
  },[Sub])

    return (
      <div>
        <form action="" 
        type="submit"
        method="POST" 
        onSubmit={Sub}>
          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" />
          <label htmlFor="Submit"> Submit</label>
          <button onClick={()=>(handleSubmit)} type="submit">Submit</button>
        </form>
      </div>
    );
}

export default InfoCard
