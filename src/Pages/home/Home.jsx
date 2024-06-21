// import React from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
// import "./home.scss";
// import Navbar from "../../components/navbar/Navbar";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
// import List from "../../table/Table";

// const Home = () => {
//   return (
//     <div className="home">
//       <Sidebar />

//       <div className="homeContainer">
//         <Navbar />
//         <div className="widgets">
//           <Widget type="user" />
//           <Widget type="order" />
//           <Widget type="erarning" />
//           <Widget type="balance" />
//         </div>

//         <div className="charts">
//           <Featured />
//           <Chart title="Last 6 month revenue" aspect={2 / 1} />
//         </div>

//         <div className="listContainer">
//           <div className="listTitle">Latest Transactions</div>
//           <List />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
// import "./home.scss";
// import Navbar from "../../components/navbar/Navbar";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
// import List from "../../table/Table";

// const Home = () => {
//   return (
//     <div className="home">
//       <Sidebar />

//       <div className="homeContainer">
//         <Navbar />
//         <div className="widgets">
//           <Widget type="user" className="widg" />
//           <Widget type="order" className="widg" />
//           <Widget type="earning" className="widg" />
//           <Widget type="balance" className="widg" />
//         </div>

//         <div className="charts">
//           <Featured />
//           <Chart title="Last 6 months revenue" aspect={2 / 1} />
//         </div>

//         <div className="listContainer">
//           <div className="listTitle">Latest Transactions</div>
//           <List />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import List from "../../table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />

      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" /> {/* Corrected the type here */}
          <Widget type="balance" />
        </div>

        <div className="charts">
          <Featured className="featured" />
          <Chart
            title="Last 6 months revenue"
            aspect={2 / 1}
            className="chart"
          />
        </div>

        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
