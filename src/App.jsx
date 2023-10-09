import "./App.css";
import { useEffect } from "react";
import { fetchDataFromApi } from "./apis/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  // Calling getApiConfiguration
  const dispatch = useDispatch();

  // Use selective item
  const { url } = useSelector((state) => state.home);
  console.log(url);
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <>
      <Header />
      <div className="App" style={{ color: "white" }}>
        App &nbsp;{url?.total_pages}
      </div>
      <Footer />
    </>
  );
}

export default App;
