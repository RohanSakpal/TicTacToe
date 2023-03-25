import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.videoplayer.nativeElement.play();
  }

  practicePage() {
    this.router.navigate(['/practice']);
  }
  statPage() {
    this.router.navigate(['/history']);
  }
  liveGame() {
    this.router.navigate(['/liveGame']);
  }
}
