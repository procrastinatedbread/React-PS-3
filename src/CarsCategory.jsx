const CarsCategory = ({ cars }) => {
  const carCategories = cars.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = 1;
    } else {
      acc[curr.category]++;
    }
    return acc;
  }, {});
  console.log(carCategories);

  return (
    <>
      {Object.keys(carCategories).map((item) => {
        return (
          <p key={item}>
            {item}:{carCategories[item]}
          </p>
        );
      })}
    </>
  );
};
export default CarsCategory;
