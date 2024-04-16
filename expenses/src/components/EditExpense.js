import React, { useState, useEffect } from 'react'

const EditExpense = ({ expesnseEdit, expenseSave, }) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");

    useEffect(() => {
        if (expesnseEdit) {
            setName(expesnseEdit.name);
            setDescription(expesnseEdit.description)
            setCategory(expesnseEdit.category)
            setDescription(expesnseEdit.date)
            setDescription(expesnseEdit.amount)
        }
    }, [expesnseEdit]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!name || !description || !category || !date || !amount) return;

        expenseSave({
            id: expesnseEdit ? expesnseEdit.id : Math.random().toString(), name,
            description,
            category,
            description,
            date: new Date(date),
            amount
        });
        setName("");
        setDescription("");
        setCategory("");
        setDate("");
        setAmount("");
        alert("Expense is updtaed")
    }
    return (
        <div className='main'>
            <form className='d-flex justify-content-center m-5 p-2  border border-3 border-info  rounded bg-info-subtle text-info  bg-opacity-10' onSubmit={onSubmit}>
                <div className=''>
                    <h3>Edit Expense</h3>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label text-info">Name</label>
                        <input type={'text'} class="form-control" id="exampleFormControlInput1" placeholder="Name the Expense" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput2" class="form-label text-info">Description</label>
                        <input type={'text'} class="form-control" id="exampleFormControlInput2" placeholder="Describe the Expense" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput3" class="form-label text-info">Category</label>


                        <div class="dropdown" >
                            <button class="btn btn-secondary bg-white text-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Category (dropdown)
                            </button>
                            <ul class="dropdown-menu">
                                <li value={category} onChange={(e) => setCategory(e.target.value)}><a class="dropdown-item" href="#">Health</a></li>
                                <li value={category} onChange={(e) => setCategory(e.target.value)}><a class="dropdown-item" href="#">Electronics</a></li>
                                <li value={category} onChange={(e) => setCategory(e.target.value)}><a class="dropdown-item" href="#">Travel</a></li>
                                <li value={category} onChange={(e) => setCategory(e.target.value)}><a class="dropdown-item" href="#">Education</a></li>
                                <li value={category} onChange={(e) => setCategory(e.target.value)}><a class="dropdown-item" href="#">Books</a></li>
                                <li value={category} onChange={(e) => setCategory(e.target.value)}><a class="dropdown-item" href="#">Others</a></li>
                            </ul>
                        </div>

                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput4" class="form-label text-info">Date of Expense</label>
                        <input type={'datetime-local'} class="form-control text-secondary" id="exampleFormControlInput4" placeholder="Date of Expense(date-picker)" value={date} onChange={(e) => setDate(e.target.value)} required />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput5" class="form-label text-info">Expense Amount</label>
                        <input type={'number'} class="form-control" id="exampleFormControlInput4" min={0} placeholder="Expense Amount in INR" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                    </div>

                    <div class=" d-flex justify-content-between">
                        <button class="btn btn-danger" type="button">{expesnseEdit}Cancel</button>
                        <button class="btn btn-success" type='submit' >Save Expenses</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default EditExpense;
