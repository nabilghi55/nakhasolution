interface DetailSignalRailProps {
  start?: string;
  end?: string;
  labels?: readonly [string, string, string];
}

export default function DetailSignalRail({
  start = "SOURCE",
  end = "DETAIL",
  labels = ["BRIEF", "SYSTEM", "OUTCOME"],
}: DetailSignalRailProps) {
  return (
    <div className="detail-signal-rail" aria-hidden="true">
      <span className="detail-signal-end">{start}</span>
      <div className="detail-signal-track">
        {labels.map((label) => (
          <span className="detail-signal-stop" key={label}>
            {label}
          </span>
        ))}
      </div>
      <span className="detail-signal-end detail-signal-end-last">{end}</span>
    </div>
  );
}
