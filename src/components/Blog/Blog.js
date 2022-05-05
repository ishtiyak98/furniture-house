import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Blog = () => {
  return (
    <>
      <Header></Header>
      <div className="container py-5 my-4">
        <h1 className="text-center fw-bold mb-4">My Blogs</h1>

        <div className="item-card p-4 rounded-3 bg-black mb-4">
            <h3 className="mb-3 text-white">Difference between javascript and nodejs</h3>
            <p className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex animi maiores odit commodi necessitatibus laudantium ipsam! Cumque beatae deserunt non sed asperiores et, repellat repellendus consectetur quis, libero quibusdam similique ea, vel neque rem blanditiis soluta quaerat ab dolore possimus modi ducimus alias temporibus. Unde fuga velit delectus rem necessitatibus. Reiciendis laborum optio doloremque, repudiandae sapiente pariatur aliquam fugit distinctio obcaecati maxime eum. Illo eum quia provident nihil voluptatibus. Asperiores delectus fugit repudiandae corrupti? Adipisci assumenda porro odio ullam ducimus exercitationem provident deserunt explicabo nam omnis eveniet suscipit culpa dolores, voluptate amet, nisi voluptas? Id nemo aperiam non saepe itaque!
            </p>
        </div>

        <div className="item-card p-4 rounded-3 bg-black mb-4 ">
            <h3 className="mb-3 text-white">When should you use nodejs and when should you use mongodb?</h3>
            <p className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex animi maiores odit commodi necessitatibus laudantium ipsam! Cumque beatae deserunt non sed asperiores et, repellat repellendus consectetur quis, libero quibusdam similique ea, vel neque rem blanditiis soluta quaerat ab dolore possimus modi ducimus alias temporibus. Unde fuga velit delectus rem necessitatibus. Reiciendis laborum optio doloremque, repudiandae sapiente pariatur aliquam fugit distinctio obcaecati maxime eum. Illo eum quia provident nihil voluptatibus. Asperiores delectus fugit repudiandae corrupti? Adipisci assumenda porro odio ullam ducimus exercitationem provident deserunt explicabo nam omnis eveniet suscipit culpa dolores, voluptate amet, nisi voluptas? Id nemo aperiam non saepe itaque!
            </p>
        </div>

        <div className="item-card p-4 rounded-3 bg-black mb-4 ">
            <h3 className="mb-3 text-white">Differences between sql and nosql databases?</h3>
            <p className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex animi maiores odit commodi necessitatibus laudantium ipsam! Cumque beatae deserunt non sed asperiores et, repellat repellendus consectetur quis, libero quibusdam similique ea, vel neque rem blanditiis soluta quaerat ab dolore possimus modi ducimus alias temporibus. Unde fuga velit delectus rem necessitatibus. Reiciendis laborum optio doloremque, repudiandae sapiente pariatur aliquam fugit distinctio obcaecati maxime eum. Illo eum quia provident nihil voluptatibus. Asperiores delectus fugit repudiandae corrupti? Adipisci assumenda porro odio ullam ducimus exercitationem provident deserunt explicabo nam omnis eveniet suscipit culpa dolores, voluptate amet, nisi voluptas? Id nemo aperiam non saepe itaque!
            </p>
        </div>
        
        <div className="item-card p-4 rounded-3 bg-black mb-4 ">
            <h3 className="mb-3 text-white">What is the purpose of jwt and how does it work?</h3>
            <p className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex animi maiores odit commodi necessitatibus laudantium ipsam! Cumque beatae deserunt non sed asperiores et, repellat repellendus consectetur quis, libero quibusdam similique ea, vel neque rem blanditiis soluta quaerat ab dolore possimus modi ducimus alias temporibus. Unde fuga velit delectus rem necessitatibus. Reiciendis laborum optio doloremque, repudiandae sapiente pariatur aliquam fugit distinctio obcaecati maxime eum. Illo eum quia provident nihil voluptatibus. Asperiores delectus fugit repudiandae corrupti? Adipisci assumenda porro odio ullam ducimus exercitationem provident deserunt explicabo nam omnis eveniet suscipit culpa dolores, voluptate amet, nisi voluptas? Id nemo aperiam non saepe itaque!
            </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Blog;
