import React from 'react';
import left_circle from "../../assets/img/icon-feather-arrow-left-circle.svg";
import right_circle from "../../assets/img/icon-feather-arrow-right-circle.svg";

const Products = () => {
  return (
    <section id="products" className="section products"> 
      <div className="products__content">
        <div className="products__cards">
          <div>
            <h3>Sed ut perspiciatis</h3>
            <h2>Nemo Enim</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <div className="products__card-navs">
            <a className="button-left"
              ><img
                src={left_circle}
                alt="left"
            /></a>
            <a className="button-right"
              ><img
                src={right_circle}
                alt="right"
            /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;