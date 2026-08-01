export default function PosterBadge(props) {
  return (
    <span className="text-xs text-[#e67e22] tracking-[4px] font-bold block mb-2 uppercase">
      {props.badgeText}
    </span>
  );
}
