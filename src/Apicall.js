import { useState, useEffect } from "react";
import "./Apicallgit branch -M main
.css";
import "./App.css";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

function New() {
  const [top_courses, gettop_courses] = useState([]);

  const apilink = " https://futursity.com/course/api/top_courses";

  useEffect(() => {
    async function fecthApi() {
      let response = await fetch(apilink);
      let data = await response.json();
      console.log(data);
      gettop_courses(data);
    }

    fecthApi();
  }, []);
  const [categories, getcategories] = useState([]);

  const apilink2 = "  https://futursity.com/course/api/categories";

  useEffect(() => {
    async function fecthApi2() {
      let response = await fetch(apilink2);
      let data2 = await response.json();
      console.log(data2);
      getcategories(data2);
      console.log(data2);
    }

    fecthApi2();
  }, []);

  return (
    <div>
      <div className="top">
        {top_courses.map((top_coursesdata, i) => {
          return <div>{top_coursesdata.title}</div>;
        })}
      </div>
      <div className="categories">
      {categories.map((categoriesdata, key) => (
        <div >
          {" "}
          <div className="left-col" key={key}>{categoriesdata.name}</div>
        </div>
      ))}</div>
    </div>
  );
}

export default New;
