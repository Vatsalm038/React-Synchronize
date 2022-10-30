import React, { useState } from 'react'

 function States1() {
  
  const [add,setadd] = useState(1);
  const [ setcolor,usesetcolor] = useState("#000")
  function Increment (){
    setadd (add + 1)
  }
  function changecolor (){
    usesetcolor ("White")
  }
  return(<>
  <p>
    {add}
    <button onClick= {Increment}>ADD</button>
  </p>
  <p style= {{color:setcolor}}>{add}
    <button onClick={changecolor}>Change</button>
  </p>
  </>

  )
}
export default States1;
