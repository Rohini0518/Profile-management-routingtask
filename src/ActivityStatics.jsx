function ActivityStatics() {
  const statics = ["comments", "download", "thumbs-up"];
  return (
    <div>
      <div className="activity-status">
        {statics.map((item, index) => (
          <i key={index} className={`fa fa-${item}`} aria-hidden="true"></i>
        ))}
      </div>
    </div>
  );
}
export default ActivityStatics;
