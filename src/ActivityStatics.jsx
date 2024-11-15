function ActivityStatics() {
  const statics = ["fa fa-comments", "fa fa-download", "fa fa-thumbs-up"];
  return (
    <div>
      <div className="activity-status">
        {statics.map((item, index) => (
          <i key={index} className={item} aria-hidden="true"></i>
        ))}
      </div>
    </div>
  );
}
export default ActivityStatics;
