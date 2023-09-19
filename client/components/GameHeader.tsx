import Switcher from './Switcher'
import { Link } from 'react-router-dom'

interface Props {
  title: string
}

function GameHeader(props: Props) {
  return (
    <>
      <div className="flex justify-end mr-8 mt-2">
        <Switcher />
      </div>
      <div className="flex justify-center">
        <Link
          to="/category"
          className="text-6xl text-primary font-bold text-center"
        >
          {props.title}
        </Link>
      </div>
    </>
  )
}

export default GameHeader
