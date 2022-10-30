import React, { useState } from 'react'

 function Formsvat() {

    const [name,setname] = useState();
    const [password,setpassword]= useState();

    function handleUsername(e){
        setname(e.target.value);
    }

    function handlePassword(e){
        setpassword(e.target.value);
    }

    //function Show(){
      //  alert(name);
   // }

    function Show(){
        alert("Your username is "+name +" password: "+password);
    }
      return (<>

       <div className="form">
        Name <input type="text" name="username" onChange={handleUsername}/><br></br>
        Password <input type="password" password="password" onChange={handlePassword}/><br></br>
        <input type="submit" onClick={Show}/>
       </div>
      </>

  )
}
export default Formsvat
