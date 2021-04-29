import { combineReducers } from 'redux';
import KimlikDogrulamaReducers from './KimlikDogrulamaReducers';
import StudentsListReducers from './StudentsCreateReducer';
import StudentDataReducers from './StudentDataReducers';
import StudentUpdateReducers from './StudentUpdateReducers';

export default combineReducers({
  kimlikdogrulamaResponse: KimlikDogrulamaReducers,
  studentsListResponse: StudentsListReducers,
  studentDataResponse: StudentDataReducers,
  studentUpdateResponse: StudentUpdateReducers
});
