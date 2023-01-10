import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'King Martinien',
      description: 'King of the frontend developers ',
      createdDate: new Date(),
      snaps: 200,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      snapped: false,
      localisation: 'Paris',
    },
    {
      id: 2,
      title: 'Peter parker',
      description: 'Spiderman',
      createdDate: new Date(),
      snaps: 10,
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
      snapped: false,
    },

    {
      id: 3,
      title: 'Three rock mountain',
      description: 'A mountain with three rocks',
      createdDate: new Date(),
      snaps: 10,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
      snapped: false,
      localisation: 'New York',
    },
    {
      id: 4,
      title: 'un bon repas',
      description: 'un bon repas',
      createdDate: new Date(),
      snaps: 10,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      snapped: false,
      localisation: 'Paris',
    },
    {
      id: 5,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 47,
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      snapped: false,
    },
  ];

  /**
   *  Get all face snaps
   * @returns all face snaps
   */
  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  /**
   * Get a face snap by its id
   * @param faceSnapId The id of the snap
   * @returns a FaceSnap object corresponding to the id or throw an error
   */
  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find((faceSnap) => {
      faceSnap.id === faceSnapId;
    });

    if (faceSnap) {
      return faceSnap;
    } else {
      throw new Error('FaceSnap not found');
    }
  }

  /**
   * Snap a face snap
   * @param faceSnapId The id of the snap
   * @param snapType the type of the snap
   */
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
