import './assets/css/tailwind.css'

export default function App() {
  return (
    <div>
      <h1 className="text-blue-500 text-5xl">
        Hello World - React with Webpack {process.env.name}
      </h1>
    </div>
  )
}
