import React from "react";
import { Button, ButtonGroup ,Select} from '@chakra-ui/react'

const Pagination = (props) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  return (
    <ButtonGroup style={{width:"350px",marginLeft:"600px"}}>
      <Button data-cy="pagination-first-button" onClick={()=>props.setPage(1)} disabled={props.page===1}>First</Button>
      <Button data-cy="pagination-previous-button" onClick={()=>{
       
         if(props.page>1){
              props.setPage(props.page-1)
            }
               
      }} disabled={props.page===1}>Previous</Button>
      <Select data-cy="pagination-limit-select" onChange={(e)=>props.setLimit(e.target.value)}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button"  onClick={()=>props.setPage(props.page+1)} disabled={props.totalCount<props.page*props.limit}>Next</Button>
      <Button data-cy="pagination-last-button"  onClick={()=>props.setPage(Math.ceil(props.totalCount/props.limit))}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
