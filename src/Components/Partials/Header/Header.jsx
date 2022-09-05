import { Navigation } from "../Navigation/Navigation"

export const Header = () => {
    return(
        <header className="Header">
            <div>
                <h1>HomeLands</h1>
            </div>
            <div>
                <Navigation />
            </div>
        </header>
    )
}