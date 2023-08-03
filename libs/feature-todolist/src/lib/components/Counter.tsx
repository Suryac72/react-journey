
interface CounterProps {
  counterText: string;
  className ?: string;
}
const Counter = (counterProps: CounterProps) => {
  return <div className={counterProps.className}>{counterProps.counterText}</div>;
};

export default Counter;
