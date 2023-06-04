import { useAlbumState } from "../utility/albumState";

function Carousel() {
  const album = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet.",
      thumbnail: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit amet.",
      thumbnail: "https://via.placeholder.com/150/61a65",
    },
    {
      id: 3,
      name: "Lorem ipsum dolor sit amet.",
      thumbnail: "https://via.placeholder.com/150/8985dc",
    },
    {
      id: 4,
      name: "Lorem ipsum dolor sit amet.",
      thumbnail: "https://via.placeholder.com/150/392537",
    },
    {
      id: 5,
      name: "Lorem ipsum dolor sit amet.",
      thumbnail: "https://via.placeholder.com/150/4f5b8d",
    },
    {
      id: 6,
      name: "Lorem ipsum dolor sit amet.",
      thumbnail: "https://via.placeholder.com/150/392537",
    },
    {
      id: 7,
      name: "Lorem ipsum dolor sit amet.",
      thumbnail: "https://via.placeholder.com/150/61a65",
    },
    {
      id: 8,
      name: "Lorem ipsum dolor sit amet.",
      thumbnail: "https://via.placeholder.com/150/8985dc",
    },
    {
      id: 9,
      name: "Lorem ipsum dolor sit amet.",
      thumbnail: "https://via.placeholder.com/150/4f5b8d",
    },
    {
      id: 10,
      name: "Lorem ipsum dolor sit amet.",
      thumbnail: "https://via.placeholder.com/150/29fe9f",
    },
  ];

  const { setActiveAlbum, activeAlbum } = useAlbumState();

  return (
    <div className="mx-3 mb-3 pt-5 pb-2 overflow-x-auto sticky top-0 z-10 bg-white">
      <div className="flex gap-2 w-[500vw] md:w-[200vw] lg:w-[150vw] items-center">
        {album.map((i) => (
          <div
            onClick={() => setActiveAlbum(i.id)}
            className={`${
              activeAlbum !== i.id
                ? null
                : "bg-orange-400 rounded-lg mb-5 md:pb-3 pb-1"
            }`}
            key={i.id}
          >
            <img
              className="w-96 h-28 rounded-lg"
              src={i.thumbnail}
              alt={i.name}
            />
            {activeAlbum !== i.id ? (
              <p className="text-sm text-slate-500">{i.id} of 10</p>
            ) : (
              <p className="px-3 text-sm text-white py-1">{i.name}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
