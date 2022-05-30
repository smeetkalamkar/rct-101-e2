import React from "react";
import { useState, useEffect } from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import { Flex, Grid } from "@chakra-ui/react";

import Pagination from "./Pagination";
import axios from "axios";
import "./App.css";

const Products = (props) => {
  // TODO: Remove below const and instead import them from chakra

  return (
    <Flex className="flex">
      {/*  AddProduct */ <AddProduct />}
      <Grid className="grid">
        {
          /* List of Products */
          props.todos.map((todo) => {
            return <Product todo={todo} />;
          })
        }
      </Grid>
      {
        /* Pagination */ <Pagination
          className="pagination"
          setPage={props.setPage}
          setLimit={props.setLimit}
          page={props.page}
          limit={props.limit}
          totalCount={props.totalCount}
        />
      }
    </Flex>
  );
};

export default Products;
