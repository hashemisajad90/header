import styles from "./style.module.css";
import "./style.css";
export const ListItem = () => {
    const listItems = [
        { text: 'صفخه اصلی' },
        { text: 'خدمات' },
        { text: 'نمونه کار ها' },
        { text: 'تعرفه' },
        { text: 'درباره ما' },
        { text: 'خرید قالب و افزونه' },
        { text: 'تماس با ما' },
        { text: 'شرایط و قوانین سایت باما' },
        { text: '...', differentClassNmae: 'diff_list_item', id: 'fucos' },
        { text: 'ورود', differentClassNmae: 'diff_list_item' },
    ]
    return (
        <>
            {
                listItems.map((item, index) => {
                    return (
                        <li key={`p ${item + index}`} id={item.id && item.id} className={item.differentClassNmae ? item.differentClassNmae : styles.list_item}>{item.text}</li>
                    )
                })
            }
        </>
    )
}