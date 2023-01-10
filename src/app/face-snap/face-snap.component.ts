import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor(private _faceSnapsService: FaceSnapService) {}

  ngOnInit(): void {}

  /**
   * @description This method is called when the user clicks on the snap button
   * @returns void
   */
  onSnap() {
    if (this.faceSnap.snapped) {
      this._faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.faceSnap.snapped = false;
    } else {
      this._faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.faceSnap.snapped = true;
    }
  }
}
