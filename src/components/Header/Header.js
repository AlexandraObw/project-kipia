import './Header.css'
import Logo from "./Logo";
import HeaderButton from "./HeaderButton";
import HeaderList from "./HeaderList";

export default function Header() {
    return (
        <header className="header body__header">
            <Logo />
            <nav className="header__navigation navigation">
                <HeaderList />
            </nav>
            <HeaderButton />
</header>
    )
}
