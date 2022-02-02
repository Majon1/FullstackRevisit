import React from "react";

const Course = ({ course }) => {
    const courses = course.parts.map((x, i) => (
        <p key={i}>
            {x.name} {x.exercises}
        </p>
    ))
    const total = course.parts.reduce((sum, order) => {
        console.log('what is happening ', sum, order)
        return sum + order.exercises
    }, 0)

    return (
        <div>
            <h1>{course.name}</h1>
            {courses}
            <b>total of exercises {total}</b>
        </div>
    )
}

export default Course