const Bouquet = ({ bouquet }) => {
  return (
    <>
      {bouquet.map(({ id, flowers, price }) => {
        if (flowers.includes("rose"))
          return <h1 key={id}>Price of bouquet with roses : {price} </h1>;
      })}
      <ol>
        {bouquet.map(({ id, flowers, price }) => {
          if (price > 2000) {
            return flowers.map((flower) => {
              return <li>{flower}</li>;
            });
          }
        })}
      </ol>
    </>
  );
};
export default Bouquet;
