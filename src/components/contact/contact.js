import Image from "next/image";
import { GlobalSection, GlobalTitle, SpanTitle } from "../global-components";
import {
  Button,
  Card,
  CardContainer,
  Container,
  ImageContainer,
  Text,
  Title,
} from "./contact.styles";

const Contact = ({ data }) => {
  return (
    <GlobalSection px={[20, 20, 40, 40, 0]} pt={[20, 60, 80]}>
      <GlobalTitle fontSize={[34, 40, 50]} lineHeight={["small", "medium", "large"]}>
        For those who provide <SpanTitle> beauty services </SpanTitle>
      </GlobalTitle>

      <Container>
        {data.map((card, index) => {
          return (
            <CardContainer key={index}>
              <Card>
                <ImageContainer>
                  <Image
                    src={`http:${card.fields.image.fields.file.url}`}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </ImageContainer>
                <Title
                  fontSize={[32, 34, 38]}
                  condensed
                  white
                  lineHeight={["xs", "smaller", "medium"]}>
                  {card.fields.freelancersSalonsTitle}
                </Title>
                <Button fontSize={[24]} lineHeight={["sub"]}>
                  Sign Up
                </Button>
              </Card>

              <Text fontSize={[20]} lineHeight={["sub"]}>
                {card.fields.description.content[0].content[0].value}
              </Text>
            </CardContainer>
          );
        })}
      </Container>
    </GlobalSection>
  );
};

export default Contact;
