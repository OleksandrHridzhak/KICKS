import styles from "./LoginForm.module.scss";
import Button from "@/shared/components/Button/Button";
import Input from "@/shared/components/Input/Input";
import Heading from "@/shared/components/Heading/Heading";
import Text from "@/shared/components/Text/Text";
import CheckBox from "@/shared/components/CheckBox/CheckBox";

import { login } from "../../api/login";
import { ArrowRight } from "lucide-react";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Link from "@/shared/components/Link/Link";

export function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(form);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Header Block */}
        <div className={styles.formHeader}>
          <Heading fontSize="fs24-fs36" tag="h1" id="login-title">
            Login
          </Heading>
          <Link to="/forgot-password" variant="underline">
            <Text tag="span" fontSize="fs14-fs16" fontWeight="semiBold">
              Forgot your password?
            </Text>
          </Link>
        </div>

        {/* Inputs Block */}
        <div className={styles.inputsBlock}>
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <Input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>

        {/* CheckBox */}
        <div className={styles.checkboxBlock}>
          <CheckBox
            fontSize="fs14-fs16"
            checked={form.rememberMe}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, rememberMe: e.target.checked }))
            }
          >
            Keep me logged in - applies to all log in options below. More info
          </CheckBox>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          height="h48"
          fontSize="fs14-fs14"
          justify="between"
        >
          EMAIL LOGIN
          <ArrowRight size={16} />
        </Button>

        {/* External Services Auth Block */}
        <div className={styles.externalSerivcesAuthBlock}>
          <Button
            variant="outline"
            height="h56-h64"
            borderRadius="br12"
            type="button"
          >
            GOOGLE
          </Button>
        </div>

        {/* Legal Text */}
        <div className={styles.legalTextBlock}>
          <Text tag="p" fontSize="fs14-fs16" fontWeight="semiBold">
            By clicking 'Log In' you agree to our website{" "}
            <Link to="/terms" variant="underline">
              KicksClub Terms & Conditions
            </Link>
            , Kicks Privacy Notice and{" "}
            <Link to="/terms" variant="underline">
              {" "}
              Terms & Conditions.{" "}
            </Link>
          </Text>
        </div>
      </form>
    </div>
  );
}
