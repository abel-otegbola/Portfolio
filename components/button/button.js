const Button = ({ text, to, type }) => {
    return (
        <a 
            href={to} 
            aria-label={"Link to " + to}
            className={`block md:w-fit flex items-center text-center py-[5px] px-6 hover:bg-gradient-to-tr from-blue-600 to-fuchsia-600 text-white rounded-full
                ${type === "primary" ? "bg-primary text-white" : "border border-gray-500/[0.2]"}`}
        >
            {text}
        </a>
    )
}

export default Button;