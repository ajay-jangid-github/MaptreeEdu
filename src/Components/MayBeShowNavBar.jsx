import React, { Children } from "react";

function MayBeShowNavBar({Children}){
  return(
    <>
        {Children}
    </>
  );
}

export default MayBeShowNavBar;