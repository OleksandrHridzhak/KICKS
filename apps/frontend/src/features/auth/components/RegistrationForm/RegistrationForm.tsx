import styles from "./RegistrationForm.module.scss";
import Button from "@/shared/components/Button/Button";
import Input from "@/shared/components/Input/Input";
import Heading from "@/shared/components/Heading/Heading";
import Text from "@/shared/components/Text/Text";
import CheckBox from "@/shared/components/CheckBox/CheckBox";
import { ArrowRight } from "lucide-react";
import { config } from "@/shared/config";

import React, { useState } from "react";

export function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${config.apiUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Header */}
        <div className={styles.formHeader}>
          <Heading fontSize="fs24-fs36" tag="h1" id="login-details-title">
            Register
          </Heading>
          <Text tag="span" fontSize="fs16-fs20" fontWeight="semiBold">
            Sign up with
          </Text>
        </div>

        <div className={styles.externalSerivcesAuthBlock}>
          <Button variant="outline" height="h56-h64" borderRadius="br12">
            GOOGLE
          </Button>
        </div>

        <Text tag="div" fontSize="fs20-fs20" fontWeight="semiBold">
          OR
        </Text>

        {/* Your Name */}
        <div
          role="group"
          aria-labelledby="your-name-title"
          className={styles.yourNameBlock}
        >
          <Heading fontSize="fs20-fs24" tag="h2" id="your-name-title">
            Your Name
          </Heading>

          <Input type="text" placeholder="First Name" />

          <Input type="text" placeholder="Last Name" />
        </div>

        {/* Gender */}
        <div
          role="group"
          aria-labelledby="gender-title"
          className={styles.genderBlock}
        >
          <Heading fontSize="fs20-fs24" tag="h2" id="gender-title">
            Gender
          </Heading>

          <div className={styles.genderCheckBoxes}>
            <CheckBox fontSize="fs14-fs16">Men</CheckBox>
            <CheckBox fontSize="fs14-fs16">Women</CheckBox>
            <CheckBox fontSize="fs14-fs16">Other</CheckBox>
          </div>
        </div>
        {/* Login details */}
        <div
          role="group"
          aria-labelledby="login-details-title"
          className={styles.loginDetailsBlock}
        >
          <Heading fontSize="fs20-fs24" tag="h2" id="login-details-title">
            Login details
          </Heading>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <Input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            helperText="Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number"
          />
          <Input
            type="password"
            value={password}
            placeholder="Repeat password"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <CheckBox fontSize="fs14-fs16">
          By clicking 'Log In' you agree to our website KicksClub Terms &
          Conditions, Kicks Privacy Notice and Terms & Conditions.
        </CheckBox>
        <CheckBox fontSize="fs14-fs16">
          Keep me logged in - applies to all log in options below. More info
        </CheckBox>
        <Button type="submit" height="h48" fontSize="fs16" justify="between">
          REGISTER
          <ArrowRight size={16} />
        </Button>
      </form>
    </div>
  );
}
