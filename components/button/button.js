const Button = ({ text, to, type }) => {
    return (
        <a 
            href={to} 
            className={`block w-fit flex items-center text-center sm:py-[12px] py-[10px] px-6 hover:bg-primary/[0.7] rounded
                ${type === "primary" ? "bg-primary text-white" : "border border-primary dark:border-gray-100/[0.5] dark:text-gray-100/[0.5] text-primary hover:text-white"}`}
        >
            {text}
        </a>
    )
}

export default Button;