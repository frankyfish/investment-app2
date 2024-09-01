import { Injectable } from "@angular/core";
import { UserInput } from "../user-input.model";
import { InvestmentResult } from "./investment-result.model";

@Injectable({providedIn: 'root'})
export class InvestmentService {

    calculateInvestmentResults(submittedUserData: UserInput) {
        let investmentValue = submittedUserData.initialInvestment;
        let expectedReturn = submittedUserData.expectedReturn
        let annualInvestment = submittedUserData.annualInvestment
        let initialInvestment = submittedUserData.initialInvestment
    
        let annualData: InvestmentResult[] = []

        for (let i = 0; i < submittedUserData.duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
    
        return annualData;
      }

}