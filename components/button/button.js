const Button = ({ text, to, type }) => {
    return (
        <a 
            href={to} 
            aria-label={"Link to " + to}
            className={`block w-fit flex items-center text-center py-[10px] px-6 hover:bg-primary hover:text-white rounded
                ${type === "primary" ? "bg-primary text-white" : "border border-gray-500/[0.2]"}`}
        >
            {text}
        </a>
    )
}

export default Button;