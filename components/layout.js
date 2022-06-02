import layoutStyles from '../styles/layout.module.css'
import Header from './header'

export default function Layout({ children }) {
    return (
        <div className={layoutStyles.container}>{children}



        </div>
    )
}