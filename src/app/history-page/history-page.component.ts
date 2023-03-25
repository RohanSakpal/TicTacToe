import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  statList :any[] = [
    {
      opp_name: 'rohan',
      date_time: '28/03/2022 08:10:55',
      win_lose: 'Loss'
    },
    {
      opp_name: 'rohan',
      date_time: '27/03/2022 08:10:55',
      win_lose: 'Win'
    },
    {
      opp_name: 'Runali',
      date_time: '26/03/2022 08:10:55',
      win_lose: 'Loss'
    },{
      opp_name: 'Kaustubh',
      date_time: '26/03/2022 08:10:55',
      win_lose: 'Loss'
    },
    {
      opp_name: 'Rahul',
      date_time: '26/03/2022 08:10:55',
      win_lose: 'Draw'
    },
    {
      opp_name: 'Rahul',
      date_time: '25/03/2022 08:10:55',
      win_lose: 'Loss'
    },
    {
      opp_name: 'Vinayak',
      date_time: '28/03/2022 08:10:55',
      win_lose: 'Win'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
