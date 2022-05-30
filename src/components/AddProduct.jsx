import React from "react";
import { Button, Modal,ModalBody,Input,Select,RadioGroup,Radio,ModalOverlay} from '@chakra-ui/react'
import { useState} from "react";
import { useDisclosure } from "@chakra-ui/react";

const AddProduct = () => {
 const [flag,setFlag] = useState(false)
 const { isOpen, onOpen, onClose } = useDisclosure()

 
  return (
    <>
      <Button my={4} data-cy="add-product-button" style={{width:"fit-content",marginLeft:"600px"}} onClick={onOpen}>Add New Product</Button>
    
      <Modal  isOpen={isOpen} onClose={onClose} style={{zIndex:1}} >
     
        <ModalBody pb={6}>
       
          <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">shirt</option>
            <option data-cy="add-product-category-pant">pant</option>
            <option data-cy="add-product-category-jeans">jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button" onClick={onClose}>Submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
