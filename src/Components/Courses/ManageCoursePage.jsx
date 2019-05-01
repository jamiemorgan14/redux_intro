import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { loadCourses, saveCourse } from "../../Redux/actions/courseActions";
import { loadAuthors } from "../../Redux/actions/authorActions";
import propTypes from 'prop-types';
import CourseForm from './CourseForm.jsx';
import { newCourse } from "../../../tools/mockData"

function ManageCoursesPage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  saveCourse,
  ...props }) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed" + error)
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed" + error)
      });
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }))
  }

  function handleSave(event) {
    event.preventDefault();
    saveCourse(course);
  }

  return <CourseForm
    course={course}
    errors={errors}
    authors={authors}
    onChange={handleChange}
    onSave={handleSave}
  />
}

ManageCoursesPage.propTypes = {
  course: propTypes.object.isRequired,
  authors: propTypes.array.isRequired,
  courses: propTypes.array.isRequired,
  loadCourses: propTypes.func.isRequired,
  loadAuthors: propTypes.func.isRequired,
  saveCourse: propTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors
  }
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursesPage);