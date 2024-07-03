export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav className="flex justify-start gap-2 px-10 py-10">
                    <a href="/">Home</a>
                    <a href="/aboutus">About Us</a>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}
