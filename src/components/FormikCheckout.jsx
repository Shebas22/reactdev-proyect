import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { ConfirmOrder } from './ConfirmOrder'

const FormikCheckout = () => {
    const [email, setEmail] = useState('user@domain.type.country')
    const [vError, setVError] = useState(true)

    function validateName(value) {
        let error
        if (!value) {
            error = 'campo obligatorio*'
        }
        return error
    }

    function validatePhone(value) {
        let validRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        let error
        if (!value) {
            error = 'campo obligatorio*'
        } else if (!value.match(validRegex)) {
            error = "Debe ingresar un número válido"
        }
        return error
    }

    function validateEmail(value) {
        setEmail(value)
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let error
        if (!value) {
            error = 'campo obligatorio*'
        } else if (!value.match(validRegex)) {
            error = "Debe ingresar un email válido"
        }
        return error
    }

    function validateVEmail(value) {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let error
        if (!value) {
            error = 'campo obligatorio*'
        } else if (!value.match(validRegex)) {
            error = "Debe ingresar un email válido"
        } else if (value != email) {
            error = "Debe coincidir con el email definido anteriormente"
        }
        return error
    }

    return (
        <Formik
            initialValues={{ name: 'Naruto', phone: '0123456789', email: email, vemail: email }}
            onSubmit={(values, actions) => {
                setVError(false)
                actions.setSubmitting(false)
                // setTimeout(() => {
                // alert(JSON.stringify(values, null, 2))
                // }, 1000)
            }}
        >
            {(props) => (
                <Form>
                    <Field name='name' validate={validateName}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <FormLabel>Nombre</FormLabel>
                                <Input {...field} placeholder='Nombre' />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='phone' validate={validatePhone}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.phone && form.touched.phone}>
                                <FormLabel>Telefono</FormLabel>
                                <Input {...field} placeholder='Phone' />
                                <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='email' validate={validateEmail}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.email && form.touched.email}>
                                <FormLabel>Email</FormLabel>
                                <Input {...field} placeholder='Email' />
                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='vemail' validate={validateVEmail}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.vemail && form.touched.vemail}>
                                <FormLabel>Verifique Email</FormLabel>
                                <Input {...field} placeholder='Email' />
                                <FormErrorMessage>{form.errors.vemail}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <ConfirmOrder props={props} vError={vError} setVError={setVError}/>
                </Form>
            )}
        </Formik>
    )
}


export default FormikCheckout