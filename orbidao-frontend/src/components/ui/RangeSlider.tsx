import { useState } from "react";
import { Range } from "react-range";

type RangeProps = Partial<Range> & {
  min?: number;
  max?: number;
  values?: number[];
  onChange?: (values: number[]) => void;
  onFinalChange?: (values: number[]) => void;
  valueSuffix?: string;
  key?: string;
};

const RangeSlider = ({
  min = 1,
  max = 100,
  values = [51],
  valueSuffix = "",
  onChange = () => null,
  onFinalChange,
  key,
  ...props
}: RangeProps) => {
  const [range, setRange] = useState<number[]>(values);

  return (
    <Range
      {...props}
      key={key}
      min={min}
      max={max}
      values={range || values} // [+formData[formKey]!]
      onChange={setRange || onChange}
      onFinalChange={onFinalChange}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          className="h-1.5 w-full bg-gradient-to-b from-zinc-800 to-gray-700"
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          className="h-8 w-8 bg-neutral-800 rounded-lg opacity-75 border border-white"
        >
          {`${range[0]} ${valueSuffix}`}
        </div>
      )}
    />
  );
};

export { RangeSlider };
