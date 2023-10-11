import Banner from "../home/Banner/Banner";
// import Trending from "../home/trending/Trending";
// import Popular from "../home/popular/Popular";
// import TopRated from "../home/topRated/TopRated";
import "./style.scss";

const home = () => {
  return (
    <div>
      <Banner /> <br />
      <div style={{height:"1000px"}}></div>
      {/* <Trending /> <br />
      <Popular /> <br />
      <TopRated /> <br /> */}
    </div>
  );
};

export default home;
