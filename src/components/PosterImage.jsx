export default function PosterImage(props) {
  return (
    <div className="w-full h-full">
      <img 
        src={props.imageSource} 
        alt={props.imageAlt} 
        className="w-full h-full object-cover block"
      />
    </div>
  );
}
