import Link from "next/link";
import headerStyles from "../styles/header.module.css";
import Layout from "./layout";

export default function Header() {
    return (
        <header className={headerStyles.header}>
            <Layout>
                <ul>
                    <li>
                        <Link href='/'>
                            <a>Anasayfa</a>
                        </Link>
                    </li>
                    <li>
                        <Link href=''>
                            <a>Hakkımda</a>
                        </Link>
                    </li>
                    <li>
                        <Link href=''>
                            <a>İletişim</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/characters'>
                            <a>Karakterler</a>
                        </Link>
                    </li>
                </ul>
            </Layout>
        </header>
    );
}
