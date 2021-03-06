class ExpenseController {
  constructor(view, model) {
    this.DOM = view.getDOM();
    this.model = model;

    this.addExpense = this.addExpense.bind(this);

    this.setUpEventHandlers();
  }

  setUpEventHandlers() {
    this.DOM.expenseForm.addEventListener('submit', this.addExpense);
  }

  addExpense(e) {
    e.preventDefault();

    const form = e.currentTarget;

    const {
      amount: { value: amount },
      date: { value: date },
      description: { value: description },
    } = form;

    this.model.addExpense({
      amount,
      date,
      description
    });
  }
}