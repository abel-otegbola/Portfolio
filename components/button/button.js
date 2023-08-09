const Button = ({ text, to, type }) => {
    return (
        <a 
            href={to} 
            className={`block w-fit flex items-center text-center p-[12px] px-6 hover:bg-primary rounded
                ${type === "primary" ? "bg-primary text-white" : "border border-primary text-primary hover:text-white"}`}
        >
            {text}
        </a>
    )
}

export default Button;