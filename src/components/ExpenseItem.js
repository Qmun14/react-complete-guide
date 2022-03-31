import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate =    new Date(2022, 2, 31);
    const expenseTitle = 'Asuransi Mobil';
    const expensePrice = 1250000;
  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>Rp. {expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
