import React from "react";
import Crud_Data from "./Crud_Data";
import Create from "./Create";
import Update from "./Update";

function CrudLayout(){
  return(
    <>
      <Crud_Data />
      <Read />
      <Create />
      <Update />
    </>
  );
}

export default CrudLayout;