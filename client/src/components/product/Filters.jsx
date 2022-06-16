import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import "./product.css";
const Filters = () => {
  const state = useContext(GlobalState);
  const [categories] = state.CategoryAPI.categories;

  const [category, setCategory] = state.ProductsAPI.category;
  const [sort, setSort] = state.ProductsAPI.sort;
  const [search, setSearch] = state.ProductsAPI.search;
  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
  };
  return (
    <main>
      <section className="products">
        <div className="filter_menu">
          <div className="filter_menu--sort">
            <div className="">
              <span>Filters: </span>
              <select
                className="text-filters"
                name="category"
                value={category}
                onChange={handleCategory}
              >
                <option className="text-filters" value="">
                  All Products
                </option>
                {categories.map((category) => (
                  <option
                    className="text-filters"
                    value={"category=" + category._id}
                    key={category._id}
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <span>Sort By: </span>
              <select
                className="text-filters"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option className="text-filters" value="">
                  Newest
                </option>
                <option className="text-filters" value="sort=oldest">
                  Oldest
                </option>
                <option className="text-filters" value="sort=-sold">
                  Best sales
                </option>
                <option className="text-filters" value="sort=-price">
                  Price: Hight-Low
                </option>
                <option className="text-filters" value="sort=price">
                  Price: Low-Hight
                </option>
              </select>
            </div>
          </div>
          <div className="">
            <input
              type="text"
              value={search}
              placeholder="Enter your search!"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Filters;
