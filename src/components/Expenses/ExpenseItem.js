import styles from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  return (
    <li>
      <Card className={styles["expense-item"]}>
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className={styles["expense-item__description"]}>
          <h2 className={styles["expense-item_h2"]}>{props.title}</h2>
          <div className={styles["expense-item__price"]}>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}
