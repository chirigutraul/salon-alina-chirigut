import Label from "components/Label";
import React, { FunctionComponent } from "react";
import Flatpickr from "react-flatpickr";

interface Props {
  selectedDate?: Date;
  setDate: (date: Date) => void;
  ref: any;
}

const DatePicker: FunctionComponent<Props> = ({
  selectedDate,
  ref,
  setDate,
}) => {
  return (
    <div>
      <Label text="Data" />
      <Flatpickr
        ref={ref}
        name="date"
        value={selectedDate}
        className={`focus:outline-nonefont-light text-gray-400 bg-black-25 w-full rounded-md text-black
        py-3 px-6`}
        placeholder="Data"
        onChange={(date) => setDate(date[0])}
        options={{
          enableTime: false,
          time_24hr: true,
          minDate: "today",
          disable: [
            function (date) {
              return date.getDay() === 0;
            },
          ],
        }}
      />
    </div>
  );
};

export default DatePicker;
