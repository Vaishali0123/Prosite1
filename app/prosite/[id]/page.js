"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import prosite from "../../assets/prosite.png";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const Page = ({ params }) => {
  const [data, setData] = useState([]);

  function decodeUsernameAndNumber(encodedString) {
    const decodedString = decodeURIComponent(encodedString);
    return decodedString;
  }

  const fetchf = async () => {
    try {
      const res = await axios.post(
        "https://work.grovyo.xyz/api/v1/getprosite",
        {
          username: decodeUsernameAndNumber(params.id),
        }
      );
      setData(res.data?.prosite);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data);

  useEffect(() => {
    fetchf();
  }, []);
  return (
    <>
      {[data]?.map((d, i) => (
        <div key={i}>
          <div dangerouslySetInnerHTML={{ __html: d }} />
        </div>
      ))}
    </>
  );
};

export default Page;
