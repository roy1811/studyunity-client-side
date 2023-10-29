import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { useSelector } from "react-redux";

SwiperCore.use([Pagination]);
import Link from "next/link";

const CourseDetailsLeftSide = ({ courseData }) => {
  // distructure courseData
  const { category, date, img_bg, review, teacher_img, tutor_name, title } =
    courseData;
  // all courses
  const courses = useSelector((state) => state.courses.allCourses);
  return (
    <>
      <div className="col-xxl-8 col-xl-8 col-lg-8">
        <div className="course__wrapper">
          <div className="page__title-content mb-25">
            <div className="breadcrumb__list breadcrumb__list-2 mb-10">
              <span>
                <a href="#">Home</a>
              </span>
              <span className="dvdr">
                <i className="fa-regular fa-angle-right"></i>
              </span>
              <span>Courses</span>
            </div>
            <span className="breadcrumb__title-pre">{category}</span>
            <h5 className="breadcrumb__title-2">{title}</h5>
          </div>
          <div className="course__meta-2 d-sm-flex align-items-center mb-30">
            <div className="course__teacher-3 d-flex align-items-center mr-70 mb-30">
              <div className="course__teacher-thumb-3 mr-15">
                <image src={teacher_img} alt="" />
              </div>
              <div className="course__teacher-info-3">
                <h5>Teac</h5>
                <p>
                  <a href="#">{tutor_name}</a>
                </p>
              </div>
            </div>
            <div className="course__update mr-80 mb-30">
              <h5>Last Update:</h5>
              <p>{date}</p>
            </div>
            <div className="course__rating-2 mb-30">
              <h5>Review:</h5>
              <div className="course__rating-inner d-flex align-items-center">
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
                <p>{review}</p>
              </div>
            </div>
          </div>
          <div className="course__tab-content mb-95">
            <div className="tab-content" id="courseTabContent">
              <div
                className="tab-pane fade show active"
                id="description"
                role="tabpanel"
                aria-labelledby="description-tab"
              >
                <div className="course__description">
                  <h3>Course Overview</h3>
                  <p>
                    Only a quid me old mucker squiffy tomfoolery grub cheers
                    ruddy cor blimey guvnor in my flat, up the duff Eaton car
                    boot up the kyver pardon you A bit of how your father David
                    skive off sloshed, dont get shirty with me chip shop
                    vagabond crikey bugger Queen English chap. Matie boy nancy
                    boy bite your arm off up the kyver old no biggie fantastic
                    boot, David have it show off show off pick your nose and
                    blow off lost the plot porkies bits and bobs only a quid
                    bugger all mate, absolutely bladdered bamboozled its your
                    round dont get shirty with me down the pub well. Give us a
                    bell bits and bobs Charles he lost his bottle super my lady
                    cras starkers bite your arm off Queens English, pardon me
                    horse play Elizabeth a blinding shot chinwag knees up do one
                    David, blag cup of tea Eaton so I said bleeding haggle James
                    Bond cup of char. Gosh William ummm Im telling crikey burke
                    I dont want no agro A bit of how your father bugger all mate
                    off his nut that, what a plonker cuppa owt to do with me
                    nancy boy show off show off pick your nose and blow off
                    spiffing good time lavatory me old mucker, chimney pot what
                    a load of rubbish boot squiffy lost the plot brolly wellies
                    excuse my french.
                  </p>
                  <h3>Highlights</h3>
                  <table className="table table-striped style_table">
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <strong>Full name</strong>
                          </p>
                        </td>
                        <td>
                          <p>
                            International Management Institute IMI New Delhi
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>Founded year</strong>
                          </p>
                        </td>
                        <td>
                          <p>1981</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>Located City</strong>
                          </p>
                        </td>
                        <td>
                          <p>New Delhi</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>Entrance Exam</strong>
                          </p>
                        </td>
                        <td>
                          <p>CAT</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>Approved by</strong>
                          </p>
                        </td>
                        <td>
                          <p>AICTE, NBA</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="course__tag-4 mb-35 mt-35">
                    <i className="fal fa-tag"></i>
                    <a href="#">Big data,</a>
                    <a href="#">Data analysis,</a>
                    <a href="#">Data modeling</a>
                  </div>
                  <div className="course__description-list mb-45">
                    <h4>What is the Target Audience?</h4>
                    <ul>
                      <li>
                        {" "}
                        <i className="fa-solid fa-check"></i> Business managers,
                        leaders
                      </li>
                      <li>
                        {" "}
                        <i className="fa-solid fa-check"></i> Downloadable
                        lectures, code and design assets for all projects
                      </li>
                      <li>
                        {" "}
                        <i className="fa-solid fa-check"></i> Anyone who is
                        finding a chance to get the promotion
                      </li>
                    </ul>
                  </div>
                  <div className="course__instructor mb-45">
                    <h3>Other Instructors</h3>
                    <div className="course__instructor-wrapper d-md-flex align-items-center">
                      <div className="course__instructor-item d-flex align-items-center mr-70">
                        <div className="course__instructor-thumb mr-20">
                          <image
                            src="/assets/img/course/tutor/course-tutor-4.jpg"
                            alt=""
                          />
                        </div>
                        <div className="course__instructor-content">
                          <h3>Eleanor Fant</h3>
                          <p>Instructor</p>
                        </div>
                      </div>
                      <div className="course__instructor-item d-flex align-items-center mr-70">
                        <div className="course__instructor-thumb mr-20">
                          <image
                            src="/assets/img/course/tutor/course-tutor-3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="course__instructor-content">
                          <h3>Lauren Stamps</h3>
                          <p>Teacher</p>
                        </div>
                      </div>
                      <div className="course__instructor-item d-flex align-items-center mr-70">
                        <div className="course__instructor-thumb mr-20">
                          <image
                            src="/assets/img/course/tutor/course-tutor-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="course__instructor-content">
                          <h3>Jonquil Von</h3>
                          <p>Associate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="curriculum"
                role="tabpanel"
                aria-labelledby="curriculum-tab"
              >
                <div className="course__curriculum">
                  <h3>
                    <strong>
                      International Management Institute Courses 2023
                    </strong>
                  </h3>
                  <p>
                    International Management Institute Delhi Courses include
                    management study programme. Here are the details about the
                    duration and fee structure of the particular courses.
                  </p>
                  <table className="table table-striped style_table">
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <strong>Management Courses</strong>
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>Years</strong>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>PGDHRM</p>
                        </td>
                        <td>
                          <p>2 years</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>PGDM BFS</p>
                        </td>
                        <td>
                          <p>2 years</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>PGDM</p>
                        </td>
                        <td>
                          <p>2 years</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>PGDM Executive</p>
                        </td>
                        <td>
                          <p>1 year</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Fellow program in management</p>
                        </td>
                        <td>
                          <p>4 years</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Executive- FPM</p>
                        </td>
                        <td>
                          <p>4 years</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h2>
                    <strong>IMI Delhi MBA Fees 2023</strong>
                  </h2>
                  <p>
                    As mentioned above, the International Management Institute
                    New Delhi is a reputed private business institute situated
                    in National Capital. Here is the complete International
                    Management Institute IMI Delhi MBA Fees 2023 that includes
                    hostel fee and mess fee.
                  </p>
                  <table className="table table-striped style_table">
                    <tbody>
                      <tr>
                        <td>
                          <p>
                            <strong>Courses</strong>
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>Total Fees</strong>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>PGDHRM</p>
                        </td>
                        <td>
                          <p>18,34,900 INR</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>PGDM BFS</p>
                        </td>
                        <td>
                          <p>18,34,900 INR</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>PGDM</p>
                        </td>
                        <td>
                          <p>18,34,900 INR</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>PGDM Executive</p>
                        </td>
                        <td>
                          <p>12,17,500 INR</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Fellow Programme in Management</p>
                        </td>
                        <td>
                          <p>Yet to be changed</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Executive- FPM</p>
                        </td>
                        <td>
                          <p>502,000 INR (Excluding hostel)</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="review"
                role="tabpanel"
                aria-labelledby="review-tab"
              >
                <div className="course__review">
                  <h3>
                    <strong>IMI Eligibility Criteria 2023</strong>
                  </h3>
                  <p>
                    IMI Eligibility Criteria 2023 is compulsory to fulfill by
                    the students seeking admission in the Institute. If any
                    candidate does not manage to fulfill below-mentioned
                    criteria then he/she will be considered as disqualified.
                  </p>
                  <ul>
                    <li>
                      50% marks in bachelors degree from a valid university or
                      college.
                    </li>
                    <li>
                      Some relaxation will be offered to eligible students
                    </li>
                    <li>
                      Graduation final year students are allowed to apply for
                      Admission but they have to submit their final documents
                      before 30th Sept 2023.
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="member"
                role="tabpanel"
                aria-labelledby="member-tab"
              >
                <h3>
                  <strong>IMI Admission Process 2023</strong>
                </h3>
                <p>
                  IMI Admission 2023 will be invited once the candidate fulfils
                  the IMI eligibility criteria. Follow the information about the
                  IMI Admission and submit important documents within given
                  deadlines. Click Here for Getting complete information related
                  to Admission 2023.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailsLeftSide;
