import TableOperation from '../../ui/TableOperations'
import Filter from '../../ui/Filter'
import Sort from '../../ui/Sort'

function CabinsTableOperation() {
    return (
        <TableOperation>
            <Filter filtervalue='discount' 
            options={[{value:'all',lable:'ALL'},
            {value:'no-discount',lable:'No Discount'},
            {value:'with-discount',lable:'With Discount'}]}/>

            <Sort options={[
            {value:'name-asc',lable:'Sort by name (A-Z)'},
            {value:'name-desc',lable:'Sort by name (Z-A)'},
            {value:'regularPrice-asc',lable:'Sort by price (low-first)'},
            {value:'regularPrice-desc',lable:'Sort by price (high-first)'},
            {value:'maxCapacity-asc',lable:'Sort by capacity (low-first)'},
            {value:'maxCapacity-desc',lable:'Sort by capacity (high-first)'}]}/>
        </TableOperation>
    )
}

export default CabinsTableOperation
