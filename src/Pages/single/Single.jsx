// import React from "react";

// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import "./single.scss";
// import Chart from "../../components/chart/Chart";
// import List from "../../table/Table";

// const Single = () => {
//   return (
//     <div className="single">
//       <Sidebar />
//       <div className="singleContainer">
//         <Navbar />

//         <div className="top">
//           <div className="left">
//             <div className="editButton">Edit</div>
//             <h1 className="title">Information</h1>
//             <div className="item">
//               <img
//                 src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
//                 alt=""
//                 className="itemImg"
//               />
//               <div className="details">
//                 <h1 className="itemTitle">Jane Doe</h1>
//                 <div className="detailItem">
//                   <span className="itemKey">Email:</span>
//                   <span className="itemValue">janedoe@gmail.com</span>
//                 </div>

//                 <div className="detailItem">
//                   <span className="itemKey">Phone:</span>
//                   <span className="itemValue">+91 838387483</span>
//                 </div>

//                 <div className="detailItem">
//                   <span className="itemKey">Address:</span>
//                   <span className="itemValue">
//                     Elton st. 234 Garden Yd. NewYork
//                   </span>
//                 </div>

//                 <div className="detailItem">
//                   <span className="itemKey">Country:</span>
//                   <span className="itemValue">USA</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="right">
//             <Chart aspect={3 / 1} title="Users Spending (last 6 months)" />
//           </div>
//         </div>
//         <div className="bottom">
//           <h1 className="title">Last Transactions</h1>
//           <List />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Single;

// import React from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
// import List from "../../table/Table";
// import "./single.scss";

// const Single = () => {
//   return (
//     <div className="single">
//       <Sidebar />
//       <div className="singleContainer">
//         <Navbar />
//         <div className="top">
//           <div className="left">
//             <div className="editButton">Edit</div>
//             <h1 className="title">Information</h1>
//             <div className="item">
//               <img
//                 src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
//                 alt="Profile"
//                 className="itemImg"
//               />
//               <div className="details">
//                 <h1 className="itemTitle">Jane Doe</h1>
//                 <div className="detailItem">
//                   <span className="itemKey">Email:</span>
//                   <span className="itemValue">janedoe@gmail.com</span>
//                 </div>
//                 <div className="detailItem">
//                   <span className="itemKey">Phone:</span>
//                   <span className="itemValue">+91 838387483</span>
//                 </div>
//                 <div className="detailItem">
//                   <span className="itemKey">Address:</span>
//                   <span className="itemValue">
//                     Elton st. 234 Garden Yd. NewYork
//                   </span>
//                 </div>
//                 <div className="detailItem">
//                   <span className="itemKey">Country:</span>
//                   <span className="itemValue">USA</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="right">
//             <Chart aspect={3 / 1} title="Users Spending (last 6 months)" />
//           </div>
//         </div>
//         <div className="bottom">
//           <h1 className="title">Last Transactions</h1>
//           <List />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Single;

import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../table/Table";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="Profile"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <InfoItem label="Email" value="janedoe@gmail.com" />
                <InfoItem label="Phone" value="+91 838387483" />
                <InfoItem
                  label="Address"
                  value="Elton st. 234 Garden Yd. NewYork"
                />
                <InfoItem label="Country" value="USA" />
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Users Spending (last 6 months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className="detailItem">
    <span className="itemKey">{label}:</span>
    <span className="itemValue">{value}</span>
  </div>
);

export default Single;
