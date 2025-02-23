const Card = ({ item }) => {
  return (
    <div className="container cursor-pointer mt-8 m-2 p-5 border rounded-2xl w-105 min-h-50 shadow-2xl hover:scale-104 ">
      <div className="image">
        <img
          src="https://t3.ftcdn.net/jpg/10/52/96/46/360_F_1052964679_Z4iG4AtW53CYVihpkySWzwUkC7LB9a9w.jpg"
          alt=""
        />
      </div>
      <div className="flex justify-between mt-2">
        <div className="name">{item.name}</div>
        <div className="category">{item.category}</div>
      </div>
      <div className="title mt-3">{item.title}</div>
      <div className="flex justify-between mt-3">
        <div className="price">$ {item.price}</div>
        <button className="rounded-full bg-pink-500 hover:bg-pink-600 text-white h-8 w-20">
          buy
        </button>
      </div>
    </div>
  );
};
export default Card;
