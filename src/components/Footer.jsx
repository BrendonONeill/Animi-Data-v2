import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import portfolio from "../assets/folder.svg"

function Footer() {
  return (
   <footer>
    <div className='footer-left'></div>
    <div className='footer-center'>
    <a className="footer-links"><img src={portfolio} width={20} height={20} alt="" /> Portfolio</a>
    <a className="footer-links"><img src={github} width={20} height={20} alt="" />GitHub</a>
    <a className="footer-links"><img src={linkedin} width={20} height={20} alt="" /> LinkedIn</a>
    </div>
    <div className='footer-right'><p>Brendon 2024</p></div>
   </footer>
  )
}

export default Footer