import { Routes } from '@angular/router';
import {TicTacToeComponent} from "./tic-tac-toe/tic-tac-toe.component";

export const routes: Routes = [
  {"path":"", "redirectTo":"tic-tac-toe", "pathMatch":"full"},
  {"path":"tic-tac-toe", "component":TicTacToeComponent}
];
