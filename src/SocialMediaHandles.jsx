function SocialMediaHandles() {
  const medias = ["fa fa-facebook", "fa fa-twitter", "fa fa-linkedin"];
  return (
    <div className="socialmedia-container">
      {medias.map((media, index) => (
        <i key={index} className={media} aria-hidden="true"></i>
      ))}
    </div>
  );
}
export default SocialMediaHandles;
