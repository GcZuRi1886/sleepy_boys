import { Injectable } from '@angular/core';
import { Answer } from '../objects/answer'
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private dbPath = "/results";
  resultsRef: AngularFireList<Answer> = null;

  constructor(private db: AngularFireDatabase) {
    this.resultsRef = db.list(this.dbPath);
  } 

  createResult(answer: Answer): void {
    this.resultsRef.push(answer);
  }

  getResultList(): AngularFireList<Answer> {
    return this.resultsRef;
  }
}
