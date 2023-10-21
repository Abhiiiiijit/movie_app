import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./apis/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Details from "./pages/details/Details";
import Home from "./pages/home/home";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/explore";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  // Calling getApiConfiguration
  const dispatch = useDispatch();

  // Use selective item
  const { url } = useSelector((state) => state.home);
  console.log(url);
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};
    endPoints.forEach((url) => {
      return promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    const data = await Promise.all(promises);
    // console.log(data);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    // console.log(allGenres)
    dispatch(getGenres(allGenres));
  };

  // Api Testing
  // useEffect(() => {
  //   apiTesting();
  // }, []);
  // const apiTesting = () => {
  //   fetchDataFromApi("/movie/popular").then((res) => {
  //     console.log(res);
  //     dispatch(getApiConfiguration(res));
  //   });
  // };

  return (
    <>
      <BrowserRouter>
        <Header />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Media Type(Movies or TV Shows) along with its ID nd details */}
          <Route path="/:mediaType/:id" element={<Details />} />
          {/* Will Search for Keywords or Name */}
          <Route path="/search/:query" element={<SearchResult />} />
          {/* Explore Movies and TV Shows Page to check movies n all along with genre and media types*/}
          <Route path="/explore/:mediaType" element={<Explore />} />
          {/* Error or Movies not found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Header />
      <div className="App" style={{ color: "white" }}>
        App &nbsp;{url?.total_pages}
      </div>
      <Footer /> */}
    </>
  );
}

export default App;
