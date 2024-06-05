import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import DefaultLayout from "../../components/DefaultLayout.js";
import Template1 from "./template1.js";
import Template2 from "./template2.js";
import Template3 from "./template3.js";
import Template4 from "./template4.js";
import Template5 from "./template5.js";

import { Button } from "antd";


function Templates() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const params = useParams();
  const navigate = useNavigate()
  const gettemplate = () => {
    switch (params.id) {
      case "1": {
        return <Template1 />;
      }
      case "2": {
        return <Template2 />;
      }
      case "3": {
        return <Template3 />;
      }
      case "4": {
        return <Template4 />;
      }
      case "5": {
        return <Template5 />;
      }
    }
  };
  return (
    <DefaultLayout>
      <div >
        <Button className="btn1" style={{position:'relative', top: '4rem', left: '32rem', width: '12rem', height: '2.9rem', display:'flex',justifyContent:'center'}} onClick={()=>navigate('/home')}>Back</Button>
        <Button className="btn2" style={{position:'relative', top: '1.1rem', left: '72.5rem', width: '12rem', height: '2.9rem', display:'flex',justifyContent:'center'}}onClick={handlePrint}>Print</Button>
      </div>
      <div ref={componentRef}>{gettemplate()}</div>
    </DefaultLayout>
  );
}

export default Templates;
