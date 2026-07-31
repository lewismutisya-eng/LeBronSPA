export default function PosterLayout(props) {
  return (
    <div className="flex flex-col md:flex-row w-full bg-black min-h-screen text-white">
      {props.children}
    </div>
  );
}
