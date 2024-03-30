interface OutputDisplayProps {
  value: string;
}

function OutputDisplay({ value }: OutputDisplayProps) {
  return <div className="font-ubuntu text-3xl font-semibold text-black">{value}</div>;
}

export default OutputDisplay;
