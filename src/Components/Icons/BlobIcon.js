import React from "react";
import useBlobUrl from "./useBlobUrl";

const BlobIcon = ({ src, alt, ref }) => {
  const blobSrc = useBlobUrl(src);

  return <img src={blobSrc} alt={alt} ref={ref} />;
};

export default BlobIcon;