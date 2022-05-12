import { Table } from 'reactstrap';
import React, {useState, useEffect} from 'react'

function Home() {
    return (
        <div>
            <div>
                <h1 id="homeTitle">Welcome to The Northview High School Tutoring Page!</h1>
            </div>
            <div id="tutorList">
                <Table>
                    <thead>
                        <tr>
                            <th>Tutor</th>
                            <th>Subject</th>
                            <th>Date</th>
                            <th>Time Frame</th>
                            <th>Notes</th>
                        </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <td>Liam Gallagher</td>
                            <td>Math</td>
                            <td>5/10/2022</td>
                            <td>After School</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>Frank Lee</td>
                            <td>Science</td>
                            <td>5/20/2022</td>
                            <td>5th Period</td>
                            <td>Calculator</td>
                        </tr> 
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default Home