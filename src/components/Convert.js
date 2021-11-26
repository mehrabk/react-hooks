import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  useEffect(() => {
    try {
      const doTranslation = async () => {
        // in axios post request first object for body reqest and second for query string
        const { data } = await axios.post(
          "https://translation.googleapis.com/language/translate/v2",
          {},
          {
            params: {
              q: debouncedText,
              target: language.value,
              key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
            },
          }
        );
        setTranslated(data.data.translations[0].translatedText);
      };
      doTranslation();
    } catch (err) {
      console.log(err);
    }
  }, [language, debouncedText]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
