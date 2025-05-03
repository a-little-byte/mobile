import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import { Colors } from "../../constants/Colors";
import { useTheme } from "../providers/ThemeProvider";

interface TypewriterProps {
  text: string[] | string;
  waitTime?: number;
  deleteSpeed?: number;
  typeSpeed?: number;
  cursorChar?: string;
  style?: TextStyle;
  className?: string; // Ignored in React Native but kept for API compatibility
}

const Typewriter = ({
  text,
  waitTime = 2000,
  deleteSpeed = 50,
  typeSpeed = 100,
  cursorChar = "|",
  style,
}: TypewriterProps) => {
  const textsArray = Array.isArray(text) ? text : [text];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const { resolvedTheme } = useTheme();
  const themeColors = Colors[resolvedTheme === "dark" ? "dark" : "light"];

  // Used to track if the component is still mounted
  const isMounted = useRef(true);

  useEffect(() => {
    // Cleanup function to prevent state updates on unmounted component
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      // Current word based on the loop number
      const currentIndex = loopNum % textsArray.length;
      const fullText = textsArray[currentIndex];

      // Set the current text based on whether we're deleting or typing
      const updatedText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);

      if (isMounted.current) {
        setCurrentText(updatedText);
      }

      // Handle deleting state
      if (!isDeleting && updatedText === fullText) {
        // Wait before starting to delete
        setTimeout(() => {
          if (isMounted.current) {
            setIsDeleting(true);
          }
        }, waitTime);
      } else if (isDeleting && updatedText === "") {
        // Move to next word once current word is deleted
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    // Set the typing/deleting interval
    const timeoutId = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typeSpeed,
    );

    // Cleanup timeout on component unmount or dependency change
    return () => clearTimeout(timeoutId);
  }, [
    currentText,
    isDeleting,
    loopNum,
    textsArray,
    waitTime,
    deleteSpeed,
    typeSpeed,
  ]);

  return (
    <Text style={[styles.text, { color: themeColors.primary }, style]}>
      {currentText}
      <Text style={styles.cursor}>{cursorChar}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
  },
  cursor: {
    opacity: 1,
    fontWeight: "bold",
  },
});

export default Typewriter;
