import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Test = () => {
useEffect(()=>{
  axios.get('http://localhost/api/d')
  .then(res=>{
    console.log(res)
  })
  .catch(err=>console.log(err))
})



  const [pointPresident, setPointPresident] = useState([{point: null}])
  const upField = ()=>{
    let field = [...pointPresident]
    setPointPresident([...field,{point: null}])
  }

  const getData = (index,e)=>{
    let field = [...pointPresident]
    field[index].point = e.target.value
    setPointPresident(field)

  }

  const aff = ()=>{
    console.log(pointPresident)
  }
  return (
    <div>
      <h1>TEST MULTI FORM</h1>
      <hr />
      <div>
        <button onClick={upField}> ajouter autre champ </button><br />
    {
      pointPresident.map( (val,index)=>(
        <div>
          <input type="number" onChange={(e)=>getData(index,e)} />
          {/* <button>ACCEPTER</button> */}
        </div>
      ))
    }
      </div>
      <button onClick={aff}>
        AFFICHER
      </button>
    </div>
  )
}

export default Test
