interface GalleryProps {
  pictures: string[];
}

export const Gallery = ({ pictures }: GalleryProps) => {
  return (
    <ul className="flex mb-14 mt-3">
      {pictures.map((pic: string, idx) => (
        <li key={idx} className="mr-3 last:mr-0">
          <img className="rounded" src={pic} alt="Attached images" />
        </li>
      ))}
    </ul>
  );
};
