import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";


export default function Result({ newInput }) {

    const resultsData = calculateInvestmentResults(newInput);
    console.log(resultsData);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest</th>
                    <th>Total Interest</th>
                    <th>Total Capital</th>
                </tr>
            </thead>
            <tbody>
            {
                resultsData.map((data,index)=>{
                    return <tr key={index}>
                        <td>{formatter.format(data.year)}</td>
                        <td>{formatter.format(data.annualInvestment)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(data.annualInvestment + data.interest)}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
    )
}