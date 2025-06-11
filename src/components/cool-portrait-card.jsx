import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function CoolPortraitCard({ children, className }) {
  return (
    <CardContainer className={className}>
      <CardBody>
        <CardItem translateZ="50">{children}</CardItem>
      </CardBody>
    </CardContainer>
  );
}
