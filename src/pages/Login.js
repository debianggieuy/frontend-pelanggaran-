import { useState } from "react"

import axios from "axios"
/**
 * 
 * 
 * axios digunakan untuk proses transfer data dari frontend
 * ke backend
 */
export default function Login(){
    /**define state to store username and password */
    let[username,setUsername]= useState("")
    let[password,setPassword]=useState("")

    let loginProcess=ev =>{
        ev.preventDefault()
        /**akses ke backend utk proses login */
        /**method:POST 
         * endpoint:http://localhost:8080/user/auth
         * request:username and password
         * response:logged and token
        */
       let request={
           username:username,
           password:password
       }
       let endpoint=`http://localhost:8080/user/auth`

       /**sending data */
       axios.post(endpoint,request)
       .then(response=>{
           if(response.data.logged==true){
                let token=response.data.token
                
                /**store token to local Storge Browser */
           alert(`Login Berhasil`)
       }else{
           alert(response.data.massage) 


       }
       
       })
       .catch(error=>{
           console.log(error)
       })



    }

    return(
        <div className="container">
            <div className="card">
                <div className="card-header"style={{background:`maroon`}}>
                    <h4 className="text-white">
                        Sign In
                        </h4>
            </div>
            <div className="card-body">
                <from onSubmit={ev=>loginProcess(ev)}>
                    <h5>Username</h5>
                    <input type={`text`}className="from-control mb-2"
                    required
                    value={username}
                    onChange={(ev)=>setUsername(ev.target.value)}/>

                        <h5>Password</h5>

                    <input type={`password`}className="from-control mb-2"
                        required
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}/>
                        
                        <button type="submit" clasName="btn btn-success">
                            Sign In
                        </button>
                </from>
            </div>

            </div>
            </div>
    )
}