import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
          <header className='logo'><a href="" className='logo'>Bedium</a>
                <nav>
                  <a href="">Login</a>
                  <a href="">Register</a>
                </nav>
          </header>
          <div className="post">
            <img src="https://th.bing.com/th/id/OIP.H31r1IczN04dGsBKg3JuAwHaE8?w=258&h=180&c=7&r=0&o=5&pid=1.7" alt="img for blog" />
            <h2 className='font-bold'>Lorem ipsum dolor ssicing elit. Qui molestiae, eveniet doloremque nisi blanditiis non quis imped itaque?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa velit, nemo voluptatem at illum tempora quae porro. Modi libero dolores harum, nihil excepturi nulla minima cum quia ut quos!</p>
          </div>
      </main>
    </>
  )
}

export default App
