import banner from "../../public/banner.jpg";

const Banner = () => {
  return (
    <div className="container  flex p-5">
      <div className="left w-1/2 ml-18 mt-25">
        <h1 className=" text-4xl font-bold">
          Hello , Welcome here to learn something
          <span className="ml-2 text-4xl text-pink-500 font-bold">
            new everday !!!
          </span>
        </h1>
        <p className="mt-9">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo
          perspiciatis fugiat facilis ducimus, consequatur quibusdam? Modi ipsum
          voluptates, a eaque aliquid nostrum cupiditate voluptatum consequuntur
          quam temporibus dolores dolorum.
        </p>
        <input
          className="h-10 w-110 border rounded-xl p-3 mt-8"
          type="email"
          placeholder="Email for login"
        />
        <button className="bg-pink-300 h-10 w-20 rounded block mt-5">
          Submit
        </button>
      </div>
      <div className="right w-1/2 ">
        <img src={banner} className="w-122 h-122 ml-20  " alt="" />
      </div>
    </div>
  );
};
export default Banner;
