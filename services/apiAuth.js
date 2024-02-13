import supabase from "./supabase";

export async function signUp({fullName,email,password}){
   const {data,error}=await supabase.auth.signUp({email,password,options:{
    data:{
      fullName,
      avatar:"",
    }
   }
  })
  if(error){
    console.log(error)

    throw new Error ("The error occured due")
}
  return data 
}



export async function login({email,password}){
let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
if(error){
    console.log(error)

    throw new Error ("The error occured due")
}
console.log(data)
return data
}

export async function getUserfromloacl(){

  const {data:session}=await supabase.auth.getSession();
  if(!session.session)return null;

  const {data,error}=await supabase.auth.getUser()
  console.log(data)
  if(error) throw new Error(error.message)
  return data?.user
}

export async function logout(){
  const {error} =await supabase.auth.signOut();
  if(error) throw new Error(error.message)

}


export  async function updateCurrentuser({password,fullName,avatar}){

let updateData
if(password) updateData={password}
if(fullName) updateData={data:{fullName}}

const {data,error}=await supabase.auth.updateUser(updateData)
if(error) throw new Error(error.message)

if(!avatar) return data

const fileName= `avatar-${data.user.id}-${Math.random()}`

const {error:storageerror}=await supabase.storage.from('avatars').upload(fileName, avatar)

if(storageerror) throw new Error(storageerror.message)

const {data:updateuser,error:error2}=await supabase.auth.updateUser({
  data:{
    avatar:`https://surdpigbaplzbdykxyiu.supabase.co/storage/v1/object/public/avatars/${fileName}`
  }
})
if(error2) throw new Error(error2.message)
return updateuser
}