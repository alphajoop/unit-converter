interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({ value, onChange }: InputFieldProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Entrez une valeur"
      className="h-10 w-full sm:w-full md:w-40 lg:w-48 xl:w-56 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
    />
  );
}

export default InputField;
