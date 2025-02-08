'use client';
import Toast from 'bootstrap/js/dist/toast.js'
export function Contact() {
  return (
    <div className="jumbotron jumbotron-fluid screenfull d-flex align-items-center" id="contact">
      <div className="container">
        <h1>contact me</h1>
        <hr />
        <h2 className="fs-1">let's connect</h2>
        <p className="fs-3">if you want to reach out for absolutely any reason, my inbox is always open</p>
        <p className="fs-3">e-mail me at: <span className="allen" id="e-mail" onClick={() => (
          navigator.clipboard.writeText("allenschmerler at gmail dot com".replace(" at ", "@").replace(" dot ", ".")).then(() => Toast.getOrCreateInstance(document.getElementById('liveToast')).show())
        )}>allenschmerler at gmail dot com</span> <i className="bi bi-arrow-left mx-auto" id="mailArrow"></i></p>
        <p className="fs-3">you can also use any of my social media links</p>
        <div className="fs-3 mb-3 d-flex " id="links">
          <div>
            <a href="https://github.com/Rockdhor" className="allen link" target="_blank">github</a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/allen-schmerler" className="allen link" target="_blank">linkedin</a>
          </div>
        </div>
        <div className="fs-3" id="footer">
          {"© allen schmerler - " + new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
