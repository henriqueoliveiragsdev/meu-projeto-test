import Link from 'next/link';

export default function Home() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Bem-vindo ao Meu Projeto Next.js</h1>
            <p>Essa é a página inicial.</p>

            <p>
                <Link href="/sobre">Ir para a página Sobre</Link>
            </p>
        </div>
    );
}
