import { PiMapPinFill } from "react-icons/pi";

type PinProps = {
  lat: number;
  lng: number;
  text: string;
}

const Pin = ({ text }: PinProps) => (
  <div className="flex flex-col items-center justify-center ">
    <div className="bg-white mb-2 p-4 border border-slate-100 rounded-lg w-96 drop-shadow-lg">
      <div className="text-center text-lg	">{text}</div>
    </div>
    <PiMapPinFill className="w-8 h-8 text-red-500 drop-shadow-lg" />
  </div>
);

export default Pin;