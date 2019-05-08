import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
  new Recipe('A test Recipe', 'This is a simply test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdxDoJA9v9-WT-109nUXY88BbaQlJFJo2YMFM2KqPQb6aHW52naQ')
  ];
  constructor() { }


  ngOnInit() {
  }

}
