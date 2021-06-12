import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Question } from '../model/Question';
import { QuestionService } from '../service/question.service';
import { ActivatedRoute,Router } from '@angular/router';
import { timer } from 'rxjs';
import { ResultComponent } from '../result/result.component';
import { LevelService } from '../service/level.service';
import { HistoryService } from '../service/history.service';
import { History } from '../model/History';
import {UserService} from "../service/user.service";
import {User} from "../model/User";

const counterSecond = timer(0, 1000);
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  dialogRef: any;
  questions: Question[];
  history: History = {} as History;
  histories: History[];
  idLevel: number;
  level: any;
  counter = 0;
  score = 0;
  btnDisabled = true;
  user: User;
  id: number;
  username: string;

  constructor(private dialog: MatDialog,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private levelService: LevelService,
    private historyService: HistoryService,
    private router: Router, private userService: UserService) { }
     
    ngOnInit(): void {
      this.user = new User();
    this.id = this.route.snapshot.params['id'];

    this.userService.getUsers(this.id)
      .subscribe(data => {
        console.log(data) 
        this.user = data;
      }, error => console.log(error));

      this.idLevel = this.route.snapshot.params.idLevel;
      this.questionService.getQuestions(this.idLevel).subscribe((data) => {
      this.questions = data;
      for (var i = this.questions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.questions[i];
        this.questions[i] = this.questions[j];
        this.questions[j] = temp;
      }
    });
    this.levelService.getLevel(this.idLevel).subscribe((level) => {
      this.level = level;
    });
    counterSecond.subscribe(() => {
      this.counter += 1;
    });
  }
  
 openResult(themeName: any, levelName: any,): void {
    const counter = this.counter;
    const score = this.score;
    const username = this.username;
    this.history.total = this.counter;
    this.history.themeName = themeName;
    this.history.levelName = levelName;
    this.history.username = username;
    this.history.sore = this.score;
    this.historyService.addHistory(this.history).subscribe((addHistory) => {
      this.history = addHistory;
      console.log(this.history);
    });
    counterSecond.subscribe(() => {
      this.counter = +'';
    });
    this.dialogRef = this.dialog.open(ResultComponent, {
      width: '420px',
      data: { score, counter, themeName, levelName },
    });
  }
 setResponses(e: any): void {
    this.questions.forEach((q, index) => {
      if (e.source.value === q.correct) {
        this.score++;
      }
    });
    this.btnDisabled = false;
  }

}
