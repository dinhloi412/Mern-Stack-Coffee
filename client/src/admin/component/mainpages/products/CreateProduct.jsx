import axios from "axios";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { GlobalState } from "../../../../GlobalState";
import "./Product.css";
import Loading from "../../../../components/utlis/loading/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
const CreateProduct = () => {
  const initialState = {
    product_id: "",
    title: "",
    price: 0,
    description: "",
    content: "",
    category: "",
    _id: "",
  };
  const state = useContext(GlobalState);
  const [product, setProduct] = useState(initialState);
  const [categories] = state.CategoryAPI.categories;
  const [images, setImages] = useState(false);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const [isAdmin] = state.UserAPI.isAdmin;
  const [token] = state.token;
  const param = useParams();
  const [products] = state.ProductsAPI.products;
  const [onEdit, setOnEdit] = useState(false);
  const [callback, setCallBack] = state.ProductsAPI.callback;
  useEffect(() => {
    if (param.id) {
      setOnEdit(true);
      products.forEach((product) => {
        if (product._id === param.id) {
          setProduct(product);
          setImages(product.images);
        }
      });
    } else {
      setOnEdit(false);
      setProduct(initialState);
      setImages(false);
    }
  }, [param.id, products]);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const createProduct = async (e) => {
    e.preventDefault();
    try {
      if (!isAdmin) return alert("You're not an admin");
      if (!images) return alert("No Image Upload");

      if (onEdit) {
        await axios.put(
          `/api/products/${product._id}`,
          { ...product, images },
          {
            headers: { Authorization: token },
          }
        );
      } else {
        await axios.post(
          "/api/products",
          { ...product, images },
          {
            headers: { Authorization: token },
          }
        );
      }

      setImages(false);
      setProduct(initialState);
      setCallBack(!callback);
      navigate("/admin/products", { replace: true });
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      if (!isAdmin) {
        return alert("You are not Admin");
      }
      const file = e.target.files[0];
      if (!file) return alert("File not exits");
      if (file.size > 1024 * 1024)
        // 1mb
        return alert("Size too large!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return alert("File format is incorrect.");
      let formData = new FormData();
      formData.append("file", file);

      setLoading(true);
      const res = await axios.post("/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      });
      setLoading(false);

      setImages(res.data);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleDestroy = async () => {
    try {
      if (!isAdmin) return alert("You're not an admin");
      setLoading(true);
      await axios.post(
        "/api/detsroy",
        { public_id: images.public_id },
        {
          headers: { Authorization: token },
        }
      );
      setLoading(false);
      setImages(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const styleUpload = {
    display: images ? "block" : "none",
  };
  return (
    <div className="container mt-10">
      <div className="create__product">
        <div className="upload">
          <input type="file" name="file" id="file_up" onChange={handleUpload} />
          {loading ? (
            <div id="file_img">
              <Loading />
            </div>
          ) : (
            <div id="file_img" style={styleUpload}>
              <img src={images ? images.url : ""} alt="" />
              <span onClick={handleDestroy}>X</span>
            </div>
          )}
        </div>
        <div className="form__box p-2">
          <form onSubmit={createProduct}>
            <div className="form-element">
              <input
                type="text"
                name="product_id"
                id="product_id"
                placeholder="Enter Product ID"
                value={product.product_id}
                onChange={handleChangeInput}
                disabled={onEdit}
              />
            </div>
            <div className="form-element">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter Title"
                value={product.title}
                onChange={handleChangeInput}
              />
            </div>
            <div className="form-element">
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Enter price"
                value={product.price}
                onChange={handleChangeInput}
              />
            </div>
            <div className="form-element">
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Enter description"
                value={product.description}
                onChange={handleChangeInput}
              />
            </div>
            <div className="form-element">
              <input
                type="text"
                name="content"
                id="content"
                placeholder="Enter content"
                value={product.content}
                onChange={handleChangeInput}
              />
            </div>
            <div className="form-element">
              <label htmlFor="categories">Categories: </label>
              <select
                value={product.category}
                name="category"
                onChange={handleChangeInput}
              >
                {categories.map((item) => (
                  <option value={item.name} key={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn-new">
              Lưu sản phẩm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
