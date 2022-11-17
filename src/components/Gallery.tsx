interface GalleryProps {
  pictures: string[];
}

export const Gallery = ({ pictures }: GalleryProps) => {
  return (
    <ul className="flex">
      {pictures.map((pic: string, idx) => (
        <li key={idx}>
          <img className="rounded" src={pic} alt="Attached images" />
        </li>
      ))}
    </ul>
  );
};
