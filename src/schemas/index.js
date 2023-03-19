import * as yup from 'yup'
// validation for input field 
export const signUpSchema = yup.object({
    Create_Group: yup.string().min(5).max(20).required("Please Enter Group Name") ,
    description: yup.string().min(20).max(300).required("Please Enter Description") ,
    term: yup.array(
        yup.object({
            Enter_Term: yup.string().min(5, 'Term must be at least 5 characters').max(20,'Term must be at most 20 characters').required("Please Enter Term") ,
            Enter_Definition: yup.string().min(10, 'Definition must be at least 10 characters').max(200,'Definition must be at most 200 characters').required("Please Enter Definition") ,
        })
    ),
});