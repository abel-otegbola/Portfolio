import Link from "next/link";

const Button = ({ text, to, type }) => {
    return (
        <Link
            href={to} 
            aria-label={"Link to " + to}
            className={`block md:w-fit flex items-center text-center py-[5px] px-6 bg-[#10101A] text-white hover:bg-gradient-to-tr from-fuchsia-600 to-emerald-600 hover:text-white rounded
                ${type === "primary" ? "bg-primary text-white" : "border border-gray-500/[0.2]"}`}
        >
            {text}
        </Link>
    )
}

export default Button;