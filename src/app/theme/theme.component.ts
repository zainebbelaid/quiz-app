import {MatDialog} from '@angular/material/dialog';
import {ThemeContentComponent} from '../theme-content/theme-content.component';

import {Component, OnInit} from '@angular/core';
import {Theme} from '../model/Theme';
import {ThemeService} from '../service/theme.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  themes: Theme[];
  userUsername: string;
  dialogRef: any;
  
  constructor(private themeService: ThemeService, private route: ActivatedRoute, private dialog: MatDialog) { }
 
   ngOnInit(): void {
      this.userUsername = this. route.snapshot.params.userUsername;
      this. themeService.getThemes().subscribe(themes => {
      this.themes = themes;
   });
 }
   openLevel(id, themeName): void {
     this.dialogRef = this.dialog.open(ThemeContentComponent, {
     width: '420px',
     data: {id, themeName}
   });
 } 

}
