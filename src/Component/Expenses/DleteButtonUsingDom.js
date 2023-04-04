import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
function ExpenseItem(props) {
const amount = props.amount;

    //  const clickHandler = ()=>{
    //   console.log('clicked')
    //  }

     const deleteHandler = ()=>{
      const expenseItem = document.getElementById(`expense=${props.id}`);
      const parentNode= expenseItem.parentNode;
      parentNode.removeChild(expenseItem);
     }
  return (
    <Card id ={`expense-${props.id}`}className="expense-item">
    <ExpenseDate date={props.date}/>
     <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">Rs.{amount}</div>
      <div className="expense-item__location">{props.location}</div>
      <button onClick={deleteHandler}>Delete Expense</button>
    </Card>
  );