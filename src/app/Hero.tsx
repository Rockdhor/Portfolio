export function Hero() {
  return (
    <div className="jumbotron jumbotron-fluid text-light screenfull d-flex align-items-center" id="hero">
      <div className="container">
        <h1>
          <span className="allen">allen</span> here.
        </h1>
        <h2 className="hero-subheader">
          i make stuff sometimes
        </h2>
        <h3 className="hero-subheader">
          check it out
        </h3>
        <a href="#about">
          <div id="down-arrow">
            <i className="bi bi-arrow-down mx-auto"></i>
          </div>
        </a>
      </div>
    </div>
  );
}
