import { Component, OnInit } from '@angular/core';
import {Level} from "../model/Level";
import {LevelService} from "../service/level.service";
import {ActivatedRoute,Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../model/User";
import {Theme} from '../model/Theme';
import {ThemeService} from '../service/theme.service';
@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.css']
})
export class ThemeContentComponent implements OnInit {
  level: any;
  levels: Level[];
  id: number;
  idLevel: number; 
  user: User;
  theme: Theme
  idtheme: number;
  constructor(private levelService: LevelService,private themeService: ThemeService, private route: ActivatedRoute,private router: Router, private userService: UserService) {
    this.route.params.subscribe(
        params => {
           
           this.id = this.route.snapshot.params.id;
           this.levelService.getLevels(this.id).subscribe(data => {
           this.levels = data;
        });
      }
    )
  }

  ngOnInit() {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];

    this.userService.getUsers(this.id)
      .subscribe(data => {
        console.log(data) 
        this.user = data;
      }, error => console.log(error));
     
      this.idtheme = this.route.snapshot.params.idtheme;
      this.themeService.getTheme(this.idtheme).subscribe(theme => {
        this.theme = theme;
      });
}

  setLevel(e: any) {
    this.idLevel = e;
    console.log(this.idLevel)
  }
}
