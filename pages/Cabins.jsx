import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Addcanins from "../features/cabins/Addcabins";
import CabinsTableOperation from "../features/cabins/CabinsTableOperation";

function Cabins() {
  
return (<>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
    <CabinsTableOperation/>
    </Row>
    <Row>
      <CabinTable/>
      <Addcanins/>
    </Row>
    </>
  );
}

export default Cabins;
