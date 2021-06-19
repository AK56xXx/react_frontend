import React, { useEffect } from "react";
import MainArticle from "../components/MainArticle";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesApi } from "../redux/actions/articles.actions";
import Slider from "react-slick";
import Chat from "../components/Chat";

const Home = () => {
  const dispatch = useDispatch();
  const articleState = useSelector((state) => state.articles);
  useEffect(() => {
    dispatch(getArticlesApi());
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width:"100vw", 
          overflowX:"scroll"
        }}
      >
        {articleState.articles.map((elm) => {
          return (
            <MainArticle
              title={elm.titre}
              minDesc={elm.description}
              createDate={elm.created_at}
            />
          );
        })}
      </div>

      <Chat />
    </div>
  );
};

export default Home;
