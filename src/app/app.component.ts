import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faceSnaps: FaceSnap[] = [];

  ngOnInit(): void {
    this.faceSnaps = [
      {
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
        title: 'Peter parker',
        description: 'Spiderman',
        createdDate: new Date(),
        snaps: 10,
        imageUrl:
          'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
        snapped: false,
      },

      {
        title: 'Three rock mountain',
        description: 'A mountain with three rocks',
        createdDate: new Date(),
        snaps: 10,
        imageUrl:
          'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
        snapped: false,
        localisation: 'New York',
      },
    ];
  }
}
