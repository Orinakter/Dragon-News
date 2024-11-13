import { useEffect, useState } from "react";


const LeftNav = () => {
    const [categories,SetCategories] =useState([]);
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=>res.json())
        .then(data=>SetCategories(data.data.news_category))
    },[])
    return (
        <div className="">
            <h2 className="font-semibold mb-3">All Caterogy({categories.length})</h2>
           <div className="flex flex-col gap-3 ">
            {
               categories.map(category=>
               <button className="p-4 rounded-xl bg-gray-200" key={category.category_id}>{category.category_name}</button>) 
            }
           </div>
        </div>
    );
};

export default LeftNav;