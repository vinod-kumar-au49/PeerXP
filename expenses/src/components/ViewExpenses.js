import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateExpenses from './CreateExpenses';

const viewExpenses = ({ add }) => {
    return (
        <div className='' >
            <form className=' m-5 p-2 border border-info bg-primary-subtle  rounded  '>

                <div>
                    <div className="d-flex justify-content-between">
                        <h5 className='m-3'>MY EXPENSE MANAGER</h5>
                        <div className='d-flex justify-content-around ' >
                            <input type={'search'} className="h-70 m-2 rounded  " placeholder="Filter by Date of Expens" />
                            <input type={'search'} class="h-70 m-2 rounded  " id="exampleFormControlInput1" placeholder="Search Expense by Name" />
                            <Link to={'/createExpenses'}><button type="button" class="btn btn-success m-2 h-70">+ New Expense</button></Link>
                        </div> </div>
                    <div className='rounded'>
                        <table class="table table-bordered border-primary  ">
                            <thead>
                                <tr >
                                    <th scope="col">Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Date of Expense</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Updated at</th>
                                    <th scope="col">Creadted by</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {add.map(add => (
                                    <tr key={add.id}>
                                        <th scope="row">{add.description}</th>
                                        <td>{add.category}</td>
                                        <td>{add.date}</td>
                                        <td>{add.amount}</td>
                                        <td>{add.date}</td>
                                        <td>{add.name}</td>

                                        <td>
                                            <div className='d-flex justify-content-around'>
                                                <Link to={'/editExpenses'}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                                </svg></Link>
                                                <Link>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                    </svg></Link>
                                            </div>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default viewExpenses


