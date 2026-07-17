import styles from "./RegistrationForm.module.scss"
import Button from '@/shared/components/Button/Button';
import Input from '@/shared/components/Input/Input';
import { config } from '@/shared/config'

import React, { useState } from "react";

export function RegistrationForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch(`${config.apiUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })

      console.log(response)

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input type='email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
        <Input type='password' value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
        <Button type='submit' height="h48" fontSize="fs16">
          REGISTER
        </Button>
      </form>
    </div>
  );
}