import { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Img from "../../components/lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import "./style.scss";
import dayjs from "dayjs";
import CircleRating from "../circleRating/circleRating";

const Carousel = ({ data, loading }) => {
  // Function Similar to className and ID basically to take reference which is done using useRef() tag
  // Kisi bhi node select karne la tarika hota hai
  // const carouselContainer = useRef();
  // console.log(carouselContainer.current);
  const { url } = useSelector((state) => state.home);
  // console.log(url);

  const navigate = useNavigate();

  const navigation = (dir) => {};

  const skItems = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="carousel">
        <ContentWrapper>
          <BsFillArrowLeftCircleFill
            className="carouselLeftNav arrow"
            onClick={() => navigation("left")}
          />
          <BsFillArrowRightCircleFill
            className="carouselRighttNav arrow"
            onClick={() => navigation("right")}
          />
          {!loading ? (
            <div className="carouselItems">
              {data?.map((item) => {
                const posterUrl = item.poster_path
                  ? url.poster + item.poster_path
                  : PosterFallback;
                console.log(posterUrl);
                return (
                  <div className="carouselItem" key={item.id}>
                    <div className="posterBlock">
                      <Img src={posterUrl} />
                      <CircleRating rating={item.vote_average.toFixed(1)} />
                    </div>
                    <div className="textBlock">
                      <span className="title">{item.title || item.name}</span>
                      <span className="date">
                        {dayjs(item.release_date || item.first_air_date).format(
                          "MMM D,YYYY"
                        )}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="loadingSkeleton">
              {skItems()}
              {skItems()}
              {skItems()}
              {skItems()}
              {skItems()}
            </div>
          )}
        </ContentWrapper>
      </div>
    </>
  );
};

export default Carousel;
