import Button from "../../ui/Button"
import Modal from "../../ui/Modal"
import CreateCabinForm from "./CreateCabinForm"

function Addcabins() {
    return (
        <div>
        <Modal>
            <Modal.Open opens="Cabin-form">
                <Button>Add new Cabins</Button>
            </Modal.Open>
            <Modal.Window name="Cabin-form">
                <CreateCabinForm/>
            </Modal.Window>
        </Modal>
        </div>
 )
}

export default Addcabins





        /*<Modal>
            <Modal.Open opens="Cabin-form">
                <Button>Add new Cabins</Button>
            </Modal.Open>
            <Modal.Window name="Cabin-form">
                <CreateCabinForm/>
            </Modal.Window>
        
        <Modal.Open opens="table">
            <Button>Show Table</Button>
        </Modal.Open>
        <Modal.Window name="table">
            <CabinTable/>
        </Modal.Window>
    </Modal>*/
   








/*function Addcanins () {
    const [IsOpenModel,setIsOpenModel]=useState(false)
  
    return (
        <div>
          <Button onClick={()=>setIsOpenModel(!IsOpenModel)}>Add New Cabin</Button>
          {IsOpenModel && <Modal setIsOpenModel={setIsOpenModel}><CreateCabinForm setIsOpenModel={setIsOpenModel}/></Modal>}
        </div>
    )
}*/

