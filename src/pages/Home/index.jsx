import './styles.css'

import { Card } from '../../components/Card'

export function Home() {
    return (
        <>
            <header>
                <h1>Conheça nossos planos</h1>
                <h2>Conheça nossas soluções e escolha o plano ideal para o seu próximo projeto</h2>
            </header>
            <main>
                <Card name={'Free'} price={0} description={'Lorem ipsum'} benefits={""} />
                <Card name={'Free'} price={0} description={'Lorem ipsum'} benefits={""} />
                <Card name={'Free'} price={0} description={'Lorem ipsum'} benefits={""} />
            </main>
        </>
    )
}