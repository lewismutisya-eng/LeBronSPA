export default function PosterHeading(props) {
  return (
    <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide">
      {props.titleText}
    </h2>
  );
}
