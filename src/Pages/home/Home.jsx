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

// import React, { useRef } from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
// import "./home.scss";
// import Navbar from "../../components/navbar/Navbar";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
// import List from "../../table/Table";
// import { useSwipeable } from "react-swipeable";

// const Home = () => {
//   const listContainerRef = React.useRef(null);

//   const handleScroll = (scrollOffset) => {
//     if (listContainerRef.current) {
//       listContainerRef.current.scrollLeft += scrollOffset;
//     }
//   };

//   const handlers = useSwipeable({
//     onSwipedLeft: () => handleScroll(200),
//     onSwipedRight: () => handleScroll(-200),
//     preventDefaultTouchmoveEvent: true,
//     trackMouse: true,
//   });

//   return (
//     <div className="home">
//       <Sidebar />

//       <div className="homeContainer">
//         <Navbar />
//         <div className="widgets">
//           <Widget type="user" />
//           <Widget type="order" />
//           <Widget type="earning" /> {/* Corrected the type here */}
//           <Widget type="balance" />
//         </div>

//         <div className="charts">
//           <Featured className="featured" />
//           <Chart
//             title="Last 6 months revenue"
//             aspect={2 / 1}
//             className="chart"
//           />
//         </div>

//         <div className="listContainer" ref={listContainerRef} {...handlers}>
//           <div className="listTitle">Latest Transactions</div>
//           <div className="listContent">
//             <List className="listItem" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useRef } from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
// import "./home.scss";
// import Navbar from "../../components/navbar/Navbar";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
// import List from "../../table/Table";
// import { useSwipeable } from "react-swipeable";

// const Home = () => {
//   const listContainerRef = useRef(null);

//   const handleScroll = (scrollOffset) => {
//     if (listContainerRef.current) {
//       listContainerRef.current.scrollLeft += scrollOffset;
//     }
//   };

//   const handlers = useSwipeable({
//     onSwipedLeft: () => handleScroll(200),
//     onSwipedRight: () => handleScroll(-200),
//     preventDefaultTouchmoveEvent: true,
//     trackMouse: true,
//   });

//   return (
//     <div className="home">
//       <Sidebar />
//       <div className="homeContainer">
//         <Navbar />
//         <div className="widgets">
//           <Widget type="user" className="widget" />
//           <Widget type="order" className="widget" />
//           <Widget type="earning" className="widget" />
//           <Widget type="balance" className="widget" />
//         </div>
//         <div className="charts">
//           <Featured className="featured" />
//           <Chart
//             title="Last 6 months revenue"
//             aspect={2 / 1}
//             className="chart"
//           />
//         </div>
//         <div className="listContainer" ref={listContainerRef} {...handlers}>
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
import Datatable from "../../components/datatable/Datatable";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" className="widget" />
          <Widget type="order" className="widget" />
          <Widget type="earning" className="widget" />
          <Widget type="balance" className="widget" />
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
