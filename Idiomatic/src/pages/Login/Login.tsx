import React from "react";
import { Box, Container, Typography, useTheme, Button, Link } from "@mui/material";
import { button_container, login_btn, recovery_password_container, register_btn, wrap_all_container } from "./Login.styles";
import LoginForm from "./LoginForm";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginCredentialsType } from "@services/services_types/Login.types";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type FormInputs = {
  email: string;
  pass: string;
};

type Props = {
  AuthService: LoginCredentialsType;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("No es un correo valido")
    .required("Campo requerido"),
  pass: yup.string().required("Contraseña es requerida"),
});

const Login = ({ AuthService }: Props) => {
  const navigate = useNavigate();

  const { mutateAsync, isError, error, isSuccess, data } = useMutation({
    mutationKey: ["auth"],
    mutationFn: AuthService,
    onSettled: (data) => {
      if (data) {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/crud", { replace: true });
      }
    }
  });

  const methods = useForm<FormInputs>({
    defaultValues: {
      email: "",
      pass: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = methods.handleSubmit(async ({ email, pass }) => {
    try {
      const response = await mutateAsync({
        request: {
          email: email,
          pass: pass,
        },
      });
      methods.reset();
      console.log(response);
    } catch (error) {
      console.error("Error login user", error);
    }
  });

  const theme = useTheme();

  return (
    <>
      <Box sx={wrap_all_container}>
        <Container
          maxWidth="tablet"
          sx={{
            padding: "0",
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.backgroundForm.main,
              padding: "2rem",
              borderRadius: 10,
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                marginTop: "1.5rem",
                marginBottom: "4rem",
                position: "relative",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.mainText.main,
                  fontWeight: "700",
                  "&::after": {
                    content: "''", // Contenido vacío para el pseudo-elemento
                    position: "absolute",
                    top: 40,
                    right: "calc(50% - 50px)",
                    width: "100px",
                    height: "0.2rem",
                    backgroundColor: theme.palette.icon.main,
                  },
                }}
              >
                INICIAR SESIÓN
              </Typography>
            </Box>
            <FormProvider {...methods}>
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <LoginForm email="email" pass="pass" />
              </Box>
            </FormProvider>
            {isSuccess && (
              <>
                <Box
                  sx={{
                    width: "70%",
                    margin: "0 auto",
                    textAlign: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "600",
                      color: theme.palette.success.main,
                    }}
                  >
                    {data.message}
                  </Typography>
                </Box>
              </>
            )}
            {isError && (
              <>
                <Box
                  sx={{
                    width: "70%",
                    margin: "0 auto",
                    textAlign: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "600",
                      color: theme.palette.error.main,
                    }}
                  >
                    {error.message + "."}
                  </Typography>
                </Box>
              </>
            )}
            <Box sx={recovery_password_container}>
              <Link
                href="password-recovery"
                sx={{
                  cursor: "pointer",
                }}
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </Box>
            <Box sx={button_container}>
              <Button type="submit" sx={register_btn} onClick={onSubmit}>
                Iniciar Sesión
              </Button>
              <Button sx={login_btn} href="/">
                Registrarse
              </Button>
            </Box>
          </Box>
          {JSON.stringify(methods.watch())}
        </Container>
      </Box>
    </>
  );
};

export default Login;
