const Donation = ({ donationData }) => {
  return (
    <>
      <h1>
        Total Donation Collected:
        {donationData.reduce((acc, curr) => acc + curr.Donation, 0)}
      </h1>
    </>
  );
};
export default Donation;
