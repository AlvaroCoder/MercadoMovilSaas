
export default function Card({value, title}) {
  return (
    <div className="border border-white flex flex-col rounded-lg">
        <div className="py-2 px-2">
            <p>{title}</p>
        </div>
        <div className="flex justify-center py-2 w-full px-2 ">
            <p className="border border-white w-full text-center bg-slate-200 rounded-lg py-4">{value}</p>
        </div>
    </div>
    )
};