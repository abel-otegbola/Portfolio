const Button = ({ text, to, type }) => {
    return (
        <a 
            href={to} 
            aria-label={"Link to " + to}
            className={`block w-fit flex items-center text-center py-[10px] px-6 hover:bg-fuchsia-600 hover:text-white rounded-full
                ${type === "primary" ? "bg-primary text-white" : "border border-gray-500/[0.2]"}`}
        >
            {text}
        </a>
    )
}

export default Button;