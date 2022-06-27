import React from "react";
// Componets
import ImageSlider from "../ImageSlider";
// Styles
import { ContentItem, Title, SubTitle } from "./CompareImage.styles";

function CompareImage({ children, title="", itemTitle = "", subTitle = ""}) {
  return (
    <ImageSlider title={title}>
      {children.map((child, id) => (
        <ContentItem key={id}>
          {itemTitle[id] ? (
            <Title>{itemTitle[id]}</Title>
          ) : (
            <SubTitle>{subTitle[id]}</SubTitle>
          )}

          {child}
        </ContentItem>
      ))}
    </ImageSlider>
  );
}

export default CompareImage;