import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Widget from "../../components/widget/Widget";
import "./stats.scss";

const Stats = () => {
  return (
    <div className="stats">
      <Sidebar />
      <div className="statsContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
             <Featured />
             <Chart title="Revenue (Last 6 Months)" aspect={2 / 1} />
        </div>
         <div className="charts">
             <Chart title="User Growth" aspect={2 / 1} />
             <Chart title="Order Volume" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
