import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

const Testimonials = () => {
  // testimonialData
  const testimonialData = [
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
      img: "assets/img/testimonial/testimonial-1.jpg",
      name: "Neha Singh",
      admission: "University name",
      reviewText: "Text",
      review: "Great assistance!",
    },
    {
      id: 3,
      img: "assets/img/testimonial/testimonial-1.jpg",
      name: "Neha Singh",
      admission: "University name",
      reviewText: "Text",
      review: "Great assistance!",
    },
    {
      id: 4,
      img: "assets/img/testimonial/testimonial-1.jpg",
      name: "Neha Singh",
      admission: "University name",
      reviewText: "Text",
      review: "Great assistance!",
    },
    {
      id: 5,
      img: "assets/img/testimonial/testimonial-1.jpg",
      name: "Neha Singh",
      admission: "University name",
      reviewText: "Text",
      review: "Great assistance!",
    },
  ];
  return (
    <>
      <section className="testimonial__area pt-0 pb-120 ">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-2 mb-40 text-center">
                <span className="section__title-pre-2">Testimonials</span>
                <h3 className="section__title-2">What our Students Say.</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="testimonial__slider">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  className="testimonial__slider"
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 6000 }}
                  breakpoints={{
                    550: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {testimonialData.map((testimonial) => {
                    return (
                      <SwiperSlide key={testimonial.id}>
                        <div className="testimonial__item transition-3 text-center white-bg">
                          <div className="testimonial__avater">
                            <img src={testimonial.img} alt="" />
                          </div>
                          <div className="testimonial__text">
                            <h4>{testimonial.review}</h4>
                            <p>{testimonial.reviewText}</p>
                          </div>
                          <div className="testimonial__avater-info mb-5">
                            <h3>{testimonial.name}</h3>
                            <span>{testimonial.title}</span>
                          </div>
                          <div className="testimonial__rating">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa-solid fa-star"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-solid fa-star"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-solid fa-star"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-solid fa-star"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-solid fa-star"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
