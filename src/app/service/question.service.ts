import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Question} from '../model/Question';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
    
  public addQuestion(question: Question, idLevel: number): Observable<Question> {
    return this.http.post<Question>(`http://localhost:8051/api/addQuestion/${idLevel}`, question);
  }
  public getQuestions(idLevel: number): Observable<Question[]> {
    return this.http.get<Question[]>(`http://localhost:8051/api/getQuestions/${idLevel}`);
  }
}
