import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {

    return (
        <section className='App'> {/*<></> Esto es igual a <React.Fragment></React.Fragment>*/}
            <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán" >
                Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard userName="phreralb" name="Pablo Hernandez" >
                Pablo Hernandez
            </TwitterFollowCard >
        </section >
    )
}