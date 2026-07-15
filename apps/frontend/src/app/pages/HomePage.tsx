import Input from "@/shared/components/Input/Input";
import Wrapper from "@/shared/components/Wrapper/Wrapper";

function HomePage() {
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Password"
        titleText="Title text here"
        helperText="Helper text here"

      />


    </Wrapper>

  );
}

export default HomePage;
