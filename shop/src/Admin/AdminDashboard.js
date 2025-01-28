import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Card } from "react-icons/gi"; 
import { Input } from "./Input";
import { Button } from "./Button";
import { Card, CardContent } from "./Card";
import { Select, SelectTrigger, SelectContent, SelectItem } from "./Select";
import { Textarea } from './Textarea';

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [allowDiscount, setAllowDiscount] = useState(false);
  const [discount, setDiscount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the product object
    const productData = {
      title,
      description,
      price,
      category,
      discount: allowDiscount ? discount : null,
    };

    console.log("Product Data:", productData);

    // API call to save product to the database
    // Example:
    // fetch('/api/admin/products', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(productData),
    // }).then(response => response.json()).then(data => console.log(data));
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <a href="#addProduct" className="block text-sm">Add Product</a>
          </li>
           <li>
            <Link to="totalorders" className="block text-sm">Total Orders</Link>
          </li>
          <li>
            <Link to="users" className="block text-sm">Users</Link>
          </li>
          <li>
            <Link to="setting" className="block text-sm">Settings</Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter product title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter product description"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter product price"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <Select onValueChange={setCategory} required>
                <SelectTrigger className="w-full">
                  <span>{category || "Select a category"}</span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="books">Books</SelectItem>
                  <SelectItem value="home">Home</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="allowDiscount"
                checked={allowDiscount}
                onChange={() => setAllowDiscount(!allowDiscount)}
              />
              <label htmlFor="allowDiscount" className="text-sm font-medium">
                Allow Discount
              </label>
            </div>

            {allowDiscount && (
              <div>
                <label className="block text-sm font-medium mb-1">Discount (%)</label>
                <Input
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="Enter discount percentage"
                  min="0"
                  max="100"
                />
              </div>
            )}

            <Button type="submit" className="w-full bg-blue-600 text-white">
              Add Product
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
