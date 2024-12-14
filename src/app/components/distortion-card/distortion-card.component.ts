import { ChangeDetectionStrategy, Component, input, Signal, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Distortion } from '../../models/distortion';

@Component({
  selector: 'distortion-card',
  imports: [MatCardModule],
  templateUrl: './distortion-card.component.html',
  styleUrl: './distortion-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistortionCardComponent {
  distortion: Signal<Distortion> = input();
  title = signal('Надмірне узагальнення');
  details = signal('Погляд на одну негативну подію як на ознаку того, що все погано.');
  example = signal('Приклад: Я провалив інтерв\'ю, я ніколи не знайду роботи. Ці стосунки невдалі, я ніколи не знайду супутника життя. Вона мене принизила, я не можу нікому довіряти');
}
