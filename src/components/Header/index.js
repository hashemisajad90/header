import { ListItem } from "./ListItem"
import styles from "./style.module.css"
import logo from "../../astes/logo.png"
export const Header = () => {
    return (
        <>
            <div className={styles.header} dir='rtl'>
                <img src={logo} className={styles.logo} />
                <ul className={styles.nav_ul}>
                    <ListItem />
                </ul>
            </div>
        </>
    )
}