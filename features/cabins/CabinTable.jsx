import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apicabins";
import Spinner  from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useParams, useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";
import { useCabin } from "./useCabins";

/*const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;
*/
function CabinTable() {
  
const {cabins,isLoading}=useCabin()
const [searchparams]=useSearchParams()
if(isLoading) return <Spinner/>

const filtervalue=searchparams.get('discount') || 'all'

let filtercabins
if(filtervalue==='all') filtercabins=cabins
if(filtervalue==='no-discount') filtercabins=cabins.filter((el)=>el.discount===0)
if(filtervalue==='with-discount') filtercabins=cabins.filter((el)=>el.discount!==0)

const sorts=searchparams.get('sortBy') || 'created_at-asc'

const [field,direction]=sorts.split('-')
const modfier=direction==='asc'? 1 :-1
const sortCabins= filtercabins?.sort((a,b)=>(a[field]-b[field])*modfier)
console.log(field,direction)
if(!cabins)return <Empty resource={'please enter the cabins '}/>

  return (
    <Menus>
    <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
      <Table.Header >
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body data={sortCabins} render={(cabin)=><CabinRow cabin={cabin} key={cabin.id}/>}/>
      
    </Table>
    </Menus>
  )
}

export default CabinTable
