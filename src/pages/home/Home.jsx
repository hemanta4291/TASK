import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import { products } from "../../data/data";
import NotFound from "../../components/NotFound";

const CATEGORIES = [
  {
    id: 1,
    label: "mobile",
    value: "mobile",
  },
  {
    id: 2,
    label: "tablet",
    value: "tablet",
  },
  {
    id: 3,
    label: "laptop",
    value: "laptop",
  },
];

const Home = () => {
  const [productsData, setProductsData] = useState([...products]);
  const [filter, setFilter] = useState({
    category: [],
    minPrice: 2500,
    maxPrice: 50000,
  });

  useEffect(() => {
    let updateProduct = products.filter((product) => {
      if (
        filter.category.length > 0 &&
        !filter.category.includes(product.category)
      ) {
        return false;
      }
      if (product.price < filter.minPrice) {
        return false;
      }
      if (product.price > filter.maxPrice) {
        return false;
      }
      return true;
    });
    setProductsData(updateProduct);
  }, [filter]);

  const handleCategoryChange = (category) => {
    setFilter((prev) => {
      let updateCategories = prev.category.includes(category)
        ? prev.category.filter((c) => c !== category)
        : [...prev.category, category];

      return {
        ...prev,
        category: updateCategories,
      };
    });
  };

  const handlePrice = (e) => {
    setFilter((prev) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };

  return (
    <>
      <Hero
        title="Best digital problem Solving company"
        subDec="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            tempore corrupti ipsum cumque maxime commodi, deleniti laborum
            dolorem tempora perferendis?"
      />
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="w-full sm:w-48 h-full flex-shrink-0  border rounded-md border-grayBorder p-4 ">
              <h3 className="pb-5 font-semibold">Filter By:</h3>
              <div className="pb-5">
                <h4 className="font-semibold pb-1">Categories</h4>
                {CATEGORIES.map((category) => (
                  <div className="flex items-center gap-2">
                    <input
                      id={category.id}
                      checked={filter.category.includes(category.value)}
                      type="checkbox"
                      onChange={() => handleCategoryChange(category.value)}
                    />
                    <label htmlFor={category.id}>{category.label}</label>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-semibold pb-1">Price</h4>
                <div className="pb-2">
                  <h3 className="pb-1">Min Price</h3>
                  <input
                    className="p-1 w-full border border-grayBorder"
                    placeholder=""
                    value={filter.minPrice}
                    name="minPrice"
                    type="number"
                    onChange={handlePrice}
                  />
                </div>
                <div className="">
                  <h3 className="pb-1">Max Price</h3>
                  <input
                    placeholder=""
                    className="p-1 w-full border border-grayBorder"
                    value={filter.maxPrice}
                    name="maxPrice"
                    type="number"
                    onChange={handlePrice}
                  />
                </div>
              </div>
            </div>
            <div
              className={`${
                productsData.length === 0
                  ? "grid-cols-1"
                  : "grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
              } flex-1 grid gap-6`}>
              {productsData.length > 0 &&
                productsData?.map((product) => (
                  <Card key={product.id} product={product} />
                ))}

              {productsData.length === 0 && <NotFound msg="No items found !" />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
