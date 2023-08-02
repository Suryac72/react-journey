import Container from './components/Container';
import './feature-calculator.module.css';

/* eslint-disable-next-line */
export interface FeatureCalculatorProps {}

export function FeatureCalculator() {
  return (
    <div className="App">
      <Container containerClass='container'/>
    </div>
  );
}
export default FeatureCalculator;
