import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import AdmissionForm from '../Components/AdmissionForm';
const Admission = () => {
    const [rules, setRules] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch("/Rule.json");
                const res = await data.json();

                setRules(res.rules);
            } catch (error) {
                toast.error("Something want wrong!", {
                    "position": "top-center",
                    "autoClose": 3000
                });
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="admissionSection">
                <div className="admissionOpen">
                    <h1 className="A-h1">
                        Admission Open 2025
                    </h1>
                </div>
            </div>

            <div className="admissionRule">
                <h1 className="A-Rule">Admission Rules</h1>
                <ul className="A-ul">
                    {
                        rules.map((rule) => (
                            <li className="A-li" key={rule.id}>
                                <strong>{rule.title}</strong>: {rule.description}
                            </li>
                        ))
                    }
                </ul>
                <AdmissionForm />
                <ToastContainer className="index" />
            </div>
        </>
    );
};

export default Admission;
