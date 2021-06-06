import React, { useEffect } from "react";
import MainArticle from "../components/MainArticle";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesApi } from "../redux/actions/articles.actions";
import Chat from "../components/Chat";

const Home = () => {
  const dispatch = useDispatch();
  const articleState = useSelector((state) => state.articles);
  useEffect(() => {
    dispatch(getArticlesApi());
  }, []);

  return (
    <div>
      {articleState.articles.map((elm) => {
        return <MainArticle title={elm.titre} minDesc={elm.description} createDate={elm.created_at}/>;
      })}
      <Chat/>
    </div>
  );
};

export default Home;
