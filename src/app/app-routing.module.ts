import { WelcomeComponent } from './welcome/welcome.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { ThemeComponent } from './theme/theme.component';
import { QuizComponent } from './quiz/quiz.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriqueComponent } from './historique/historique.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent} from './question/question.component';
import { QuestionContentComponent } from './question-content/question-content.component';
import { LevelComponent } from './level/level.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'historiated/:userUsername', component: HistoriqueComponent },
  {
   path: 'theme', component: ThemeComponent,
   children: [
   { path: 'quiz/:idLevel', component: QuizComponent },
   { path: 'themeContent/:id', component: ThemeContentComponent },
   { path: '', component: WelcomeComponent },
 ],
},
{
 path: 'question', component: QuestionComponent,
 children: [
   { path: '', component: WelcomeComponent },
   {
     path: 'level/:id', component: LevelComponent,
     children: [
       { path: 'questionContent/:id', component: QuestionContentComponent },
     ],
   },
 ],
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
