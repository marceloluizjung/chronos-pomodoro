import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { RouterLink } from '../RouterLink';
import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes;
        return storageTheme || 'dark';
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    };

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault(); //Caso tiver um redirecionamento na tag, não será feito
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <RouterLink className={styles.menuLink} href='/'>
                <HouseIcon />
            </RouterLink>
            <RouterLink className={styles.menuLink} href='#'>
                <HistoryIcon />
            </RouterLink>
            <RouterLink className={styles.menuLink} href='#'>
                <SettingsIcon />
            </RouterLink>
            <a className={styles.menuLink} href='#' onClick={handleThemeChange}>
                {nextThemeIcon[theme]}
            </a>
        </nav>
    );
}