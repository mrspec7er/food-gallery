import { create } from "zustand";

interface AlbumeStateType {
  activeAlbum: number;
  setActiveAlbum: (albumId: number) => void;
}

function updateActiveAlbum(
  activeAlbum: AlbumeStateType["activeAlbum"],
  albumId: number
) {
  return activeAlbum !== albumId ? albumId : 0;
}

const useAlbumState = create<AlbumeStateType>((set) => ({
  activeAlbum: 0,
  setActiveAlbum: (albumId) =>
    set((state) => ({
      activeAlbum: updateActiveAlbum(state.activeAlbum, albumId),
    })),
}));

export { useAlbumState };
