import React from 'react';
import { connect } from 'react-redux'
import * as courseActions from "../../Redux/actions/courseActions";
import * as authorActions from "../../Redux/actions/authorActions";
import propTypes from 'prop-types';

class ManageCoursesPage extends React.Component {
  componentDidMount() {
    const { courses, authors, actions, loadAuthors, loadCourses } = this.props;

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
  }
  render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>
    )
  }
}

ManageCoursesPage.propTypes = {
  authors: propTypes.array.isRequired,
  courses: propTypes.array.isRequired,
  loadCourses: propTypes.func.isRequired,
  loadAuthors: propTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  }
}

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursesPage);