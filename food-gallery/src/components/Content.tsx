import { useQuery } from "@tanstack/react-query";
import queryFetch from "../utility/queryFetch";
import { useAlbumState } from "../utility/albumState";

export interface ContentType {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function Content() {
  const { activeAlbum } = useAlbumState();

  const query = useQuery({
    queryKey: ["photo"],
    queryFn: () => queryFetch("https://jsonplaceholder.typicode.com/photos"),
    enabled: Boolean(activeAlbum),
  });

  return (
    <div className="grid grid-cols-2 relative md:grid-cols-4 xl:grid-cols-6 gap-4 mx-3">
      {query.isInitialLoading ? <p>Loading..</p> : null}
      {activeAlbum
        ? query?.data?.map((i: ContentType) => (
            <div
              key={i.id}
              className={`${i.id % 2 === 1 ? "row-span-2" : "row-span-1"}`}
            >
              <img
                className={`${
                  i.id % 2 === 1 ? "h-64" : "h-32"
                } w-full rounded-lg`}
                src={i.thumbnailUrl}
                alt={i.title}
              />
            </div>
          ))
        : null}
      <img src="/add.png" className="fixed bottom-0 right-0" alt="addbutton" />
    </div>
  );
}

export default Content;
