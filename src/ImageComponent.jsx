const ImageComponent = ({ imageLink, imageHeight, imageWidth }) => {
  return (
    <img
      src={imageLink}
      alt="alt Text"
      style={{
        height: `${imageHeight}px`,
        width: imageWidth
      }}
    />
  );
};
export default ImageComponent;
