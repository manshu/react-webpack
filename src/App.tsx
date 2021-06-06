import '../assets/css/tailwind.css'
import IMG from '../assets/images/react.png'
import LOGO from '../assets/images/logo.svg'

export default function App() {
  return (
    <div>
      <h1 className="text-blue-500 text-5xl">
        Hello World - React with Webpack {process.env.name}
      </h1>
      <img src={IMG} alt="React Logo" width="400" height="400" />
      <img src={LOGO} alt="React Logo" width="400" height="400" />
    </div>
  )
}
