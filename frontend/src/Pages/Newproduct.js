import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BiCloudUpload } from "react-icons/bi";
import { ImagetoBase64 } from "../utility/ImagetoBase64";

const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    // console.log(data);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { name, image, category, price, description } = data;

    if (name && image && category && price && description) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_Server}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();
      console.log(fetchRes);
      toast(fetchRes.message);

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast("Enter Required Feilds");
    }
  };

  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-8 md:p-8 my-4 bg-rose-200"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          name="name"
          className="bg-white p-1 my-2"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category">Category</label>
        <select
          className="bg-white p-1 my-2"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value={"other"}>Select Category</option>
          <option value={"fruits"}>Fruits</option>
          <option value={"vegetable"}>Vegetable</option>
          <option value={"sweets"}>Sweets</option>
          <option value={"dairy"}>Dairy</option>
          <option value={"grains"}>Grains</option>
          <option value={"snacks"}>Snacks</option>
        </select>

        <label htmlFor="image" className="my-3">
          Image
          <div className="h-40 w-full bg-white rounded flex items-center justify-center cursor-pointer ">
            {data.image ? (
              <img src={data.image} alt="" className="h-full" />
            ) : (
              <span className="text-5xl">
                <BiCloudUpload />
              </span>
            )}
            <input
              type={"file"}
              id="image"
              accept="image/*"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>
        <label htmlFor="price" className="my-2">
          Price
        </label>
        <input
          type={"text"}
          className="bg-white p-1"
          name="price"
          onChange={handleOnChange}
          value={data.price}
        />

        <label htmlFor="description" className="my-2 ">
          Description
        </label>
        <textarea
          rows={3}
          className="bg-white p-1 resize-none"
          name="description"
          onChange={handleOnChange}
          value={data.description}
        ></textarea>

        <button className="w-full max-w-[120px] m-auto bg-yellow-100 hover:bg-yellow-300 cursor-pointer rounded-full text-xl text-center mt-4 py-1">
          Save
        </button>
      </form>
    </div>
  );
};

export default Newproduct;
