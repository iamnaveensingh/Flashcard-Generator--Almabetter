import * as yup from 'yup'
// validation for input field 
export const signUpSchema = yup.object().shape({
    Create_Group: yup.string().min(5).max(20).required("Please Enter Group Name") ,
    description: yup.string().min(20).max(300).required("Please Enter Description") ,
    term: yup.array().of(
        yup.object().shape({
            Enter_Term: yup.string().min(5).max(20).required("Please Enter Term") ,
            Enter_Definition: yup.string().min(10).max(200).required("Please Enter Definition") ,
        })
    ),
});