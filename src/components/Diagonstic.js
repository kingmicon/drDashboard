import React, { useEffect, useRef, useState } from 'react';
import lungs from "../images/respiratory rate.jpg";
import temp from "../images/temperature.jpg";
import heart from "../images/HeartBPM.jpg";
import arrowDown from "../images/ArrowDown.jpg";
import arrowup from "../images/ArrowUp.jpg"
import Chart from 'chart.js/auto';

const Diagonstic = ({ patient }) => {
    const [monthsToShow, setMonthsToShow] = useState(6);
    const chartRef = useRef(null);

    useEffect(() => {
        if (!patient) return;

        const ctx = chartRef.current.getContext('2d');

        const labels = patient.diagnosis_history
            .slice(0, monthsToShow)
            .map(entry => `${entry.month.substring(0, 3)} ${entry.year}`); 
        const systolicData = patient.diagnosis_history
            .slice(0, monthsToShow)
            .map(entry => entry.blood_pressure.systolic.value);
        const diastolicData = patient.diagnosis_history
            .slice(0, monthsToShow)
            .map(entry => entry.blood_pressure.diastolic.value);

        if (chartRef.current.chart) {
            chartRef.current.chart.destroy();
        }

        chartRef.current.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: '', 
                        data: systolicData,
                        borderColor: '#E66FD2', 
                        backgroundColor: '#E66FD2', 
                        borderWidth: 1, 
                        pointBackgroundColor: '#E66FD2', 
                        fill: false
                    },
                    {
                        label: '',
                        data: diastolicData,
                        borderColor: '#8C6FE6', 
                        backgroundColor: '#8C6FE6', 
                        borderWidth: 1,
                        pointBackgroundColor: '#8C6FE6',
                        fill: false
                    }
                ]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                        },
                        grid: {
                            display: false, 
                        },
                        ticks: {
                            beginAtZero: true, 
                        }
                    },
                    y: {
                        title: {
                            display: true,
                        },
                        grid: {
                            display: false, 
                        }
                    }
                },
                elements: {
                    line: {
                        tension: 0.4, 
                    }
                }
            }
        });
    }, [patient, monthsToShow]);

    if (!patient) {
        return console.log(patient);;
    }

    const { diagnostic_list = [] } = patient;
    
    const handleMonthsChange = (event) => {
        setMonthsToShow(parseInt(event.target.value));
    };

    return (
        <div className='patient-diagonstic'>
            <div className='patient-diagonstic-history'>
                <h3>Diagnostic History</h3>
                <div className='diagnostic-history-chart'>
                    <div className='diagnostic-history-chart-heading'>
                        <h4>Blood Pressure</h4>
                        <select value={monthsToShow} onChange={handleMonthsChange}>
                            <option value="6">Last 6 Months</option>
                            <option value="12">Last 12 Months</option>
                            <option value="24">Last 24 Months</option>
                        </select>
                    </div>
                    <div className='history-chart'>
                        <div className='history-chart1'>
                            <canvas ref={chartRef} />
                        </div>
                        <div className='diagnostic-history-chart-details'>
                            <div className='systolic-chart'>
                                <div className='systolic-chart-details'>
                                    <div className='systolic-chart-color'></div>
                                    <p>systolic</p>
                                </div>
                                <h4>160</h4>
                                <div className='systolic-chart-text'>
                                    <img src={arrowDown} alt='arrow' />
                                    <p>Higher than average</p>
                                </div>
                            </div>
                            <div className='Diastolic-chart'>
                                <div className='Diastolic-chart-details'>
                                    <div className='Diastolic-chart-color'></div>
                                    <p>Diastolic</p>
                                </div>
                                <h4>78</h4>
                                <div className='systolic-chart-text'>
                                    <img src={arrowup} alt='arrow' />
                                    <p>Lower than Average</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='diagnostic-history-card'>
                    <div className='history-card1'>
                        <img src={lungs} alt='heart' />
                        <h6>Respiratory Rate</h6>
                        <h3>20 bpm</h3>
                        <p>Normal</p>
                    </div>
                    <div className='history-card2'>
                        <img src={temp} alt='heart' />
                        <h6>Temperature</h6>
                        <h3>98.6 F</h3>
                        <p>Normal</p>
                    </div>
                    <div className='history-card3'>
                        <img src={heart} alt='heart' />
                        <h6>Heart Rate</h6>
                        <h3>78 bpm</h3>
                        <p><span><img src={arrowDown} alt='arrow' /></span>Lower than Average</p>
                    </div>
                </div>
            </div>
            
            <div className='diagnostic-history-list'>
                <h3>Diagnostic List</h3>
                <div className='tableContainer'>
                    <div className='tableRow header'>
                        <div className='tableCell'>Problem/Diagnosis</div>
                        <div className='tableCell'>Description</div>
                        <div className='tableCell'>Status</div>
                    </div>
                    {diagnostic_list.map((diagnostic, index) => (
                    <div className='tableRow' key={index}>
                        <div className='tableCell'>{diagnostic.name}</div>
                        <div className='tableCell'>{diagnostic.description}</div>
                        <div className='tableCell'>{diagnostic.status}</div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Diagonstic;
