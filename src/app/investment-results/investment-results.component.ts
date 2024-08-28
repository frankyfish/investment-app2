import { Component, Input } from '@angular/core';
import { UserInput } from '../user-input.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input({required: true}) submittedUserData?: UserInput
  annualData?: InvestmentResult[];

  calculateInvestmentResults() {
    let investmentValue = this.submittedUserData!.initialInvestment;
    let expectedReturn = this.submittedUserData!.expectedReturn
    let annualInvestment = this.submittedUserData!.annualInvestment
    let initialInvestment = this.submittedUserData!.initialInvestment

    for (let i = 0; i < this.submittedUserData!.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      this.annualData?.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    // return annualData;
  }

}

interface InvestmentResult{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
}