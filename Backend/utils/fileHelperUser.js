import bcrypt from "bcrypt";

export async function encryptPass(pass){

    const passHas = await bcrypt.hash(pass,10);
   
    return passHas;
}

export async  function  verificationPass(pass,has) {

    const result = await  bcrypt.compare(pass,has);
  //  console.log("result: "+result)
    return result;
    
}

