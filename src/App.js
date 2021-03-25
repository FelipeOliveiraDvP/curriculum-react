import { Header, Main, Footer, Overlay, Card, Button, Group } from "./styleds";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import { Form, Field } from "react-final-form";
import InputMask from "react-input-mask";

import Slider from "./components/Slider";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const onSubmit = values => {
    setData({ ...values });
  };

  return (
    <>
      <Header />
      <Main>
        <Container>
          <Overlay>
            <Row>
              <Col xs={12} md={6} className="mb-3 mb-md-0">
                <Card type="form">
                  <h2>Venha trabalhar na Docket</h2>
                  <p>
                    Preencha o formulário abaixo e venha trabalhar em uma das
                    startups mais desejadas do Brasil!
                  </p>
                  <h3>Dados pessoais</h3>
                  <Form
                    onSubmit={onSubmit}
                    validate={(values) => {
                      const errors = {};

                      function validateEmail(email) {
                        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return re.test(String(email).toLowerCase());
                      }

                      if (!values.name) {
                        errors.name = "Campo Obrigatório";
                      }
                      if (!values.email) {
                        errors.email = "Campo Obrigatório";
                      } else if (!validateEmail(values.email)) {
                        errors.email = "Informe um e-mail válido";
                      }
                      if (!values.phone1) {
                        errors.phone1 = "Campo Obrigatório";
                      }
                      return errors;
                    }}
                    render={({
                      handleSubmit,
                      values,
                      form,
                      submitting,
                      validating,
                      valid,
                    }) => (
                      <form
                        onSubmit={(event) => {                          
                          handleSubmit(event);
                          form.restart();
                        }}
                      >
                        <FormGroup>
                          <Label for="name">Nome completo</Label>
                          <Field name="name">
                            {({ input, meta }) => (
                              <div>
                                <Input
                                  {...input}
                                  type="text"
                                  placeholder="Seu nome completo"
                                  invalid={meta.error && meta.touched}
                                />
                                {meta.error && (
                                  <FormFeedback>{meta.error}</FormFeedback>
                                )}
                              </div>
                            )}
                          </Field>
                        </FormGroup>
                        <FormGroup>
                          <Label for="email">E-mail</Label>
                          <Field name="email">
                            {({ input, meta }) => (
                              <div>
                                <Input
                                  {...input}
                                  type="email"
                                  placeholder="seuemail@email.com"
                                  invalid={meta.error && meta.touched}
                                />
                                {meta.error && (
                                  <FormFeedback>{meta.error}</FormFeedback>
                                )}
                              </div>
                            )}
                          </Field>
                        </FormGroup>
                        <Row form>
                          <Col xs={12} md={6}>
                            <FormGroup>
                              <Label for="phone1">Telefone 1</Label>
                              <Field name="phone1">
                                {({ input, meta }) => (
                                  <div>
                                    <InputMask
                                      mask="(99) 99999 9999"
                                      {...input}
                                    >
                                      {(props) => (
                                        <Input
                                          {...input}
                                          {...props}
                                          type="text"
                                          placeholder="(00) 00000 0000"
                                          invalid={meta.error && meta.touched}
                                        />
                                      )}
                                    </InputMask>
                                    {meta.error && (
                                      <FormFeedback>{meta.error}</FormFeedback>
                                    )}
                                  </div>
                                )}
                              </Field>
                            </FormGroup>
                          </Col>
                          <Col xs={12} md={6}>
                            <FormGroup>
                              <Label for="phone2">Telefone 2</Label>
                              <Field name="phone2">
                                {({ input, meta }) => (
                                  <div>
                                    <InputMask
                                      mask="(99) 99999 9999"
                                      {...input}
                                    >
                                      {(props) => (
                                        <Input
                                          {...input}
                                          {...props}
                                          type="text"
                                          placeholder="(00) 00000 0000"
                                        />
                                      )}
                                    </InputMask>
                                  </div>
                                )}
                              </Field>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button type="submit" disabled={!valid}>
                          Enviar
                        </Button>
                      </form>
                    )}
                  ></Form>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card>
                  <h2>FICHA DO CANDIDATO</h2>
                  <p className="text-muted">
                    Preencha o formulário e clique em "Enviar" após conferir
                    atentamente
                  </p>
                  {!data ? (
                    <div style={{ minHeight: 215 }} />
                  ) : (
                    <>
                      <Group>
                        <label>Nome completo:</label>
                        <span>{data.name}</span>
                      </Group>
                      <Group>
                        <label>E-mail:</label>
                        <span>{data.email}</span>
                      </Group>
                      <Group>
                        <label>Telefone 1:</label>
                        <span>{data.phone1}</span>
                      </Group>
                      <Group>
                        <label>Telefone 2:</label>
                        <span>
                          {data.phone2 ? data.phone2 : "Não informado"}
                        </span>
                      </Group>
                    </>
                  )}
                  <Slider />
                </Card>
              </Col>
            </Row>
          </Overlay>
        </Container>
      </Main>
      <Footer>DOCKET &COPY; 2021</Footer>
    </>
  );
}

export default App;
