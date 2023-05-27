// import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // Mui
// import {
//   Box,
//   FormControl,
//   Button,
//   DialogTitle,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
// } from '@mui/material';

// // คำถาม
// import { PapperBlock, RadioGroupVertical } from 'dan-components';

// // ข้อมูลจำลอง
// import questions from '../../api/dummy/question';
// // const interestSurveyId = 1;

// export default function InterestQuestion() {
//   const [selectedAnswers, setSelectedAnswers] = useState([]);
//   const [checkAnswers, setCheckAnswers] = useState([]);
//   const [openPopupAns, setOpenPopupAns] = useState(false);
//   const [openPopupConfirm, setOpenPopupConfirm] = useState(false);
//   // const [questions, setQuestions] = useState([]);
//   const [defaultselectedAnswers, setDefaultselectedAnswers] = useState([]);

//   useEffect(() => {
//     questions.forEach((quest) => {
//       setDefaultselectedAnswers(
//         selectedAnswers.push({
//           questId: quest.id,
//           answerId: '0',
//         })
//       );
//     });
//   }, []);

//   // useEffect(() => {
//   //   axios
//   //     .post('http://localhost:3200/api/v1/interest_questions', {
//   //       interest_survey_id: 1,
//   //     })
//   //     .then((response) => {
//   //       setQuestions(response.data);
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
//   // }, []);

//   useEffect(() => {
//     console.log('questions: ', questions);
//   }, [questions]);

//   // log เพื่อเช็คค่าคำตอบที่ส่งมา
//   // useEffect(() => {
//   //   console.log(selectedAnswers);
//   // }, [selectedAnswers]);

//   const handleChange = (Ans) => {
//     const updatedAns = selectedAnswers.map((answer) => {
//       if (answer.questId === Ans.questId) {
//         return { ...answer, answerId: Ans.answerId };
//       }
//       return answer;
//     });
//     setSelectedAnswers(updatedAns);
//   };

//   // ใช้เช็คว่าเลือกคำตอบทุกข้อหรือยัง
//   const checkAns = () => {
//     const filteredQuestIds = selectedAnswers
//       .filter((item) => item.answerId === '0')
//       .map((item) => item.questId);
//     setCheckAnswers(filteredQuestIds);
//     if (filteredQuestIds.length > 0) setOpenPopupAns(true);
//     else {
//       setOpenPopupConfirm(true);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // console.log(' Submit Log :', selectedAnswers);
//     checkAns();
//   };

//   const handleClose = () => {
//     setOpenPopupAns(false);
//     setOpenPopupConfirm(false);
//   };

//   const handleReset = () => {
//     setSelectedAnswers(defaultselectedAnswers);
//   };

//   return (
//     <div>
//       <PapperBlock
//         title='แบบสอบถามความสนใจต่อสายงานด้านต่างๆ'
//         desc='Some text description'
//       >
//         <form
//           onSubmit={handleSubmit}
//           onReset={handleReset}
//         >
//           <Box
//             sx={{
//               width: '100%',
//             }}
//           >
//             <FormControl>
//               <Box
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   width: '100%',
//                   pl: '1.5rem',
//                 }}
//               >
//                 {questions.map((question) => (
//                   <RadioGroupVertical
//                     key={question.id}
//                     questionsId={question.id}
//                     Labelquestion={question.Labelquestion}
//                     answerLabels={question.answers}
//                     handleChange={handleChange}
//                   />
//                 ))}
//               </Box>
//             </FormControl>
//           </Box>
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'row',
//               justifyContent: 'center',
//               width: '100%',
//               borderRadius: 1,
//             }}
//           >
//             <Button
//               variant='contained'
//               color='success'
//               type='submit'
//               sx={{ m: 1 }}
//             >
//               ยืนยัน
//             </Button>
//             <Button
//               variant='outlined'
//               color='error'
//               sx={{ m: 1 }}
//               type='reset'
//             >
//               reset
//             </Button>
//           </Box>
//         </form>
//       </PapperBlock>
//       <Dialog
//         open={openPopupAns}
//         onClose={handleClose}
//         aria-labelledby='alert-dialog-title'
//         aria-describedby='alert-dialog-description'
//       >
//         <DialogTitle id='alert-dialog-title'>
//           {'โปรดกรอกข้อมูลให้ครบทุกข้อ'}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id='alert-dialog-description'>
//             ข้อที่ยังไม่ได้เลือกคือข้อที่
//             {checkAnswers.map((checkAnswer, index) => (
//               <React.Fragment key={checkAnswer}>
//                 {` ${checkAnswer}${
//                   index !== checkAnswers.length - 1 ? ', ' : ''
//                 }`}
//               </React.Fragment>
//             ))}
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button
//             onClick={handleClose}
//             autoFocus
//           >
//             ตกลง
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Dialog
//         open={openPopupConfirm}
//         onClose={handleClose}
//         aria-labelledby='alert-dialog-title'
//         aria-describedby='alert-dialog-description'
//       >
//         <DialogTitle id='alert-dialog-title'>
//           {'ยืนยันส่งแบบประเมินความสนใจ'}
//         </DialogTitle>
//         <DialogContent></DialogContent>
//         <DialogActions>
//           <Button
//             onClick={handleClose}
//             autoFocus
//           >
//             ตกลง
//           </Button>
//           <Button
//             onClick={handleClose}
//             autoFocus
//           >
//             ยกเลิก
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
