import Sidebar from './Sidebar.js';
import MainContainer from './MainContainer.js';
import WatchPage from './WatchPage.js';
import { Outlet } from 'react-router-dom';

const Body = () => {

    return (
        <div className="grid grid-flow-col">
            <Sidebar/> 
            <Outlet />
        </div>
    );
} 

export default Body;