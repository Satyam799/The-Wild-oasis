import { useSearchParams } from "react-router-dom"
import Select from "./Select"

function Sort({options}) {
const [searchParams,setsearchParams]=useSearchParams()
  function handelsubmit(e){
    searchParams.set('sortBy',e.target.value)
    setsearchParams(searchParams)
  }
  const sortby=searchParams.get('sortBy') || ""

    return (
        <Select options={options} onChange={handelsubmit} value={sortby}/>
    )
}

export default Sort
