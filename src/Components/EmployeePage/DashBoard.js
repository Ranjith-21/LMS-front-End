import React from 'react'
import { useState } from 'react';
import { GenderData, UserData, experienceData, EmployeeDegree, batchPerformance } from './EmployeeData';
import { Doughnut, Bar, Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";
import './EmployeePage.css'

function DashBoard() {
  const [batch, setbatch] = useState({
    labels: batchPerformance.map((data) => data.per),
    datasets: [
      {
        label: "Batch Performance",
        data: batchPerformance.map((data) => data.num),
        backgroundColor: [
          "#39bb5c",
          "#2db5ee",
          "#e4d402",
          "#ea8604",
          "#e40347",
          // "rgba(255, 99, 132, 0.2)",
          // "rgba(54, 162, 235, 0.2)",
          // "rgba(255, 206, 86, 0.2)",
          // "rgba(75, 192, 192, 0.2)",
          // '#02c5e9'
        ],
        // borderColor: "rgba(255,99,132,1)",
        // borderWidth: 1,
        hoverOffset:30
      },
    ],
  });
  const [degree, setdegree] = useState({
    labels: EmployeeDegree.map((data) => data.edu),
    datasets: [
      {
        label: "Employee Degree",
        data: EmployeeDegree.map((data) => data.num),
        backgroundColor: [
          // "rgba(255, 99, 132, 0.2)",
          // "rgba(54, 162, 235, 0.2)",
          // "rgba(255, 206, 86, 0.2)",
          // "rgba(75, 192, 192, 0.2)",
          '#ff007c'
        ],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        barPercentage: 0.15,
        borderRadius: 10,
      },
    ],
  });
  const [experience, setexperience] = useState({
    labels: experienceData.map((data) => data.year),
    datasets: [
      {
        label: "Experience",
        data: experienceData.map((data) => data.number),
        backgroundColor: [
          // "rgba(255, 99, 132, 0.2)",
          // "rgba(54, 162, 235, 0.2)",
          // "rgba(255, 206, 86, 0.2)",
          // "rgba(75, 192, 192, 0.2)",
        '#02c5e9'
        ],
        // borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        barPercentage: 0.5,
        borderRadius: 10,
      },
    ],
  });
  const [yearOfPassing, setyearOfPassing] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Year Of Passing",
        data: UserData.map((data) => data.numofstu),
        backgroundColor: [
          // "rgba(255, 99, 132, 0.2)",
          // "rgba(54, 162, 235, 0.2)",
          // "rgba(255, 206, 86, 0.2)",
          // "rgba(75, 192, 192, 0.2)",
          // '#02c5e9'
          "#02c5e9",
        ],
        // borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        barPercentage: 0.5,
        borderRadius: 10,
      },
    ],
  });
  const [genderData, setgenderData] = useState({
    labels: GenderData.map((data) => data.id),
    datasets: [
      {
        label: "Gender",
        data: GenderData.map((data) => data.number),
        backgroundColor: ["#086288", "#ed9232"],
        // borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        // data:GenderData.map((data)=>data.female),
        hoverOffset:10
      },
    ],
  });
  return (
    <div style={{ padding: "3px" }}>
      <div className="d-flex">
        <div className="Gender">
          <b> Gender</b>
          <Doughnut data={genderData} />
        </div>
        <div className="yearOfPassing">
          <b> Year Of Passing</b>
          <Bar
            data={yearOfPassing}
            options={{
              indexAxis: "y",
              scales: {
                x: {
                  display: false,
                  grid: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    display: false,
                  },
                },
              },
            }}
          />
        </div>
        <div className="Experiecnce">
          <b>Experience</b>
          <Bar
            data={experience}
            options={{
              indexAxis: "y",
              scales: {
                x: {
                  display: false,
                  grid: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    display: false,
                  },
                },
              },
            }}
          />
        </div>
      </div>
      <div className="d-flex" style={{ marginLeft: "80px" }}>
        <div className="EmployeeDegree">
          <b>Employee Degree</b>
          <Bar
            data={degree}
            options={{
              scales: {
                x: {
                  display: true,
                  grid: {
                    display: false,
                  },
                },
                y: {
                  display:false,
                  grid: {
                    display: false,
                  },
                },
              },
            }}
          />
        </div>
        <div className="BatchPerformance">
          <b>Batch Performance</b>
          <Pie data={batch}  />
        </div>
      </div>
    </div>
  );
}

export default DashBoard