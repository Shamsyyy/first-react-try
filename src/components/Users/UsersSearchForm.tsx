import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../redux/usersReducer";


const usersSearchFormValidate = (value: any) => {
    const errors = {}
    return errors
}

type FormType = {
    term: string,
    friend: 'null' | 'false' | 'true'
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
    const submit = (
        values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'true'
                ? true
                : values.friend === 'false' ? false : null
        }

        props.onFilterChanged(filter);
        setSubmitting(false);
    }
    return <div>
        <Formik
            initialValues={{term: '', friend: 'null'}}
            onSubmit={submit}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </div>
})