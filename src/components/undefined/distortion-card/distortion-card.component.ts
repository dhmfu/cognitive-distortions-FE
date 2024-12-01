import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-distortion-card',
  imports: [MatCardModule],
  templateUrl: './distortion-card.component.html',
  styleUrl: './distortion-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistortionCardComponent {
  title = signal('Надмірне узагальнення');
  details = signal('Погляд на одну негативну подію як на ознаку того, що все погано.');
  example = signal('Приклад: Я провалив інтерв\'ю, я ніколи не знайду роботи. Ці стосунки невдалі, я ніколи не знайду супутника життя. Вона мене принизила, я не можу нікому довіряти');

}
