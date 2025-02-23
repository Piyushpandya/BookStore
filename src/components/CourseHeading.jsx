import { Link } from "react-router";

const CouresHeading = () => {
  return (
    <>
      <div className="heading text-3xl flex justify-center items-center  mt-30 font-semibold">
        <h1>
          We're delighted to have you{" "}
          <span className="text-pink-500">Here!:)</span>
        </h1>
      </div>
      <div className="para ml-20 mr-20 mt-10">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
          voluptatem omnis accusantium. Doloribus unde laudantium nemo sequi
          optio culpa impedit facere? Perferendis voluptates corrupti, accusamus
          exercitationem magnam error quia enim. Ad reiciendis a adipisci cum
          sequi sunt! Quidem tempore doloremque cumque ipsum sed sunt tempora
          omnis autem esse iure consectetur qui veritatis ipsam deserunt beatae,
          adipisci nam dolorum architecto optio?
        </p>
      </div>
      <div className="back mt-10 mb-10 flex justify-center items-center ">
        <div className="btn h-10 w-20 p-3 flex justify-center items-center  rounded-2xl  bg-pink-400">
          <Link to="/"> back</Link>
        </div>
      </div>
    </>
  );
};
export default CouresHeading;
