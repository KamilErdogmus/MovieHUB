const MenuItem = ({ item }) => {
  return (
    <div className="cursor-pointer hover:text-blue-500">
      {item.name}
    </div>
  );
};

export default MenuItem;
