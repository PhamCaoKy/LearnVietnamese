
import { Carousel } from "@material-tailwind/react";
export default function CourseCarousel(props: any) {
  return (
    <div>
      <Carousel className='rounded-xl w-1/2 slider_img mx-auto'>
      <img
        src="https://duhocvietphat.edu.vn/sites/default/files/2020-10/bai%20dang%20tuan%2042%20thang%207-01-03.png"
        alt="image 1"
        className="h-{510px} w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover "
      />
      <img
        src="https://media.baobinhphuoc.com.vn/upload/video/large/day_tieng_viet_lop_1_tap_1_09101720112021.jpg"
        alt="image 3"
        className="h-{200px} w-full object-cover"
      />
      </Carousel>
    </div>
  )
}
