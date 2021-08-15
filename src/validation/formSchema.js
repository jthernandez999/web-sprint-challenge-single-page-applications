import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().required().min(2, 'name must be at least 2 characters'), 
    address: yup.string().required().min(6, 'must be at least 2 characters'), 
    email: yup.string().email().required(), 
    phoneNumber: yup.string().required().min(10, 'must be a valid phone number'),
    crust: yup.string().required('please select a type of crust'), 
    size: yup.string().required(),
    topping1: yup.boolean(), 
    topping2: yup.boolean(), 
    topping3: yup.boolean(), 
    topping4: yup.boolean(),
    special: yup.string()
})

export default schema