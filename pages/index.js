import react, { useState } from "react";
import { Button, Heading, VStack } from "@chakra-ui/react";
import Footer from "components/footer/myFooter";
import MyHead from "components/head/head";
import MyPin from "components/myPin/myPin";
import styles from "../styles/Home.module.css";
import NavBar from "components/navBar/navBar";

export default function Home() {
  const palavra = "monte";
  const [word1, setWord1] = useState({ word: "", isvalid: false, isSame: -1 });
  const [word2, setWord2] = useState({ word: "", isvalid: true, isSame: -1 });
  const [word3, setWord3] = useState({ word: "", isvalid: true, isSame: -1 });
  const [word4, setWord4] = useState({ word: "", isvalid: true, isSame: -1 });
  const [word5, setWord5] = useState({ word: "", isvalid: true, isSame: -1 });

  function keyDown(event, isWord, setWord, setNextWord) {
    let rLetter = [0, 0, 0, 0, 0];
    let wPLetter = [0, 0, 0, 0, 0];
    if (
      (event.code === "Enter" ||
        event.code === "NumpadEnter" ||
        event.type === "click") &&
      isWord.word.length === 5
    ) {
      isWord.word === word5.word
        ? setNextWord({ word: "", isvalid: true, isSame: -1 })
        : setNextWord({ word: "", isvalid: false, isSame: -1 });

      if (palavra === isWord.word) {
        setWord({ word: isWord.word, isvalid: true, isSame: 1 });
        isWord.word !== word5.word
          ? setNextWord({ word: "", isvalid: true, isSame: -1 })
          : null;
      } else {
        for (let index = 0; index < 5; index++) {
          for (let index2 = 0; index2 < 5; index2++) {
            if (isWord.word[index] === palavra[index2]) {
              if (index === index2) {
                rLetter[index] = index + 1;
              } else {
                wPLetter[index] = index + 1;
              }
            }
          }
        }

        setWord({
          word: isWord.word,
          isvalid: true,
          isSame: 0,
          wPLet: wPLetter,
          rLet: rLetter,
        });
      }
    }
  }

  return (
    <div className={styles.container}>
      <MyHead />

      <main className={styles.main}>
        <NavBar />
        <Heading mb={10} fontFamily="fantasy" fontSize={38} cursor="default">
          CYNCO
        </Heading>

        <VStack>
          <MyPin
            disabled={word1.isvalid}
            setWord={setWord1}
            onKeyDown={(e) => keyDown(e, word1, setWord1, setWord2)}
            isSame={word1.isSame}
            wPLetter={word1.wPLet}
            rLetter={word1.rLet}
          />
          <MyPin
            disabled={word2.isvalid}
            setWord={setWord2}
            onKeyDown={(e) => keyDown(e, word2, setWord2, setWord3)}
            isSame={word2.isSame}
            wPLetter={word2.wPLet}
            rLetter={word2.rLet}
          />
          <MyPin
            disabled={word3.isvalid}
            setWord={setWord3}
            onKeyDown={(e) => keyDown(e, word3, setWord3, setWord4)}
            isSame={word3.isSame}
            wPLetter={word3.wPLet}
            rLetter={word3.rLet}
          />
          <MyPin
            disabled={word4.isvalid}
            setWord={setWord4}
            onKeyDown={(e) => keyDown(e, word4, setWord4, setWord5)}
            isSame={word4.isSame}
            wPLetter={word4.wPLet}
            rLetter={word4.rLet}
          />
          <MyPin
            disabled={word5.isvalid}
            setWord={setWord5}
            onKeyDown={(e) => keyDown(e, word5, setWord5, setWord5)}
            isSame={word5.isSame}
            wPLetter={word5.wPLet}
            rLetter={word5.rLet}
          />
        </VStack>
        <Footer />
      </main>
    </div>
  );
}
