import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { GlobalState } from "../../../../GlobalState";

const Category = () => {
  const state = useContext(GlobalState);
  const [categories] = state.CategoryAPI.categories;
  const [category, setCategory] = useState("");
  const [token] = state.token;
  const [callback, setCallBack] = state.CategoryAPI.callback;
  const [onEdit, setOnEdit] = useState(false);
  const [id, setId] = useState("");
  const createCategory = async (e) => {
    e.preventDefault();
    try {
      if (onEdit) {
        const res = await axios.put(
          `/api/category/${id}`,
          { name: category },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        alert(res.data.msg);
      } else {
        const res = await axios.post(
          "/api/category",
          { name: category },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        alert(res.data.msg);
      }
      setCategory("");
      setCallBack(!callback);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const editCategory = (id, name) => {
    setId(id);
    setCategory(name);
    setOnEdit(true);
  };
  const deleteCategory = async (id) => {
    try {
      const res = await axios.delete(`/api/category/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      alert(res.data.msg);
      setCallBack(!callback);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <div className="container mt-10">
      <h2 className="heading-h1">Thêm mới Loại SP</h2>
      <div className="form__box p-2">
        <form onSubmit={createCategory}>
          <div className="form-element">
            <input
              type="text"
              name="category"
              value={category}
              placeholder="Enter category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-new">
            {onEdit ? "Cập nhật" : "Lưu"}
          </button>
        </form>
      </div>
      <div className="col-12">
        <div className="box">
          <div className="box-header">Recent orders</div>
          <div className="box-body overflow-scroll">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên</th>
                  <th>Ngày tạo</th>
                  <th>Sửa</th>
                  <th>Xóa</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>
                      <span>{item.name}</span>
                    </td>
                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button
                        onClick={() => editCategory(item._id, item.name)}
                        className="order-status order-ready border-none"
                      >
                        Sửa
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteCategory(item._id)}
                        className="order-status order-ready border-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
