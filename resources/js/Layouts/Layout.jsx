export default function Layout({children}){
    return (
        <>
            <header>
                <nav>
                    <a className="nav-link" href="/">Home</a>
                    <a className="nav-link" href="/create">Create</a>
                    <a className="nav-link" href="/about">About-us</a>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    )
}
