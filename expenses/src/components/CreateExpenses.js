import React, { useState } from 'react';

const CreateExpenses = ({ add }) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        add({ name, description, category, date, amount });

        setName("");
        setDescription("");
        setCategory("");
        setDate("");
        setAmount("");
        alert("New Expense Created")
    };
    return (
        <div className='main bg-light'>
            <form className='d-flex justify-content-center m-5 p-2  border border-3 border-info  rounded bg-info-subtle text-info  bg-opacity-10' onSubmit={onSubmit}>
                <div className=''>
                    <h3>Create New Expense</h3>

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
                        <button class="btn btn-danger" type="button">Cancel</button>
                        <button class="btn btn-success" type='submit' >Create Expenses</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default CreateExpenses;
