import React, { useEffect, useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import axios from "axios";
import { Wrapper, Control, Slide, Container } from "./styleds";

function Slider() {
  const [items, setItems] = useState([]);

  const fetch = async () => {
    const result = [];

    axios.get("https://picsum.photos/v2/list?limit=3").then(({ data }) => {
      data.forEach((img) => {
        result.push({
          key: img.id,
          src: img.download_url,
        });
      });
      setItems([...result]);
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <h4>Seus projetos:</h4>
      <Wrapper>
        <Control left={true}>
          <AiOutlineCaretLeft />
        </Control>
        <Container>
          {items.map((item) => (
            <Slide key={item.key} src={item.src} />
          ))}
        </Container>
        <Control>
          <AiOutlineCaretRight />
        </Control>
      </Wrapper>
    </>
  );
}

export default Slider;
