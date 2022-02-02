import React from "react";

const Course = ({ course }) => {
    console.log('course', course)

    const courses = course.parts.map(parts => <p key={parts.id}>
        {parts.name} {parts.exercises}</p>)


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