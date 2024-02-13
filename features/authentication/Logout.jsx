import {HiArrowRightOnRectangle} from 'react-icons/hi2'
import ButtonIcon from '../../ui/ButtonIcon'
import { useLogout } from './useLogout'
import SpinnerMini from "../../ui/SpinnerMini"

function Logout() {
    const {Logoutfn,isLoading}=useLogout()

function handelsubmit(){
    Logoutfn()
}

    return (<ButtonIcon onClick={handelsubmit} disabled={isLoading}>
       { !isLoading?<HiArrowRightOnRectangle />:<SpinnerMini/>}
    </ButtonIcon>
    )
}

export default Logout
