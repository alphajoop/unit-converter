import { useEffect, useState } from 'react';
import InputField from './components/InputField';
import OutputDisplay from './components/OutputDisplay';
import UnitSelector from './components/UnitSelector';

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [outputValue, setOutputValue] = useState<string>('');
  const [inputUnit, setInputUnit] = useState<string>('gigabyte');
  const [outputUnit, setOutputUnit] = useState<string>('megabyte');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (inputValue) {
      document.title = `${inputValue} ${inputUnit.toUpperCase()} equals ${outputValue} ${outputUnit.toUpperCase()}`;
    } else {
      document.title = `Convertisseur d'unités de mesure informatique`;
    }
  }, [inputValue, outputValue, inputUnit, outputUnit]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    setError('');

    // Vérifier si l'entrée n'est pas vide et si elle est un nombre
    if (inputValue.trim() !== '' && !isNaN(parseFloat(inputValue))) {
      convertUnit(inputValue, inputUnit, outputUnit);
    } else if (inputValue.trim() === '') {
      setOutputValue('');
      setError('');
    } else {
      setError('Veuillez entrer un nombre valide.');
      setOutputValue('');
    }
  };

  const handleInputUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUnit = e.target.value;
    setInputUnit(selectedUnit);

    if (!isNaN(parseFloat(inputValue))) {
      convertUnit(inputValue, selectedUnit, outputUnit);
    } else {
      setOutputValue('');
    }
  };

  const handleOutputUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUnit = e.target.value;
    setOutputUnit(selectedUnit);

    if (!isNaN(parseFloat(inputValue))) {
      convertUnit(inputValue, inputUnit, selectedUnit);
    } else {
      setOutputValue('');
    }
  };

  const convertUnit = (inputValue: string, inputUnit: string, outputUnit: string) => {
    const bytes = parseFloat(inputValue);

    // Conversion vers les octets
    const bytesValue =
      inputUnit === 'yottabyte'
        ? bytes * Math.pow(1024, 8)
        : inputUnit === 'zettabyte'
          ? bytes * Math.pow(1024, 7)
          : inputUnit === 'exabyte'
            ? bytes * Math.pow(1024, 6)
            : inputUnit === 'petabyte'
              ? bytes * Math.pow(1024, 5)
              : inputUnit === 'terabyte'
                ? bytes * Math.pow(1024, 4)
                : inputUnit === 'gigabyte'
                  ? bytes * Math.pow(1024, 3)
                  : inputUnit === 'megabyte'
                    ? bytes * Math.pow(1024, 2)
                    : inputUnit === 'kilobyte'
                      ? bytes * 1024
                      : bytes;

    // Conversion des octets à l'unité de destination
    const output =
      outputUnit === 'yottabyte'
        ? bytesValue / Math.pow(1024, 8)
        : outputUnit === 'zettabyte'
          ? bytesValue / Math.pow(1024, 7)
          : outputUnit === 'exabyte'
            ? bytesValue / Math.pow(1024, 6)
            : outputUnit === 'petabyte'
              ? bytesValue / Math.pow(1024, 5)
              : outputUnit === 'terabyte'
                ? bytesValue / Math.pow(1024, 4)
                : outputUnit === 'gigabyte'
                  ? bytesValue / Math.pow(1024, 3)
                  : outputUnit === 'megabyte'
                    ? bytesValue / Math.pow(1024, 2)
                    : outputUnit === 'kilobyte'
                      ? bytesValue / 1024
                      : bytesValue;

    setOutputValue(output.toFixed(2));
  };

  return (
    <div className="font-ubuntu-mono flex justify-center py-10 px-4 md:px-0">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="font-ubuntu text-xl md:text-3xl font-bold capitalize text-black mb-4">
          Convertisseur d'unités de mesure informatique
        </h1>
        <div className="flex items-center md:space-x-3 space-y-3 md:space-y-0 flex-wrap">
          <InputField value={inputValue} onChange={handleInputChange} />
          <UnitSelector value={inputUnit} onChange={handleInputUnitChange} />
          <UnitSelector value={outputUnit} onChange={handleOutputUnitChange} />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <OutputDisplay value={outputValue} />
      </div>
    </div>
  );
}

export default App;
