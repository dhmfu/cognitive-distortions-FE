import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DistortionsComponent } from "./components/distortions/distortions.component";

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, DistortionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
