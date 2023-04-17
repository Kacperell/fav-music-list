import type { Album } from "@/types";
import short from "short-uuid";
class AlbumStorage {
  private readonly STORAGE_KEY = "favMusicList";

  public getAlbums(): Album[] {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    if (storedData) {
      return JSON.parse(storedData);
    }
    return [];
  }

  private saveAlbums(albums: Album[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(albums));
  }

  public addAlbum({ name }: Pick<Album, "name">): void {
    const albums = this.getAlbums();
    const newAlbum: Album = {
      id: short().new(),
      name,
      isBest: false,
      dateAdded: new Date(),
    };
    albums.push(newAlbum);
    this.saveAlbums(albums);
  }

  public removeAlbum(id: string): void {
    const albums = this.getAlbums().filter((album) => album.id !== id);
    this.saveAlbums(albums);
  }

  public updateAlbum(id: string, updatedAlbum: Partial<Album>): void {
    const albums = this.getAlbums().map((album) => {
      if (album.id === id) {
        return {
          ...album,
          ...updatedAlbum,
        };
      }
      return album;
    });
    this.saveAlbums(albums);
  }
}

export default new AlbumStorage();
