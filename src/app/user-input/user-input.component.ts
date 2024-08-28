import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInput } from '../user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() userInput = new EventEmitter<UserInput>()

  initialInvestment?: number = 0
  anualInvestment?: number
  expectedReturn?: number
  duration?: number

  onUserInputSubmit() {
    this.userInput.emit({
      initialInvestment: this.initialInvestment!,
      annualInvestment: this.anualInvestment!,
      expectedReturn: this.expectedReturn!,
      duration: this.duration!
    })
  }

}
