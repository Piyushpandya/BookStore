import CouresHeading from "./CourseHeading";
import Navbar from "./Navbar";
import list from "../../public/list.json";
import Card from "./Card";
const Courses = () => {
  return (
    <>
      <Navbar />
      <CouresHeading />
      <div className="flex flex-wrap ml-20 mr-20 mt-10">
        {list.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};
export default Courses;
