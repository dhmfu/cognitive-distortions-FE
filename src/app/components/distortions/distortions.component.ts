import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DistortionCardComponent } from "../distortion-card/distortion-card.component";

@Component({
  selector: 'app-distortions',
  imports: [DistortionCardComponent],
  templateUrl: './distortions.component.html',
  styleUrl: './distortions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistortionsComponent {

}
