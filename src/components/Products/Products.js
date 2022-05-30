import React from 'react';

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
            <a className="nav-left"
              ><img
                src="assets/images/icon-feather-arrow-left-circle.svg"
                alt=""
            /></a>
            <a className="nav-right"
              ><img
                src="assets/images/icon-feather-arrow-right-circle.svg"
                alt=""
            /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;