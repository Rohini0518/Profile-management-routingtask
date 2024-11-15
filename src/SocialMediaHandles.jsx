function SocialMediaHandles() {
  const medias = ["facebook", "twitter", "linkedin"];
  return (
    <div className="social-media-container">
      {medias.map((media, index) => (
        <i key={index} className={`fa fa-${media}`} aria-hidden="true"></i>
      ))}
    </div>
  );
}
export default SocialMediaHandles;
