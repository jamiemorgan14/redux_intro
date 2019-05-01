import React from 'react';
import { connect } from 'react-redux'
import * as courseActions from "../../Redux/actions/courseActions.jsx"
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from "./CourseList.jsx"

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch(error => {
      alert("Loading courses failed" + error)
    })
  }
  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    )
  }
}

CoursesPage.propTypes = {
  courses: propTypes.func.isRequired,
  actions: propTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);