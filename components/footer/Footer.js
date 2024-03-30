import { FaHeart } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer data-testid="footer" className="flex items-center dark:bg-[#000]/[0.1] justify-center gap-2 p-10 text-center">
            Built with <FaHeart className='text-red-600 text-lg' /> | Copyright &copy; {new Date().getFullYear()} 
        </footer>
    )
}

export default Footer;