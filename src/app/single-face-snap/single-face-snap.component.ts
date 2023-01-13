import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _faceSnapsService: FaceSnapService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const faceSnapId: number = +this._activatedRoute.snapshot.params['id'];
    console.log(faceSnapId);

    this.faceSnap = this._faceSnapsService.getFaceSnapById(faceSnapId);

    console.log(this.faceSnap);
  }

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

  onNavigateBack() {
    this._router.navigate(['/facesnaps']);
  }
}
