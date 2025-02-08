'use client';
import Toast from 'bootstrap/js/dist/toast.js' // @ts-ignore
import { useRef } from 'react';

/* 
  There's a piece of JS logic here to make a toast pop up when the e-mail address is pressed.
  It is importing vanilla bootstrap for the toast which tries to access the document (which we don't use in here.)
  Currently it seems to be inconsequential but let's take note to fix it whenever possible by using the toast from the react-bootstrap module.
*/

export function Contact() {
  const toastRef = useRef(null)
  return (
    <div>
      <div className="jumbotron jumbotron-fluid screenfull d-flex align-items-center" id="contact">
      <div className="container">
        <h1>contact me</h1>
        <hr />
        <h2 className="fs-1">let's connect</h2>
        <p className="fs-3">if you want to reach out for absolutely any reason, my inbox is always open</p>
        <p className="fs-3">e-mail me at: <span className="allen" id="e-mail" onClick={() => (
          navigator.clipboard.writeText("allenschmerler at gmail dot com".replace(" at ", "@").replace(" dot ", ".")).then(() => Toast.getOrCreateInstance(toastRef.current!).show())
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
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" ref={toastRef} className="toast bg-dark text-light"  role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <strong className="me-auto">Allen Schmerler</strong>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body">
            Copied the e-mail address to the clipboard succesfully!
          </div>
        </div>
      </div>
    </div>
  );
}
