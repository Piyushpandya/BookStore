import Card from "./Card";
import lists from "../../public/list.json";

const Cards = () => {
  let list = lists.filter((data) => data.price !== 0);
  // console.log(list);
  return (
    <>
      <div className="contain mt-5 ml-22 mr-20">
        <h2 className="font-bold mt-6 text-xl">Free Offered Courses</h2>
        <p className="mt-5 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id
          dolore placeat, minima laudantium blanditiis repudiandae nesciunt quo
          eligendi, quam iure mollitia. Assumenda quia suscipit fuga optio
          expedita rerum nihil.
        </p>
        <div className="cards flex flex-wrap">
          {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Cards;
