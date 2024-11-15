function ActivityProgress() {
  const activityBars = [
    "activity-bar activebar",
    "activity-bar activebar",
    "activity-bar activebar",
    "activity-bar",
    "activity-bar",
  ];
  return (
    <div className="activity-tracker">
      {activityBars.map((bar, index) => (
        <div key={index} className={bar}></div>
      ))}
    </div>
  );
}
export default ActivityProgress;
