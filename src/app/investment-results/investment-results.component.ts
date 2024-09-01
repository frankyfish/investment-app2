import { Component, Input } from '@angular/core';
import { UserInput } from '../user-input.model';
import { InvestmentResult } from '../investment-calculation/investment-result.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input({required: true}) investmentResult?: InvestmentResult[]
}
