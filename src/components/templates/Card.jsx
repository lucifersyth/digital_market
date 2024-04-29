export default function Card({title, className}) {
    return (
        <div className="p-6 md:w-[40%] text-black font-bold text-[1.5rem] min-h-[12rem] rounded-sm bg-primary_green">
            {title}
        </div>
    )
}