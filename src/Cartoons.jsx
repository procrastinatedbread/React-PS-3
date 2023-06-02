const Cartoons = ({ cartoons, expectedSuperpower }) => {
  return (
    <>
      {cartoons
        .filter(({ id, name, superpower, magnitude }) => {
          return magnitude >= 10;
        })
        .map(({ id, name, superpower, magnitude }) => {
          return (
            <li key={id}>
              Name: {name}, Superpower: {superpower}, Magnitude: {magnitude}
            </li>
          );
        })}
      {cartoons
        .filter(({ magnitude }) => {
          return magnitude % 2 === 0;
        })
        .map(({ id, name }) => {
          return <h1 key={id}>{name}</h1>;
        })}
      {cartoons
        .filter(({ superpower }) => {
          return superpower === expectedSuperpower;
        })
        .map(({ id, name, superpower, magnitude }) => {
          return (
            <h1 key={id}>
              {name}-{superpower}-{magnitude}
            </h1>
          );
        })}
    </>
  );
};
export default Cartoons;
