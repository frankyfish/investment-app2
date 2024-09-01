import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInput } from './user-input.model';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentService } from './investment-calculation/investment.service';
import { InvestmentResult } from './investment-calculation/investment-result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent {
  submittedUserInput?: UserInput
  calculatedInvestmentResults?: InvestmentResult[]
  
  constructor(private investmentService: InvestmentService) {}

  onUserSubmittedInput(userInput: UserInput) {
    this.submittedUserInput = userInput
    this.calculatedInvestmentResults = this.investmentService.calculateInvestmentResults(userInput)
  }

}
