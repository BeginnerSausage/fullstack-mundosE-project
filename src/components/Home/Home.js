import React from 'react';


const Home = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <h1>Sed ut perspiciatis<br />unde omnis iste natus</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error<br />
          sit voluptatem accusantium doloremque.
        </p>
        <button className="button">Read more</button>
        <div className="slider-nav">
          <ul>
            <li><a href="" className="slider-nav--active">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;