export default function PosterImage(props) {
  return (
    <div className="w-full h-full">
      <img 
        src={props.src} 
        alt={props.alt} 
        className="w-full h-full object-cover block"
      />
    </div>
  );
}
