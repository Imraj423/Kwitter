import React from "react";

import { Link } from "@material-ui/core";



export default function LogOutbtn(){


    return (
      <div id="signoutbtn" style={{ display: "flex" }}>
        <Link href="/" 
        size="small" 
        color="primary"
        style={{ backgroundColor: "lightskyblue" }}
        >
          LOGOUT</Link>
        
      </div>
    );
  }


