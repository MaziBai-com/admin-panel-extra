import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Bookings</h3>
          <ul className="sidebarList">
          <Link to={'/bookings'} className="link">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              All Bookings 
            </li>
          </Link>
          <Link to={'/instantbooking'} className="link">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Instant Booking 
            </li>
          </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Maids</h3>
          <ul className="sidebarList">
            <Link to="/allmaids" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                All Maids
              </li>
            </Link>
            <Link to="/newmaid" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Add Maid 
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Requests</h3>
          <ul className="sidebarList">
            <Link to="/alljobs" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Job Requests 
              </li>
            </Link>
            <Link to="/partners" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Partner Requests 
              </li>
            </Link>
            <Link to="/refers" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Maid Refers 
              </li>
            </Link>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
