import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" alt="" />
        <div className="absolute flex h-full items-center pl-12 gap-6 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
        <div className="text-white w-1/2 space-y-4">
          <h2 className="font-bold text-6xl">Affordable Price For Car Servicing</h2>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div className="space-x-5">
          <button className="btn bg-[#FF3811] text-white">Discover More</button>
          <button className="btn btn-outline btn-success ">Latest Project</button>
          </div>
        </div>
        </div>
        <div className="absolute flex justify-end transform gap-6 -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" alt="" />
        <div className="absolute flex h-full items-center pl-12 gap-6 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
        <div className="text-white w-1/2 space-y-4">
          <h2 className="font-bold text-6xl">Affordable Price For Car Servicing</h2>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div className="space-x-5">
          <button className="btn btn-error">Discover More</button>
          <button className="btn btn-outline btn-success">Latest Project</button>
          </div>
        </div>
        </div>
        <div className="absolute flex justify-end transform gap-6 -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" alt="" />
        <div className="absolute flex h-full items-center pl-12 gap-6 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
        <div className="text-white w-1/2 space-y-4">
          <h2 className="font-bold text-6xl">Affordable Price For Car Servicing</h2>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div className="space-x-5">
          <button className="btn btn-error">Discover More</button>
          <button className="btn btn-outline btn-success">Latest Project</button>
          </div>
        </div>
        </div>
        <div className="absolute flex justify-end transform gap-6 -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" alt="" />
        <div className="absolute flex h-full items-center pl-12 gap-6 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
        <div className="text-white w-1/2 space-y-4">
          <h2 className="font-bold text-6xl">Affordable Price For Car Servicing</h2>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div className="space-x-5">
          <button className="btn btn-error">Discover More</button>
          <button className="btn btn-outline btn-success">Latest Project</button>
          </div>
        </div>
        </div>
        <div className="absolute flex justify-end transform gap-6 -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
