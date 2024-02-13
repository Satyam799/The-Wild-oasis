import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Bookings from "../pages/Bookings"
import Login from "../pages/Login"
import Cabins from "../pages/Cabins"
import Account from "../pages/Account"
import PageNotFound from "../pages/PageNotFound"
import Settings from "../pages/Settings"
import Users from "../pages/Users"
import Applayout from "../ui/Applayout"
import Globalstyles from "../styles/Globalstyles"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from "react-hot-toast"
import Booking from "../pages/Booking"
import Checkin from "../features/check-in-out/checkin"
import Protucted from "../features/authentication/Protucted"
import { Darkmodeprovider } from "./context/Darkmode"

const querystam=new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0
    }
  }
})

function App() {
  return (<Darkmodeprovider>
  <QueryClientProvider client={querystam}>
<ReactQueryDevtools initialIsOpen={false}/>
<Globalstyles/>
   
<BrowserRouter>

<Routes>
<Route element={<Protucted><Applayout/></Protucted>}>
<Route index element ={<Navigate replace to="dashboard"/>}/>
<Route path="dashboard" element={<Dashboard/>}></Route>
<Route path="bookings" element={<Bookings/>}></Route>
<Route path="bookings/:bookingId" element={<Booking/>}></Route>
<Route path="checkin/:bookingId" element={<Checkin/>}></Route>
<Route path="cabins" element={<Cabins/>}></Route>
<Route path="user" element={<Users/>}></Route>
<Route path="setting" element={<Settings/>}></Route>
<Route path="account" element={<Account/>}></Route>
</Route>
<Route path="login" element={<Login/>}></Route>
<Route path="*" element={<PageNotFound/>}></Route>


</Routes>

</BrowserRouter>
<Toaster position="top-center" gutter={12} containerStyle={{margin:"8px"}} toastOptions={{
  success:{
  duration:3000
},
error:{
  duration:5000
},
style:{
  fontSize:"16px",
  maxWidth:"500px",
  padding:"16px 24px",
  backgroundColor:"var(--color-grey-0)",
  color:"var(--color-grey-700)"
}
}}/>
</QueryClientProvider>
</Darkmodeprovider>  )
}

export default App
