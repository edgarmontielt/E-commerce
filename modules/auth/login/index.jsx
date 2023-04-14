import { Formik } from "formik";
import Input from "../../../components/global/form/input";
import { login } from "../../../features/user";
import useAuthDispatch from "../hooks/useAuthDispatch";
import Button from "../../../components/global/form/button";
import FormCustom from "./components/form";
import ImageLogin from "./components/image";
import SignInSchema from "./helpers/validationSchema";
import { Container, ErrorMessage, Message } from "./styled";
import LabelComponent from "./components/label";
import { useSelector } from "react-redux";
import { IoMdAlert } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";

export default function LoginModule({ user }) {
  const [signIn] = useAuthDispatch(login, "/");

  const {
    message: authValue,
    auth: {
      login: { message },
    },
  } = useSelector((state) => state.user);

  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={signIn}
      >
        <FormCustom>
          <p className="title">Login</p>
          {message && (
            <ErrorMessage>
              <IoMdAlert size={18} />
              {message}
            </ErrorMessage>
          )}
          {authValue && (
            <Message>
              <AiFillCheckCircle size={18} />
              {authValue}
            </Message>
          )}
          <section>
            <Input
              name="email"
              type="text"
              placeholder="Write your email..."
              label={"Email"}
            />
            <Input
              name="password"
              type="password"
              placeholder="Write yout password..."
              label={"Password"}
            />
          </section>
          <Button user={user} title={"Sing In"} size={"xl"} />
          <LabelComponent />
        </FormCustom>
      </Formik>
      <ImageLogin />
    </Container>
  );
}
