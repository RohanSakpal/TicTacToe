import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-dashboard',
  templateUrl: './practice-dashboard.component.html',
  styleUrls: ['./practice-dashboard.component.scss']
})
export class PracticeDashboardComponent implements OnInit {
  squares:any = [];
  xIsNext = true;
  winner = '';
  counter = 0;
  isdraw = '';
  freshpage:boolean = true;
  value : 'X'|'O'|undefined;
  constructor() { }

  ngOnInit(): void {
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.isdraw = '';
    this.counter = 0;
    this.freshpage = false;
  }

  get player() {
    return this.xIsNext?'X':'O';
  }

  makeMove(idx:number) {
    

    if(!this.squares[idx]) {
      console.log('idx',idx);
      this.squares.splice(idx,1,this.player);
      this.xIsNext = !this.xIsNext;
      this.counter++;
      console.log("my square",this.squares);
    }
    this.winner = this.calculateWinner();
    if(!this.winner && this.counter == 9) {
      this.isdraw = 'yes'
    }
  }

  calculateWinner(){
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    for(let i=0;i<lines.length;i++) {
      const [a,b,c]= lines[i];
      if(this.squares[a] 
        && this.squares[a] === this.squares[b] 
        && this.squares[a]=== this.squares[c]) {
          console.log("sqaure");
          return this.squares[a];
        }
    }
  }

}
