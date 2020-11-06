import { Component, OnInit } from '@angular/core';
import { Questions } from '../objects/questions';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  showQuestion = 0;
  score = 0;
  questions : any[] = Questions;
  
  constructor(  ) { }

  ngOnInit() {
  }

  awnserQuestionTrue(input:number) {
    //Die ID in der for-Schleife ist 1 weiter, da der Array bei 0 mit Zählen beginnt und usere Id's im questions.ts-File nicht
    let id = input - 1;
    if(this.questions[id].questionAnswer){
      this.showQuestion = this.questions[id].questionId + 1;
      this.score = this.score + 1
      console.log(this.showQuestion)
    }
    else{
      this.showQuestion = this.questions[id].questionId + 0.5;
      console.log(this.showQuestion)
    }
  }

  awnserQuestionFalse(input:number) {
    let id = input - 1;
    if(!this.questions[id].questionAnswer){
      this.showQuestion = this.questions[id].questionId + 1;
      this.score = this.score + 1
      console.log(this.showQuestion)
    }
    else{
      this.showQuestion = this.questions[id].questionId + 0.5;
      console.log(this.showQuestion)
    }
  }

  getAfterDecimal(number) {
    number = number.toString();
    const splitNumber = number.split(".");
    const afterDot = parseInt(splitNumber[1]);
    if(afterDot == 5){
      return true;
    }
  }
}
