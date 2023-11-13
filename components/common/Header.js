import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import links from "../../data/linkData";
import useSticky from "../../hooks/useSticky";
import { useRouter } from "next/router";
import { searchText } from "../../redux/features/coursesSlice";
import LoginData from "../../data/LoginMenuData";
import useAuth from "../../hooks/useAuth";
import Sidebar from "../common/SideBar";

const HomeTwoHeader = () => {
  // handle sidebar show
  const [show, setShow] = useState(false);
  // handle close
  const handleClose = () => setShow(false);
  // handle sidebar show
  const handleShow = () => setShow(true);
  //  sticky
  const { headerSticky } = useSticky();
  // searchValue
  const [searchValue, setSearchValue] = useState("");
  // dispatch
  const dispatch = useDispatch();
  // user
  const { user } = useAuth();
  // router
  const router = useRouter();
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) {
    } else {
      dispatch(searchText(searchValue));
      router.push("/search-courses");
    }
  };
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={
            headerSticky ? "header__area header__sticky" : "header__area "
          }
        >
          <div className="header__bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-8 col-xl-9 col-lg-10 col-md-6 col-6">
                  <div className="header__bottom-left d-flex align-items-center">
                    <div className="logo mt-10 mb-5">
                      <Link href="http://localhost:3000/">
                        <a>
                          <img src="assets/img/logo/logo.png" alt="logo" />
                        </a>
                      </Link>
                    </div>
                    <div className="main-menu main-menu-2 main-menu-border ml-30 pl-30 d-none d-lg-block">
                      <nav id="mobile-menu">
                        <ul>
                          {!user?.email &&
                            links.map((link) => {
                              return (
                                <li
                                  key={link.id}
                                  className={link.submenu ? `has-dropdown` : ""}
                                >
                                  <Link href={`${link.url}`}>
                                    <a>{link.name}</a>
                                  </Link>
                                  <ul className={link.submenu ? `submenu` : ""}>
                                    {link?.submenu?.map((sub_menu, index) => {
                                      return (
                                        <li key={sub_menu.id}>
                                          <Link href={`${sub_menu.url}`}>
                                            <a>{sub_menu.name}</a>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </li>
                              );
                            })}

                          {user?.email &&
                            LoginData.map((link) => {
                              return (
                                <li
                                  key={link.id}
                                  className={link.submenu ? `has-dropdown` : ""}
                                >
                                  <Link href={`${link.url}`}>
                                    <a>{link.name}</a>
                                  </Link>
                                  <ul className={link.submenu ? `submenu` : ""}>
                                    {link?.submenu?.map((sub_menu, index) => {
                                      return (
                                        <li key={sub_menu.id}>
                                          <Link href={`${sub_menu.url}`}>
                                            <a>{sub_menu.name}</a>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </li>
                              );
                            })}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-3 col-lg-2 col-md-6 col-6">
                  <div className="header__bottom-right d-flex justify-content-end align-items-center pl-30">
                    <div className="header__search w-100 d-none d-xl-block">
                      <form onSubmit={handleSubmit}>
                        <div className="header__search-input">
                          <input
                            onChange={(e) => setSearchValue(e.target.value)}
                            type="text"
                            placeholder="Search..."
                          />
                          <button className="header__search-btn">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.11117 15.2222C12.0385 15.2222 15.2223 12.0385 15.2223 8.11111C15.2223 4.18375 12.0385 1 8.11117 1C4.18381 1 1.00006 4.18375 1.00006 8.11111C1.00006 12.0385 4.18381 15.2222 8.11117 15.2222Z"
                                stroke="#031220"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M17 17L13.1334 13.1333"
                                stroke="#031220"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="header__hamburger ml-50 d-xl-none">
                      <button
                        type="button"
                        onClick={handleShow}
                        className="hamurger-btn"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default HomeTwoHeader;
