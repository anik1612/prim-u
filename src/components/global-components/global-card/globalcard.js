/* eslint-disable react/no-array-index-key */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { eventsOption, options, provideServices } from "../../../helpers/options";
import { Body, Button, Card, Wrapper, Img, SubTitle, Text, Title } from "./globalcard.styles";

function GlobalCard({
  title,
  subtitle,
  text,
  href,
  buttonText,
  src,
  className,
  banner,
  events,
  services,
  altImageName,
}) {
  return (
    <Card className={className}>
      <Wrapper>
        <Img src={src} layout="fill" quality="100" alt={altImageName} placeholder="blur" />
      </Wrapper>
      <Body>
        <Title suppressHydrationWarning>{title}</Title>
        {subtitle && <SubTitle>{subtitle}</SubTitle>}

        {banner && documentToReactComponents(banner, options)}
        {events && documentToReactComponents(events, eventsOption)}
        {services && documentToReactComponents(services, provideServices)}
        {text && text.map((p, i) => <Text key={i}>{p} </Text>)}
      </Body>
      <Button as="a" href={href} target="_blank" rel="noreferrer">
        {buttonText}
      </Button>
    </Card>
  );
}

export default GlobalCard;
