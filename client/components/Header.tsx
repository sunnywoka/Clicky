import { Link } from 'react-router-dom'
import Switcher from './Switcher'

function Header() {
  return (
    <>
      <div className="spacer layer1"></div>
      <div className="flex justify-end mr-16 -mt-36">
        <Switcher />
      </div>
      <div className="flex justify-center items-center gap-80 -mt-8">
        <img className="w-64" src="images/gun.png" alt="gun" />
        <Link to="/" className="text-8xl m-4 text-primary font-bold">
          Blicky
        </Link>
        <img
          className="w-64 transform -scale-x-100"
          src="images/gun.png"
          alt="gun"
        />
      </div>
      <hr className="border-4 border-primary mb-8" />
    </>
  )
}
export default Header
