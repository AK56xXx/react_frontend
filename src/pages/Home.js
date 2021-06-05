import React,{useEffect} from "react";
import MainArticle from "../components/MainArticle";
import {useDispatch} from 'react-redux'
import { getArticlesApi } from "../redux/actions/articles.actions";

const Home = () => {
  const dispatch = useDispatch(); 
  useEffect(()=>{
    dispatch(getArticlesApi())
  },[])
  const articles = [
    {
      title: "article1",
      desc: "desc1",
    },
    {
      title: "article2",
      desc: "desc2",
    },
    {
      title: "article3",
      desc: "desc3",
    },
    {
      title: "article4",
      desc: "desc4",
    },
    {
      title: "article4",
      desc: "desc4",
    },
  ];
  return (
    <div>
      {articles.map((elm) => {
        return <MainArticle title={elm.title} minDesc={elm.desc} />;
      })}
    </div>
  );
};

export default Home;
