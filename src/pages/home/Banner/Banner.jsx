import { useState, useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const Banner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/popular");
  // const { data, loading } = useFetch("/movie/upcoming");
  // const { data, loading } = useFetch("/movie/top_rated");
  useEffect(() => {
    // ? means Optional Changing
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);
  // console.log(useFetch("/movie/upcoming"))

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      // '/search/:query' as written in Router
    }
  };

  return (
    <>
      <div className="heroBanner">
        {!loading && (
          <div className="backdrop-img">
            <Img src={background} alt="Popular Or Top Rated" />
          </div>
        )}
        <div className="opacity-layer"></div>
        <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome Cinephile.</span> &nbsp;
            <span className="subTitle">Discover Now & Explore Now......</span>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a Movie or TV Shows"
                onChange={(e) => {
                  setQuery(e.target.value);
                  console.log(e);
                }}
                onKeyUp={searchQueryHandler}
              />
              <button>Search</button>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default Banner;
