import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFilter } from "./FilterProvide";

const Sidebar = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    keyword,
    setKeyword,
  } = useFilter();

  const [categories, setCategories] = useState([]);
  const [keywords] = useState([
    "apple",
    "watch",
    "Fasion",
    "trend",
    "shoes",
    "shirt",
  ]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        const uniqueCategoreis = Array.from(
          new Set(data.products.map((p) => p.category))
        );
        setCategories(uniqueCategoreis);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCategories();
  }, []);
  const radioChangeHandler = (category)=>{
     setSelectedCategory(category)
  }
  const keywordChangeHandler =(k)=>{
    
    setKeyword(k)
  }
  const resetHandler = ()=>{
    setSearchQuery("")
    setSelectedCategory("")
    setMinPrice(undefined)
    setMaxPrice(undefined)
    setKeyword("")
  }
  return (
    <div className="w-64 p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">React Store</h1>
      <section>
        <input
          type="text"
          className="border-2 rounded px-2 py-3 w-full sm:mb-0"
          placeholder="search products"
          value={searchQuery}
          onChange={e=>setSearchQuery(e.target.value)}
        />
        <div className="flex justify-center mt-3 items-center ">
          <input
            type="text"
            className="border-2 mr-2 px-5 mb-3 w-full"
            placeholder="Min"
            value={minPrice ?? ''}
            onChange={e=>setMinPrice(e.target.value)}
          />
          <input
            type="text"
            className="border-2 mr-2 px-5 mb-3 w-full"
            placeholder="Max"
            value={maxPrice ?? ''}
            onChange={e=>setMaxPrice(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Categories</h2>
        </div>
        <section>
          {categories.map((c, index) => (
            <label key={index} className="block mb-2">
              <input
                type="radio"
                name="category"
                value={c}
                onChange={()=>radioChangeHandler(c)}
                checked={selectedCategory ===c}
                className="mr-2 w-[16px] h-[16px]"
              />
              {c.toUpperCase()}
            </label>
          ))}
        </section>
        <div className="mb-5 mt-4">
          <h2 className="text-xl font-semibold mb-3">Keywords</h2>
          <div>
            {keywords.map((k, index) => (
              <button
                key={index}
                onClick={()=>keywordChangeHandler(k)}
                className="block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200"
              >
                {k.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <button  onClick={resetHandler} className="w-full mb-[4rem] py-2 bg-black text-white rounded mt-5">
          Reset Filters
        </button>
      </section>
    </div>
  );
};

export default Sidebar;
