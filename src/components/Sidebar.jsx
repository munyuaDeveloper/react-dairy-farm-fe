import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

const SidebarComponent = ({ toggled }) => {
    const [toggleState, setToggled] = useState(toggled)
    console.log();
    useEffect(() => {
        
    }, [toggled])

    const handleOnBackdropClick = () => {
        setToggled(false)
    }
    return (
        <Sidebar backgroundColor="rgb(10 75 110)" className="text-white" onBackdropClick={() => handleOnBackdropClick()} toggled={toggleState}  customBreakPoint="560px">
            <div className="my-10 text-center text-white text-2xl">
                {/* <span>Munyua Dairy Firm</span> */}
            </div>
            <Menu >
                <MenuItem className="hover:text-sky-900" component={<Link to="/dashboard" />}> Home</MenuItem>
                <SubMenu label="Cows" className="hover:text-sky-900">
                    <MenuItem className="text-sky-900" component={<Link to="/dashboard/cow-records" />}> Cow Records</MenuItem>
                    <MenuItem className="text-sky-900" component={<Link to="/dashboard/milk-records" />}> Milk Records</MenuItem>
                </SubMenu>
                <MenuItem className="hover:text-sky-900" component={<Link to="/dashboard/profile" />}> Profile</MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default SidebarComponent;