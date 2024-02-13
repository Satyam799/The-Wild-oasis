import { Uppost } from "../src/context/Darkmode"
import ButtonIcon from "./ButtonIcon"
import {HiOutlineMoon, HiOutlineSun} from 'react-icons/hi2'


function Darkmodetoggle() {

const {Darkmode,togglefunction}=Uppost()
    return (
        <ButtonIcon onClick={togglefunction}>
            {Darkmode?<HiOutlineSun/>:<HiOutlineMoon/>}
        </ButtonIcon>
    )
}

export default Darkmodetoggle
