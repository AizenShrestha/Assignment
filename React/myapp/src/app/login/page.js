import React from "react";
import {Button} from "@nextui-org/react";

const Register = () => {
    return (
      <div className='form'>
          <input placeholder='enter name'/> <br/>
          <input placeholder='enter password' type='password'/> <br/>
          <input placeholder='enter address'/> <br/>
          <input placeholder='enter email'/> <br/>
          <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      Button
    </Button>
      </div>
    )
  }
  
  export default Register