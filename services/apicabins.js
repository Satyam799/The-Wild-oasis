import supabase, { supabaseUrl } from "./supabase";




export async function getCabins(){

    const { data, error } = await supabase
    .from('cabins')
    .select('*')

if(error){
    console.log(error)
    throw new Error("Cabins could not be loaded")
}
return data
  }

export async function deleteCabins(id){
    const {data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)
  if(error){
    console.log(error)
    throw new Error("cabin cant be deleted")
  }
return data

}

export async function createeditcabin(value,id){
const kuchbhi= value.image?.startsWith?.(supabaseUrl)
const imagename=`${Math.random()}-${value.image.name}`.replace('/',"")
//https://surdpigbaplzbdykxyiu.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
const imagepath= kuchbhi? value.image:`https://surdpigbaplzbdykxyiu.supabase.co/storage/v1/object/public/cabin-images/${imagename}`
let query= supabase.from('cabins')

if(!id)
query=query.insert([{...value,image:imagepath}])
if(id)
query=query.update({...value,image:imagepath}).eq("id",id)

const{data,error}=await query.select().single()
  if(error){
    console.log(error)
    throw new Error("cabin cant be deleted")
  }
  if(kuchbhi) return data

  const {error:storageerror} = await supabase
  .storage
  .from('cabin-images')
  .upload(imagename,value.image)
if(storageerror){
  await supabase
    .from('cabins')
    .delete()
    .eq('id', data.id)
}


  return data

}