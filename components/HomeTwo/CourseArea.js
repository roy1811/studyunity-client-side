import Link from "next/link";
import { useSelector } from "react-redux";
import { useGetCoursesQuery } from "../../redux/api/apiSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

const CourseArea = () => {
  const { data: courses, isLoading, error, isError } = useGetCoursesQuery();
  // mbbsabroadData
  const mbbsabroadData = [
    {
      id: 1,
      img: "assets/img/testimonial/testimonial-1.jpg",
      name: "Neha Singh",
      admission: "University name",
      reviewText: "Text",
      review: "Great assistance!",
    },
    {
      id: 2,
      img: "assets/img/mbbsabroad/mbbsabroad-1.jpg",
      name: "Neha Singh",
      admission: "University name",
      reviewText: "Text",
      review: "Great assistance!",
    },
    {
      id: 3,
      img: "assets/img/mbbsabroad/mbbsabroad-1.jpg",
      name: "Neha Singh",
      admission: "University name",
      reviewText: "Text",
      review: "Great assistance!",
    },
    {
      id: 4,
      img: "assets/img/mbbsabroad/mbbsabroad-1.jpg",
      name: "Neha Singh",
      admission: "University name",
      reviewText: "Text",
      review: "Great assistance!",
    },
    {
      id: 5,
      img: "assets/img/mbbsabroad/mbbsabroad-1.jpg",
      name: "Neha Singh",
      admission: "University name",
      reviewText: "Text",
      review: "Great assistance!",
    },
  ];

  // decide to render
  let content = null;
  // loader
  if (isLoading && !isError) {
    content = (
      <div className="container">
        <h2 className="text-center pt-10 alert alert-info mt-50">Loading...</h2>
      </div>
    );
  }

  if (!isLoading && !isError && courses?.length === 0) {
    content = <h2>No Courses Found</h2>;
  }

  if (!isLoading && !isError && courses.length > 0) {
    content = (
      <div className="tab-content course__tab-content" id="course-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-all"
          role="tabpanel"
          aria-labelledby="nav-all-tab"
        >
          <>
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/imi-new-delhi">
                      <img
                        src="assets/img/course/management/imi.jpg"
                        alt="imi delhi"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/imi-new-delhi">New Delhi</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/imi-new-delhi">IMI, Delhi</a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/imi-new-delhi">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/gniot">
                      <img
                        src="assets/img/course/management/GNIOT.jpg"
                        alt="GNIOT"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/gniot">GreaterNoida</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt="BMI"
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/gniot">Greater Noida Institute of Technology</a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/gniot">
                          <a className="tp-btn-5 tp-btn-6 ">KnowMore</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/iilm-university">
                      <img
                        src="assets/img/course/management/IILM.jpg"
                        alt="IILM"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/iilm-university">Gurugram</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/iilm-university">IILM University, Gurugram</a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/iilm-university">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/lbsim-delhi">
                      <img
                        src="assets/img/course/management/lbsim.JPEG"
                        alt="Lbsim"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/course-details/622037c6ea7975d304b6b4f5">
                          Delhi
                        </a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/course-details/">LBSIM Delhi</a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/course-details/">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/bml-munjal-university">
                      <img
                        src="assets/img/course/management/BMI.JPEG"
                        alt="BMI"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="#">Gurugram</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/bml-munjal-university">BML Munjal University</a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/bml-munjal-university">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/imt-ghaziabad">
                      <img
                        src="assets/img/course/management/imt.jpg"
                        alt="imt"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/imt-ghaziabad">Ghaziabad</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/imt-ghaziabad">IMT Ghaziabad</a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/imt-ghaziabad">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>

        <div
          className="tab-pane fade"
          id="nav-trending"
          role="tabpanel"
          aria-labelledby="nav-trending-tab"
        >
          <>
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/bennett-university">
                      <img
                        src="assets/img/course/engineering/Bennett.jpg"
                        alt="bennett"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/bennett-university">Greater Noida</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/bennett-university">
                        Bennett University Greater Noida
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="bennett-university">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/dy-patil-college">
                      <img
                        src="assets/img/course/engineering/DYpatil.PNG"
                        alt="DYpatil"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/dy-patil-college">Pune</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/dy-patil-college">
                        DY Patil College of Engineering
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/dy-patil-college">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/niet">
                      <img
                        src="assets/img/course/engineering/NIET.WEBP"
                        alt="NIET"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/niet">Greater Noida</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/niet">NIET, Greater Noida</a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/niet">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/symbiosis-international-university">
                      <img
                        src="assets/img/course/engineering/Symbiosis.WEBP"
                        alt="Symbiosis"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/symbiosis-international-university">Pune</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/symbiosis-international-university">
                        Symbiosis International University
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/symbiosis-international-university">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/abes-engineering-college">
                      <img
                        src="assets/img/course/engineering/ABES.JPEG"
                        alt="ABES Engineering College"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/abes-engineering-college">Ghaziabad</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/abes-engineering-college">
                        ABES Engineering College
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/abes-engineering-college">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/gl-bajaj-institute">
                      <img
                        src="assets/img/course/engineering/GLbajaj.JPEG"
                        alt="GLbajaj"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/gl-bajaj-institute">Greater Noida</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/gl-bajaj-institute">
                        GL Bajaj Institute of Technology
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/gl-bajaj-institute">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>

        <div
          className="tab-pane fade"
          id="nav-featured"
          role="tabpanel"
          aria-labelledby="nav-featured-tab"
        >
          <>
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/bau-international-university">
                      <img
                        src="assets/img/course/mbbs_abroad/bau.jpg"
                        alt="bau"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/bau-international-university">Georgia</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt="Georgia"
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/bau-international-university">
                        Bau International University
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/bau-international-university">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/ingush-state-university">
                      <img
                        src="assets/img/course/mbbs_abroad/kazan.jpg"
                        alt="Ingush"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/ingush-state-university">Russia</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/ingush-state-university">
                        Ingush State University
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/ingush-state-university">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/kazakh-national-medical-university">
                      <img
                        src="assets/img/course/mbbs_abroad/kazakh.jpg"
                        alt="kazakh"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/kazakh-national-medical-university">
                          Kazakhstan
                        </a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/kazakh-national-medical-university">
                        kazakh national medical university
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/kazakh-national-medical-university">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/voronezh-state-medical-university">
                      <img
                        src="assets/img/course/mbbs_abroad/Voronezh.jpg"
                        alt="Voronezh"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/voronezh-state-medical-university">Russia</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/voronezh-state-medical-university">
                        Voronezh State Medical University
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/voronezh-state-medical-university">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/brokenshire-college">
                      <img
                        src="assets/img/course/mbbs_abroad/Brokenshire.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/brokenshire-college">Philippines</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/brokenshire-college">
                        Brokenshire College of Medicine
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/brokenshire-college">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/osh-state-medical-university">
                      <img
                        src="assets/img/course/mbbs_abroad/Osh.WEBP"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/osh-state-medical-university">Kyrgyzstan</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/osh-state-medical-university">
                        Osh State Medical University
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/osh-state-medical-university">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>

        <div
          className="tab-pane fade"
          id="nav-popular"
          role="tabpanel"
          aria-labelledby="nav-popular-tab"
        >
          <>
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/course-details/">
                      <img src="assets/img/course/bau.jpg" alt="bau" />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/course-details/">Georgia</a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/course-details/">
                        Bau International University, batumi
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/course-details/">
                          <a className="tp-btn-5 tp-btn-6 ">Know More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/course-details/">
                      <img
                        src="assets/img/course/mbbs_abroad/bau.jpg"
                        alt="bau"
                      />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/course-details/622037c6ea7975d304b6b4f5">
                          Georgia
                        </a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/course-details/622037c6ea7975d304b6b4f5">
                        Bau International University, batumi
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/about">
                          <a className="tp-btn-5 tp-btn-6 ">Apply Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/course-details/622037c6ea7975d304b6b4f5">
                      <img src="assets/img/course/bau.jpg" alt="" />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/course-details/622037c6ea7975d304b6b4f5">
                          Georgia
                        </a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/course-details/622037c6ea7975d304b6b4f5">
                        Bau International University, batumi
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/about">
                          <a className="tp-btn-5 tp-btn-6 ">Apply Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/course-details/622037c6ea7975d304b6b4f5">
                      <img src="assets/img/course/bau.jpg" alt="" />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/course-details/622037c6ea7975d304b6b4f5">
                          Georgia
                        </a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/course-details/622037c6ea7975d304b6b4f5">
                        Bau International University, batumi
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/about">
                          <a className="tp-btn-5 tp-btn-6 ">Apply Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/course-details/622037c6ea7975d304b6b4f5">
                      <img src="assets/img/course/bau.jpg" alt="" />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/course-details/622037c6ea7975d304b6b4f5">
                          Georgia
                        </a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/course-details/622037c6ea7975d304b6b4f5">
                        Bau International University, batumi
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/about">
                          <a className="tp-btn-5 tp-btn-6 ">Apply Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="course__item-2 transition-3 white-bg mb-30 fix">
                  <div className="course__thumb-2 w-img fix course_thumb_height">
                    <a href="/course-details/622037c6ea7975d304b6b4f5">
                      <img src="assets/img/course/bau.jpg" alt="" />
                    </a>
                  </div>
                  <div className="course__content-2">
                    <div className="course__top-2 d-flex align-items-center justify-content-between">
                      <div className="course__tag-2">
                        <a href="/course-details/622037c6ea7975d304b6b4f5">
                          Georgia
                        </a>
                      </div>
                      <div className="course__price-2">
                        <span>
                          <div className="course__tutor-2">
                            <a href="#">
                              <img
                                src="assets/img/course/flag-georgia.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                        </span>
                      </div>
                    </div>
                    <h3 className="course__title-2">
                      <a href="/course-details/622037c6ea7975d304b6b4f5">
                        Bau International University, batumi
                      </a>
                    </h3>
                    <div className="course__bottom-2 d-flex align-items-center justify-content-center">
                      <div className="">
                        <Link href="/about">
                          <a className="tp-btn-5 tp-btn-6 ">Apply Now</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    );
  }
  return (
    <>
      <section className="course__area grey-bg-4 pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-2 text-center mb-40">
                <span className="section__title-pre-2">Categories</span>
                <h3 className="section__title-2">Most Popular Courses</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="course__filter text-center mb-30">
                <nav>
                  <div
                    className="nav nav-tabs justify-content-center"
                    id="course-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-all-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-all"
                      type="button"
                      role="tab"
                      aria-controls="nav-all"
                      aria-selected="false"
                    >
                      Management
                    </button>
                    <button
                      className="nav-link"
                      id="nav-popular-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-trending"
                      type="button"
                      role="tab"
                      aria-controls="nav-trending"
                      aria-selected="false"
                    >
                      Engineering
                    </button>
                    <button
                      className="nav-link"
                      id="nav-featured-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-featured"
                      type="button"
                      role="tab"
                      aria-controls="nav-featured"
                      aria-selected="true"
                    >
                      MBBS Abroad
                    </button>
                    {/*<button className="nav-link" id="nav-trending-tab" data-bs-toggle="tab" data-bs-target="#nav-popular" type="button" role="tab" aria-controls="nav-popular" aria-selected="false">MBBS In India</button>
                     */}
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">{content}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseArea;
