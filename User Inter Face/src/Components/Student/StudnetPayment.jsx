import React from 'react';

const payments = [
    { feeType: "Tuition Fee", amount: "₹50,000", status: "Paid", dueDate: "01/01/2024" },
    { feeType: "Library Fee", amount: "₹2,000", status: "Unpaid", dueDate: "02/15/2024" },
    { feeType: "Sports Fee", amount: "₹3,500", status: "Paid", dueDate: "03/10/2024" },
    { feeType: "Exam Fee", amount: "₹1,500", status: "Unpaid", dueDate: "04/01/2024" },
    { feeType: "Transportation Fee", amount: "₹8,000", status: "Paid", dueDate: "01/20/2024" },
];

function StudentPayment() {
    return (
        <div className="payment-container">
            <h2 className="payment-title">Student Fees Information</h2>

            <table className="payment-table">
                <thead>
                    <tr>
                        <th>Fee Type</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => (
                        <tr key={index}>
                            <td>{payment.feeType}</td>
                            <td>{payment.amount}</td>
                            <td>
                                <span className={`status ${payment.status === "Paid" ? "paid" : "unpaid"}`}>
                                    {payment.status}
                                </span>
                            </td>
                            <td>{payment.dueDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentPayment;
