
const DetailsTabItems = () => {
   return (
      <>
         <div className="course__tab-2 mb-10">
            <ul className="nav nav-tabs" id="courseTab" role="tablist">
               <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true"><i className="fa-regular fa-medal"></i> <span>College info</span> </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button className="nav-link " id="curriculum-tab" data-bs-toggle="tab" data-bs-target="#curriculum" type="button" role="tab" aria-controls="curriculum" aria-selected="false"><i className="fa-regular fa-book-blank"></i> <span>Courses & Fees</span> </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false"> <i className="fa-regular fa-star"></i> <span>Eligiblity</span> </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button className="nav-link" id="member-tab" data-bs-toggle="tab" data-bs-target="#member" type="button" role="tab" aria-controls="member" aria-selected="false"> <i className="fal fa-user"></i> <span>Admission Process</span> </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button className="nav-link" id="member-tab" data-bs-toggle="tab" data-bs-target="#member" type="button" role="tab" aria-controls="member" aria-selected="false"> <i className="fal fa-user"></i> <span>Document Required</span> </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button className="nav-link" id="member-tab" data-bs-toggle="tab" data-bs-target="#member" type="button" role="tab" aria-controls="member" aria-selected="false"> <i className="fal fa-user"></i> <span>Cut-off</span> </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button className="nav-link" id="member-tab" data-bs-toggle="tab" data-bs-target="#member" type="button" role="tab" aria-controls="member" aria-selected="false"> <i className="fal fa-user"></i> <span>Ranking</span> </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button className="nav-link" id="member-tab" data-bs-toggle="tab" data-bs-target="#member" type="button" role="tab" aria-controls="member" aria-selected="false"> <i className="fal fa-user"></i> <span>Imp Dates21a</span> </button>
               </li>
            </ul>
         </div>

         
      </>
   );
};

export default DetailsTabItems;