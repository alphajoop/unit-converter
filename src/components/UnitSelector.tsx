interface UnitSelectorProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function UnitSelector({ value, onChange }: UnitSelectorProps) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="h-10 w-full sm:w-50 md:w-40 lg:w-48 xl:w-56 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
      title="Choisir l'unité de mesure"
    >
      <option value="byte">Octet</option>
      <option value="kilobyte">Kilooctet</option>
      <option value="megabyte">Mégaoctet</option>
      <option value="gigabyte">Gigaoctet</option>
      <option value="terabyte">Téraoctet</option>
      <option value="petabyte">Pétaoctet</option>
      <option value="exabyte">Exaoctet</option>
      <option value="zettabyte">Zettaoctet</option>
    </select>
  );
}

export default UnitSelector;
