import React from "react";
import News from '../assets/img/news.svg'
import moment from "moment";
const MainArticle = ({ title, minDesc, createDate }) => {
  return (
  
      <div class=" flex flex-col items-start px-5 py-16 mx-auto ">
      
        <div class="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            loading="lazy"
            src={News}
          />
        </div>
        <div class="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
          <h1 class="mb-8 text-2xl font-bold tracking-tighter text-left text-black title-font">
           
            {title}
          </h1>
          <h2 class="mb-1 text-xs font-medium tracking-widest text-black title-font">
            {moment(createDate).format('DD/MM/YYYY')}
          </h2>
          <p class="mb-8 text-base leading-relaxed text-left text-gray-700">
            {minDesc}
          </p>
          <div class="flex flex-wrap w-full mt-2 -mx-4 text-center ">
         
          
          </div>
        </div>
      </div>
   
  );
};

export default MainArticle;
