import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../objects/question';
import { Questions } from '../objects/questions';
import { Answer } from '../objects/answer';
import { FirebaseService } from '../services/firebase.service';
import { map } from 'rxjs/operators'



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  showQuestion: number;
  answers: boolean[];
  questions: Question[];
  wrong: number;
  correct: number;
  chart: [];
  knownSources: any;
  submitted = false;
  pushItems: Answer;
  pieChartLabels: string[];
  pieChartData: number[];
  pieChartType: string;
  results: any;

  @Input() answer: Answer;

  constructor(private firebaseService: FirebaseService) {
    this.showQuestion = 0;
    this.questions = Questions;
    this.answers = [null, null, null, null, null, null, null, null, null, null, null, null, null];
    this.wrong = this.correct = 0;
    this.knownSources = 0;
    this.pushItems = new Answer();
    this.pieChartLabels = ['Anzahl richtige Antworten', 'Anzahl Quellen gewusst'];
    this.pieChartData = [10, 10];
    this.pieChartType = 'pie'
  }

  ngOnInit() {
    this.getResultList();
  }

  newAnswer(): void {
    this.submitted = false;
    this.pushItems = new Answer();
  }

  save() {
    this.firebaseService.createResult(this.pushItems);
    this.pushItems = new Answer();
  }

  onSubmit() {
    this.submitted = true;
    this.knownSources = parseInt(this.knownSources)
    this.pushItems.correctAnswers = this.correct;
    this.pushItems.knownSources = this.knownSources;
    this.save();
  }

  getResultList() {
    this.firebaseService.getResultList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ ...c.payload.val() })
        )
      )
    ).subscribe(results => {
      this.results = results;
      this.berechnung()
    });
  }

  berechnung() {
    let resultSourceKnown: number = this.results.map(a => a.knownSources).reduce(function (a, b) {
      return a + b;
    });

    let resultCorrect: number = this.results.map(a => a.correctAnswers).reduce(function (a, b) {
      return a + b;
    });

    resultCorrect = resultCorrect / this.results.length
    resultSourceKnown = resultSourceKnown / this.results.length
    this.pieChartData = [parseFloat(resultCorrect.toFixed(2)), parseFloat(resultSourceKnown.toFixed(2))]
  }

  answerQuestion(input: number, answer: boolean) {
    //Die ID in der for-Schleife ist 1 weiter, da der Array bei 0 mit Zählen beginnt und usere Id's im questions.ts-File nicht
    let id = input - 1;
    if (this.questions[id].questionAnswer === answer) {
      this.answers[input - 1] = true;
      this.showQuestion++;
      this.correct++;
    } else {
      this.answers[input - 1] = false;
      this.showQuestion += 0.5;
      this.wrong++;
    }
  }
}
