import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import EnrolledModal from '../common/EnrolledModal';
import Link from 'next/link';
import SidebarRelatedCourse from './SidebarRelatedCourse';
import { Modal } from 'react-responsive-modal';
import ReactPlayer from "react-player";
import { addToCart } from '../../redux/features/cartSlice';

const CourseDetailsRightSide = () => {
 
   return (
      <>

         

         <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="course__sidebar pl-70 p-relative">
               
               
               {/*  SidebarRelatedCourse */}
               <SidebarRelatedCourse />

            </div>
         </div>
         
      </>
   );
};

export default CourseDetailsRightSide;