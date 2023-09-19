import Switcher from './Switcher'
import { Link } from 'react-router-dom'

interface Props {
  title: string
}

function GameHeader(props: Props) {
  return (
    <>
      <div className="flex justify-end mr-16 mt-4">
        <Switcher />
      </div>
      <Link
        to="/category"
        className="text-6xl text-primary font-bold text-center"
      >
        {props.title}
      </Link>
    </>
  )
}

export default GameHeader
