import React from "react";

const Blog = () => {
  return (
    <section className="container w-full md:px-8">
      <div>
        <h1 className="heading first-letter:text-2xl font-semibold text-lg py-4">
          This is about the nature
        </h1>
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 place-items-center">
          {/* image section */}
          <div>
            
          </div>
          {/* content section */}
          <div className=" grid grid-cols-1 sm:grid-cols-1">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
