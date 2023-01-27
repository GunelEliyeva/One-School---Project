import axios from 'axios'
import React, { useEffect, useState } from 'react'

const InputSearch = ({setTeacher}) => {
    const [name, setName] = useState([])

    useEffect(() => {
      getData()
    }, [])

    const getData= async()=>{
        let data= await axios.get("http://localhost:8080/teachers")
        setName( await data.data)
    }

    const handleSearch = async(e)=>{
        let newData = name.filter((el)=>el.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setTeacher(newData);
    }
  return (
    <div>
<input type="text" placeholder="Search...." onChange={(e)=>handleSearch(e)}/>
    </div>
  )
}

export default InputSearch