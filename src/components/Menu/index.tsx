import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useState } from 'react';
import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault(); //Caso tiver um redirecionamento na tag, não será feito
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} href='#'>
                <HouseIcon />
            </a>
            <a className={styles.menuLink} href='#'>
                <HistoryIcon />
            </a>
            <a className={styles.menuLink} href='#'>
                <SettingsIcon />
            </a>
            <a className={styles.menuLink} href='#' onClick={handleThemeChange}>
                <SunIcon />
            </a>
        </nav>
    );
}