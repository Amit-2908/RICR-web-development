import React, { useState } from 'react'
import UserSideBar from '../../components/userDashboard/UserSideBar';
import UserOverview from '../../components/userDashboard/UserOverview';
import UserProfile from '../../components/userDashboard/UserProfile';
import UserOrders from '../../components/userDashboard/UserOrders';
import UserTransactions from '../../components/userDashboard/UserTransactions';
import UserHelpDesk from '../../components/userDashboard/UserHelpDesk';

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [open,setOpen] = useState(true);
  return (
    <>
    <div className='w-full flex h-[91vh]'>
      <div className={`bg-(--color-background) duration-300 ${open?"w-12/60" :"w-2/60"}`}>
        <UserSideBar active={active} setActive= {setActive}
        open={open} setOpen ={setOpen}/>
      </div>
      <div className={`${open ? "w-48/60":"w-58/60"} duration-300`}>
      {active === 'overview' && <UserOverview/>}
      {active === 'profile' && <UserProfile/>}
      {active === 'orders' && <UserOrders/>}
      {active === 'transaction' && <UserTransactions/>}
      {active === 'helpdesk' && <UserHelpDesk/>}
    
      </div>
    </div>
    </>
  )
}
export default UserDashboard ;