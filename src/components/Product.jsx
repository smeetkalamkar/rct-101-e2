import React from "react";
import { Stack,Image,Text,Tag,TagLabel,Heading,Box} from '@chakra-ui/react'

const Product = (props) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={props.todo.imageSrc} />
      <Text data-cy="product-category">{props.todo.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{props.todo.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{props.todo.title}</Heading>
      <Box data-cy="product-price">{props.todo.price}</Box>
     
    </Stack>
    
    
  );
};

export default Product;
