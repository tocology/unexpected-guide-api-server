import models from '../models';

function addCourseLog(req, res, next) {
  const { courseId } = req.params;

  models.CourseLog.create({
    'courseId': courseId,
    'logType': 'VIEW'
  }).then(() => {
    console.log(`[course_log] ${courseId} is 'VIEW' type logged`);
  });

  next();
}

export default {
  addCourseLog
}