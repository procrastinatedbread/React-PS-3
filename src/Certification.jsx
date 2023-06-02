const Certification = ({ studentData }) => {
  const mean =
    studentData.reduce((acc, curr) => acc + curr.marks, 0) / studentData.length;
  if (mean > 80) {
    return <h1>Certification approved</h1>;
  }
  return (
    <>
      <h1>Certification Not approved</h1>
    </>
  );
};
export default Certification;
