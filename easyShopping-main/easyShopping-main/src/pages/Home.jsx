import React, { useState, useEffect } from "react";
import axios from "axios"; 
import Select from "react-select"; 
import backgroundImage from "./home.jpg"; 
import { db } from "../main";

const colorOptions = [
  "red",
  "blue",
  "black",
  "brown",
  "grey",
  "white",
  "green",
  "yellow",
  "pink",
  "purple",
  "beige",
].map((color) => ({
  value: color,
  label: color.charAt(0).toUpperCase() + color.slice(1),
}));

function HomePage() {
  const [products, setProducts] = useState([]);
  const [productsOnSale, setProductsOnSale] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOnSale, setOnSale] = useState("default"); 
  const [selectedShops, setSelectedShops] = useState([]); 
  const [selectedColors, setSelectedColors] = useState([]); 
  const [loading, setLoading] = useState(false);


  console.log(db);
  console.log(products);

  useEffect(() => {
    const fetchOnSaleProducts = async () => {
      const response = await axios.get("http://localhost:3000/products/onSale");
      setProductsOnSale(response.data.data); 
    };
    fetchOnSaleProducts();
  }, []); 

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); 

      const response = await axios.post("http://localhost:3001/scrape", {
        query: searchQuery,
      });
      setProducts(response.data.data);
      setLoading(false); 
      console.log(response);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setLoading(false); 
    }
  };

  const handleSortOnSale = (e) => {
    setOnSale(e.target.value);
  };

  const handleShopChange = (selectedOptions) => {
    setSelectedShops(
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };

  const handleColorChange = (selectedOptions) => {
    setSelectedColors(
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };

  const parsePrice = (priceString) => {
    if (!priceString) return null; 
    const match = priceString.match(/[\d,]+\.?\d*/); e
    if (!match) return null;
    const price = parseFloat(match[0].replace(/,/g, "")); 
    return price;
  };

  const sortProductsOnSale = (products) => {
    switch (sortOnSale) {
      case "price-low-to-high":
        return [...products].sort(
          (a, b) => parsePrice(a.price) - parsePrice(b.price)
        );
      case "price-high-to-low":
        return [...products].sort(
          (a, b) => parsePrice(b.price) - parsePrice(a.price)
        );
      case "default":
      default:
        return products; 
    }
  };

  const filterProductsByShops = (products) => {
    if (selectedShops.length === 0) return products; 
    return products.filter((product) => selectedShops.includes(product.shop));
  };

  const uniqueShops = [...new Set(products.map((product) => product.shop))];

  const shopOptions = uniqueShops.map((shop) => ({
    value: shop,
    label: shop,
  }));

  const filterProductsByColors = (products) => {
    if (selectedColors.length === 0) return products; 
    return products.filter((product) => {
      if (Array.isArray(product.colorOptions)) {
        return product.colorOptions.some((color) =>
          selectedColors.includes(color.toLowerCase())
        );
      } else if (typeof product.colorOptions === "string") {
        return selectedColors.some((color) =>
          product.colorOptions.toLowerCase().includes(` ${color.toLowerCase()} `)
        );
      }
      return false; 
    });
  };

  return (
    <div className="flex 
    flex-col 
    items-center 
    w-full">
      <div
        className="container my-8
         bg-black
        text-white 
         px-4 py-16 
         rounded-lg 
         w-9/10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-6xl font-medium 
        text-center font-audrey ">
          Parallel Shopping🏷️
        </h1>
        <p className="text-center 
        font-semibold 
        text-xl 
        pt-4 px-16 
        mb-8">
          Type what you're looking for and refine your search with{" "}
          <span className="bg-white 
          text-black 
          px-1 
          rounded-md ">
            advanced filters like PRICE, COLOR and preferred RETAILER.{" "}
          </span>
        </p>

        <p className="text-center 
        font-bold 
        text-xl 
        pt-2 
        px-16 
        mb-8">
          START TYPING, AND LET US DO THE REST!
        </p>
        <div className="flex
         justify-center 
         items-center 
         w-full">
          <div className="flex 
          border-2 
          rounded-lg 
          overflow-hidden">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 w-96"
              style={{ color: "black" }}
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500
               text-white 
               px-6 
               py-2"
              disabled = {loading}
            >
              {loading ? "Loading..." : "Search"}
            </button>
          </div>
        </div>
        <div class="flex items-center justify-center">

</div>

      </div>

      {products.length > 0 && (
        <div className="
        text-center 
        my-8 
        mx-16">
          <h1 className="
          text-6xl 
          font-medium 
          text-left 
          mb-6 
          mx-1 
          font-audrey">
            Search Result:{" "}
          </h1>
          <div className="
          flex 
          items-center 
          justify-between 
          mb-4 
          mx-4">
            <div className="
            flex 
            items-center">
              <select
                className="
                border 
                rounded 
                px-2 
                py-1"
                value={sortOnSale}
                onChange={handleSortOnSale}
              >
                <option value="default">Sort by price</option>
                <option value="price-low-to-high">Price: Low to High</option>
                <option value="price-high-to-low">Price: High to Low</option>
              </select>
            </div>
            <div className="
            flex 
            items-center 
            gap-4">
              <Select
                isMulti
                options={shopOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Select shops..."
                onChange={handleShopChange}
                value={shopOptions.filter((option) =>
                  selectedShops.includes(option.value)
                )}
              />
              <Select
                isMulti
                options={colorOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Select colors..."
                onChange={handleColorChange}
                value={colorOptions.filter((option) =>
                  selectedColors.includes(option.value)
                )}
              />
            </div>
          </div>

          <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-4 
          gap-4 
          px-4">
            {products.length > 0 ? (
              filterProductsByColors(
                filterProductsByShops(sortProductsOnSale(products))
              ).map((product, index) => (
                product.imageUrl && !product.imageUrl.startsWith("data:image/gif;base64,") && (

                <a
                  key={index}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  <div className="
                  bg-white 
                  shadow-lg 
                  rounded-lg 
                  overflow-hidden 
                  h-full 
                  relative">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="
                      w-full 
                      h-full 
                      object-cover"
                    />
                    <div className="
                    absolute 
                    bottom-0 
                    left-0 
                    w-full
                  bg-white">
                      <div className="p-1">
                        <p className="
                        text-medium 
                        font-medium 
                        uppercase">
                          {product.name}
                        </p>
                      </div>

                      <div className="
                      flex 
                      items-center 
                      justify-between 
                      px-3">
                        <p className="
                        text-gray-700 
                        font-semibold">
                          {product.price}
                        </p>
                        <p className="
                        font-bold 
                        italic 
                        text-xl 
                        text-right 
                        uppercase">
                          {product.shop}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                )
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </div>
      )}

      <div className="
      container 
      mx-auto 
      mt-8">
        {/* On-Sale Products */}
        {productsOnSale.length > 0 && (
          <div className="
          text-center 
          my-8 
          mx-0">
            <h1 className="
            text-6xl 
            font-medium 
            text-left 
            mb-6 
            mx-0 
            font-audrey">
              Featured Products✨
            </h1>

            <div className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-4 
            gap-4 ">
              {productsOnSale.map((product, index) => (
                <a
                  key={index}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="
                  bg-white 
                  shadow-lg 
                  rounded-lg 
                  overflow-hidden 
                  h-max 
                  relative">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full 
                      h-full 
                      object-cover"
                    />
                    <div className="p-1 
                    absolute 
                    bottom-0 
                    left-0 
                    w-full 
                    bg-white">
                      <p className="
                      text-small 
                      font-medium">{product.name}</p>
                      <p className="
                      text-black-700 
                      pt-1">
                        <span className="
                        bg-red-500 
                        text-white 
                        px-2 
                        py-0 
                        rounded">
                          {product.priceNew}{" "}
                        </span>
                        {""}
                        <span className="line-through">
                          {product.priceOld} {"    "}
                        </span>{" "}
                        <span className="font-bold 
                        italic 
                        ml-20 
                        text-xl 
                        pt-0 
                        text-transform: uppercase">
                          {" "}
                          {product.shop}
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default HomePage;
