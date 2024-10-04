import React, { useState } from "react";
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import { products } from "../../data/data";

const Home = () => {
  const [productsData, setProductsData] = useState([...products]);
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsData.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
