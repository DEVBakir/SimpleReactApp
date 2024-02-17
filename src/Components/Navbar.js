import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faNavicon } from "@fortawesome/free-solid-svg-icons"
import img1 from "../img/shopping-bag.png"
import img2 from "../img/search-interface-symbol.png"
import img3 from "../img/heart.png"
import { Link } from "react-router-dom"

function Logo() {
  return (
    <a className="navbar-brand me-4 Logo-lg" href="/#">
    <img className="img-fluid" src="https://demo-61.woovinapro.com/wp-content/uploads/2022/04/logo.png" alt="" />
</a>
  )
}
function ListNavlg() {
  return (
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
            <li className="nav-item px-2 px-xl-4">
            <a className="nav-link text-black fw-500 fs-1rem" aria-current="page" href="/#">Home</a>
            </li>
            <li className="nav-item  px-xl-4 px-2 ">
            <a className="nav-link text-black fw-500 fs-1rem" href="/#">Shop</a>
            </li>
            <li className="nav-item  px-xl-4 px-2 ">
            <a className="nav-link text-black fw-500 fs-1rem" href="/#">Products</a>
            </li>
            <li className="nav-item  px-xl-4 px-2 ">
            <a className="nav-link text-black fw-500 fs-1rem" href="/#">Pages</a>
            </li>
            <li className="nav-item  px-xl-4 px-2 ">
            <a className="nav-link text-black fw-500 fs-1rem" href="/#">Blog</a>
            </li>
            <li className="nav-item  px-xl-4 px-2 ">
            <Link className="nav-link text-black fw-500 fs-1rem" to="/about">About Us</Link>
            </li>
            <li className="nav-item  px-xl-4 px-2 ">
            <a className="nav-link text-black fw-500 fs-1rem" href="/#">Contact Us</a>
            </li>          
        </ul>            
            </div>
  )
}
export default function Navbar() {

  function behaviorSideBar(event) {
    let divRoot = document.querySelector("#root");
    divRoot.classList.toggle("togglerActive");
    let ul = document.querySelector("#sideBarHeader")
    ul.classList.toggle("togglerActive")
  }
    return (
          <nav className="navbar navbar-expand-lg bg-white px-0  p-sm-3 p-lg-4 border">
          <div className="container-fluid container-lg">
              <Logo />
              <button className="navbar-toggler ps-0" type="button" onClick={behaviorSideBar}>
                <span className="navbar-toggler-icon"></span>
              </button>
            <ListNavlg />
            <div className="side-bar d-lg-none bg-white" id="sideBarHeader">
              <div className="quick-close-nav text-uppercase d-flex justify-content-start align-items-center fw-500"
                onClick={behaviorSideBar}>
                <span className="close-nav-btn">
                  X
                </span>
                Quick navigation
              </div>
              <div className="side-bar-body ">
                <form className="search-nav-form d-flex my-4">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success search-btn" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                </form>
                <div className="d-flex gap-3 justify-content-start ps-2 pb-2 mb-2">
                  <button className="main-btn p-2 px-3">
                    Mobile Menu
                  </button>
                  <button className="main-btn p-2 px-3 bg-secondary">
                    Categories
                  </button>
                </div>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-2">
            <li className="nav-item px-2 px-xl-4 py-2">
            <Link className="nav-link text-black fw-500 fs-1rem" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item  px-xl-4 px-2 py-2">
            <a className="nav-link text-black fw-500 fs-1rem" href="/#">Shop</a>
            </li>
            <li className="nav-item  px-xl-4 px-2 py-2">
            <a className="nav-link text-black fw-500 fs-1rem" href="/#">Products</a>
            </li>
            <li className="nav-item  px-xl-4 px-2 py-2">
            <a className="nav-link text-black fw-500 fs-1rem" href="/#">Pages</a>
            </li>
            <li className="nav-item  px-xl-4 px-2 py-2">
            <a className="nav-link text-black fw-500 fs-1rem" href="/#">Blog</a>
            </li>
            <li className="nav-item  px-xl-4 px-2 py-2">
            <Link className="nav-link text-black fw-500 fs-1rem" to="/about">About Us</Link>
            </li>
            <li className="nav-item  px-xl-4 px-2 py-2">
            <a className="nav-link text-black fw-500 fs-1rem" href="/#">Contact Us</a>
            </li>          
        </ul>
              </div>    
    </div>
    <div className="side-buttons ">
            <img className="img-fluid me-3 icon-search d-none d-lg-inline" src={img2} alt="" />
            <img className="img-fluid me-3 icon-heart d-none d-lg-inline" src={img3} alt="" />
            <img className="img-fluid icon-shop" src={img1} alt="" />

  </div>
  </div>            
      </nav>
    )
}