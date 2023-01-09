import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  ngOnInit(): void {}

  /**
   * @description This method is called when the user clicks on the snap button
   * @returns void
   */
  onSnap() {
    if (this.faceSnap.snapped) {
      this.faceSnap.snaps--;
      this.faceSnap.snapped = false;
    } else {
      this.faceSnap.snaps++;
      this.faceSnap.snapped = true;
    }
  }
}
