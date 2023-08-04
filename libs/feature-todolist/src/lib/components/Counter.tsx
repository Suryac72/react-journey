
interface CounterProps {
  counterText: number;
  className ?: string;
}
const Counter = (counterProps: CounterProps) => {
  return <div className={counterProps.className}>{counterProps.counterText}</div>;
};

export default Counter;
