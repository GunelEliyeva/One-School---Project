import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InputSearch from '../../components/input-search';
import "./index.scss";
import {Link, useParams} from "react-router-dom";


const SectionFour = () => {

    const [teacher, setTeacher] = useState([])
    const {_id}=useParams;
    
    useEffect(() => {
      getData()
    }, [])

    const getData= async()=>{
        let data= await axios.get("http://localhost:8080/teachers")
        setTeacher( await data.data)
    }

    const handleMaxSort=()=>{
      
        axios.get("http://localhost:8080/teachers").then((data) => {
          let sort = data.data.sort((a, b) => Number(a.price) - Number(b.price));
          setTeacher([...sort]);
        });
         
    }
    


    const handleMinSort=()=>{
        axios.get("http://localhost:8080/teachers").then((data)=>{
            let repedsort= data.data.sort((a,b)=> Number(b.price) - Number(a.price))
            setTeacher([...repedsort])
        })
    };

    const handleDelete=async(_id)=>{
      await axios.delete(`http://localhost:8080/teachers/${_id}`).then(()=>axios.get`http://localhost:8080/teachers`).then((data)=>setTeacher(data.data))

    }
    
  return (
    <div className='container'>
<div className="our-teacher">
        <h1>Our Teachers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae
          obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed
          veniam!
        </p>
      </div>
<div className='name-search'>
<InputSearch setTeacher={setTeacher}/> <button onClick={()=>handleMaxSort()}>Max to Min Sort</button> <button onClick={()=>handleMinSort()}>Min to Max Sort</button>
</div>

      <div className='card-box'>
       
        {teacher?.map((element)=>{
            return(
             
                <div className='card'>
                    <Link to={`detail-page/${element._id}`}>
                    <div><img src={element.imgurl}/></div></Link>
                    <h3>{element.name}</h3>
                    <h4>{element.profession}</h4>
                    <h5>${element.price}</h5>
                    <p>{element.about}</p>
                    <button onClick={()=>{handleDelete(element._id)}}>Delete</button>
                </div>
             
            )
        })}

      </div>
    </div>
  )
}

export default SectionFour