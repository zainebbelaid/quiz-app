import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { QuestionService } from '../service/question.service';
import { Question } from '../model/Question'
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  question: Question = {} as Question;
  correct: any = {};
  id:number;   
   constructor(private dialog: MatDialog, private questionService: QuestionService, @Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit(): void {
    }
  cancel(): void {
    this.dialog.closeAll();
  }
  setResponse(): void {
    this.question.correct = this.correct;
  }
  addQuestion(): void {
    this.questionService.addQuestion(this.question, this.data.id).subscribe(question => {
        this.question = question;
        window.location.reload();
      });
  }

}
