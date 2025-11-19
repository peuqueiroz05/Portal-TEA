import React, { useEffect } from "react";

const Ads = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) { }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", margin: "20px auto" }}
      data-ad-client="ca-pub-6914191881635216"
      data-ad-slot="3659029662"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default Ads;
