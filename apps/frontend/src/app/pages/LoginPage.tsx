import { LoginForm } from "@/features/auth/components/LoginForm/LoginForm";
import styles from "./LoginPage.module.scss"
import Wrapper from "@/shared/components/Wrapper/Wrapper";

// type LoginPageProps = {

// }



function LoginPage() {

  return (
    <Wrapper>
      {/* <div className={styles.mainContainer} >

        <div className={styles.formSection} >

        </div>
        <div className={styles.bannerSection} >
          <div className={styles.fakeAdverstment}>

          </div>
        </div>


      </div> */}

      <LoginForm>

      </LoginForm>
    </Wrapper>

  );
}

export default LoginPage;