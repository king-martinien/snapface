import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor(
    private _faceSnapsService: FaceSnapService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  onNavigateToSignleFaceSnap() {
    this._router.navigate(['/facesnaps', this.faceSnap.id]);
  }
}
