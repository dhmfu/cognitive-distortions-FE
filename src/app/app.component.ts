import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DistortionCardComponent } from "../components/distortion-card/distortion-card.component";

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, DistortionCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
