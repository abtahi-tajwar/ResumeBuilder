import { useEffect, useState } from "react";
import thwack from "thwack";

const useBlobUrl = imageUrl => {
  const [blobUrl, setBlobUrl] = useState("");

  useEffect(() => {
    // get the blob URL for this image URL (or null)
    let url = sessionStorage.getItem(imageUrl);

    async function fetchData() {
      if (!url) {
        // skip load if we have a URL previously stored in sessionStorage
        const { data } = await thwack.get(imageUrl, { responseType: "blob" });
        url = URL.createObjectURL(data); // create a "blob URL" (lasts per session)
        sessionStorage.setItem(imageUrl, url); // save in session storage
      }
      setBlobUrl(url); // set in state
    }

    fetchData();
  }, [imageUrl]); // only execure if imageUrl changes

  return blobUrl;
};

export default useBlobUrl;
