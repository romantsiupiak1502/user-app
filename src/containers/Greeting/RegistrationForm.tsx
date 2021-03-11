import React from 'react';
import { Field, Formik } from 'formik';

import { DatePickerField, InputField, PasswordInputField } from '../../components';
import { styled } from '../../styles';
import { formErrorUtil } from '../../utils';

import { FormStyled, SubmitButton } from './LoginForm';

const FieldsRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputFieldStyled = styled(InputField)`
  width: 88%;
`;

const EmailInput = styled(InputField)`
  width: 94%;
`;

const PasswordInputStyled = styled(PasswordInputField)`
  margin-top: 24px;
  width: 88%;
`;

export const RegistrationForm = () => {
  const now = new Date();
  const date = now.getFullYear() + '-' + now.getMonth() + 1 + '-' + now.getDate();
  return (
    <Formik
      initialValues={ {
        date: '',
        fullName: '',
        email: '',
        password: '',
        repeatPassword: '',
      } }
      onSubmit={ () => {} }
    >
      { ({values}) => (
      <FormStyled>
        <Field
          name="date"
          label="Birthday"
          defaultValue={date}
          validate={formErrorUtil.combineValidation(
            [formErrorUtil.date, formErrorUtil.age])}
          component={ DatePickerField } />
        <FieldsRow>
          <Field
            name="name"
            placeholder="Enter your name"
            validate={formErrorUtil.required}
            component={ InputFieldStyled }/>
          <Field
            name="surname"
            placeholder="Enter your surname"
            validate={formErrorUtil.required}
            component={ InputFieldStyled }/>
        </FieldsRow>
        <Field
          name="email"
          placeholder="Enter your email"
          validate={formErrorUtil.combineValidation(
            [formErrorUtil.required, formErrorUtil.email])}
          component={ EmailInput }/>
        <FieldsRow>
          <Field
            name="password"
            placeholder="Enter your password"
            validate={formErrorUtil.combineValidation(
              [formErrorUtil.required, formErrorUtil.password])}
            component={ PasswordInputStyled }/>
          <Field
            name="repeatPassword"
            placeholder="Repeat your password"
            validate={ (value: string) => formErrorUtil.passwordRequirements(values.password, value)}
            component={ PasswordInputStyled }/>
        </FieldsRow>
        <SubmitButton type='submit' text='Sign up' onClick={ () => {}} />
      </FormStyled>
        )}
    </Formik>
  );
}