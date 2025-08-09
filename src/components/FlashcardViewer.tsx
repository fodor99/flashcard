import React, { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Flashcard } from "@/types/flashcard";
import { cn, shuffleArray } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useSound } from "@/hooks/use-sounds";
import { speakWord } from "@/utils/speak";

interface FlashcardViewerProps {
  flashcards: Flashcard[];
  onReset: () => void;
}

const FlashcardViewer: React.FC<FlashcardViewerProps> = ({ flashcards, onReset }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [correctOptionText, setCorrectOptionText] = useState<string>("");
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [feedbackColor, setFeedbackColor] = useState<string>("bg-blue-100");
  const [autoNextEnabled, setAutoNextEnabled] = useState<boolean>(true);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [speechEnabled, setSpeechEnabled] = useState<boolean>(false);
  const autoNextTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const playSound = useSound();

  // New state for statistics
  const [cardsPresentedCount, setCardsPresentedCount] = useState(1); // Starts at 1 for the first card
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  // Function to generate quiz options
  const generateOptions = useCallback(() => {
    const currentCardForOptions = flashcards[currentIndex];
    if(speechEnabled){
      speakWord(currentCardForOptions.front);
    }
    if (!currentCardForOptions) return;

    const correctAns = currentCardForOptions.back;
    setCorrectOptionText(correctAns);

    const allOtherBacks = flashcards
      .filter((_, index) => index !== currentIndex)
      .map(card => card.back);

    const uniqueIncorrectOptions = Array.from(new Set(allOtherBacks)).filter(
      (option) => option !== correctAns
    );

    const selectedIncorrectOptions: string[] = [];
    while (selectedIncorrectOptions.length < 2 && uniqueIncorrectOptions.length > 0) {
      const randomIndex = Math.floor(Math.random() * uniqueIncorrectOptions.length);
      selectedIncorrectOptions.push(uniqueIncorrectOptions[randomIndex]);
      uniqueIncorrectOptions.splice(randomIndex, 1);
    }

    while (selectedIncorrectOptions.length < 2) {
      selectedIncorrectOptions.push(`Another Option ${selectedIncorrectOptions.length + 1}`);
    }

    const allOptions = shuffleArray([correctAns, ...selectedIncorrectOptions]);
    setOptions(allOptions);
    setSelectedOptionIndex(null);
    setIsFlipped(false);
    setFeedbackColor("bg-blue-100");
  }, [flashcards, currentIndex]);

  useEffect(() => {
    generateOptions();
  }, [currentIndex, flashcards, generateOptions]);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const handleNext = useCallback(() => {
    if (autoNextTimeoutRef.current) {
      clearTimeout(autoNextTimeoutRef.current);
      autoNextTimeoutRef.current = null;
    }
    setIsFlipped(false);
    setSelectedOptionIndex(null);
    setFeedbackColor("bg-blue-100");
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % flashcards.length;
      setCardsPresentedCount(prevCount => prevCount + 1); // Increment cards presented
      return newIndex;
    });
  
  }, [flashcards, flashcards.length]);

  const handlePrev = useCallback(() => {
    if (autoNextTimeoutRef.current) {
      clearTimeout(autoNextTimeoutRef.current);
      autoNextTimeoutRef.current = null;
    }
    setIsFlipped(false);
    setSelectedOptionIndex(null);
    setFeedbackColor("bg-blue-100");
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + flashcards.length) % flashcards.length;
      setCardsPresentedCount(prevCount => prevCount + 1); // Increment cards presented
      return newIndex;
    });
  }, [flashcards.length]);

  const handleOptionSelect = useCallback((selectedText: string, index: number) => {
    if (selectedOptionIndex !== null) return;

    setSelectedOptionIndex(index);
    setIsFlipped(true);

    if (selectedText === correctOptionText) {
      if(soundEnabled){
        playSound("success");
      }
      setFeedbackColor("bg-green-100");
      setCorrectAnswersCount(prevCount => prevCount + 1); // Increment correct answers
      if (autoNextEnabled) {
        autoNextTimeoutRef.current = setTimeout(() => {
          handleNext();
        }, 1000);
      }
    } else {
      if(soundEnabled){
        playSound("error");
      }
      setFeedbackColor("bg-red-100");
    }
  }, [selectedOptionIndex, correctOptionText, autoNextEnabled, handleNext]);

  // Clear timeout if component unmounts or current card changes
  useEffect(() => {
    return () => {
      if (autoNextTimeoutRef.current) {
        clearTimeout(autoNextTimeoutRef.current);
      }
    };
  }, [currentIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          handlePrev();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "ArrowUp":
        case "ArrowDown":
          handleFlip();
          break;
        case "Enter":
          onReset();
          break;
        case "1":
        case "2":
        case "3":
          const optionIndex = parseInt(event.key) - 1;
          if (options[optionIndex]) {
            handleOptionSelect(options[optionIndex], optionIndex);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrev, handleNext, handleFlip, onReset, options, handleOptionSelect]);

  // Handle stats reset
  const handleStatsReset = useCallback(() => {
    if (selectedOptionIndex === null) { // If no option selected (blue background)
      setCardsPresentedCount(1); // Reset to 1 for the current card
      setCorrectAnswersCount(0);
    } else { // If an option was selected (red or green background)
      setCardsPresentedCount(0); // Reset both to 0
      setCorrectAnswersCount(0);
    }
    // Clear any pending auto-next timeout
    if (autoNextTimeoutRef.current) {
      clearTimeout(autoNextTimeoutRef.current);
      autoNextTimeoutRef.current = null;
    }
    // Reset current card's selection state
    setIsFlipped(false);
    setSelectedOptionIndex(null);
    setFeedbackColor("bg-blue-100");
  }, [selectedOptionIndex]);


  if (flashcards.length === 0) {
    return (
      <div className="text-center p-6">
        <p className="text-xl text-gray-600 mb-4">No flashcards loaded. Please add some to start!</p>
        <Button onClick={onReset}>Start New Session</Button>
      </div>
    );
  }

  const currentCard = flashcards[currentIndex];

  return (
    <div className={cn("w-full max-w-2xl p-6 flex flex-col items-center rounded-lg shadow-md transition-colors duration-300", feedbackColor)}>
      <div className="flex items-center space-x-2 mb-4 self-end">
        
        <Switch
          id="sound-mode"
          checked={soundEnabled}
          onCheckedChange={setSoundEnabled}
        />
        <Label htmlFor="sound-mode">Sound</Label>
        <Switch
          id="speech-mode"
          checked={speechEnabled}
          onCheckedChange={setSpeechEnabled}
        />
        <Label htmlFor="speech-mode">Speech</Label>

        <Switch
          id="auto-next-mode"
          checked={autoNextEnabled}
          onCheckedChange={setAutoNextEnabled}
        />
        <Label htmlFor="auto-next-mode">Auto-Next</Label>
      </div>

      <Card key={currentCard.id} className="w-full h-80 flex flex-col justify-between items-center p-6 mb-6 relative perspective-1000 bg-white">
        <div
          className={cn(
            "relative w-full h-full transition-transform duration-500 transform-style-preserve-3d",
            isFlipped ? "rotate-y-180" : ""
          )}
        >
          {/* Front of the card */}
          <div className="absolute w-full h-full backface-hidden flex items-center justify-center text-center p-4">
            <CardContent className="flex flex-col items-center justify-center h-full w-full">
              <CardTitle className="text-3xl font-bold">{currentCard.front}</CardTitle>
            </CardContent>
          </div>

          {/* Back of the card */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center text-center p-4">
            <CardContent className="flex flex-col items-center justify-center h-full w-full">
              <CardTitle className="text-3xl font-bold">{currentCard.back}</CardTitle>
            </CardContent>
          </div>
        </div>
      </Card>

      <div className="flex justify-center items-center space-x-4 mb-6 w-full">
        <Button onClick={handlePrev} variant="outline" size="icon">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button onClick={handleFlip} className="flex-grow max-w-xs">
          <RotateCcw className="h-4 w-4 mr-2" /> Flip Card
        </Button>
        <Button onClick={handleNext} variant="outline" size="icon">
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Options for quiz */}
      <div className="grid grid-cols-1 gap-3 w-full max-w-xs mb-6">
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleOptionSelect(option, index)}
            variant={selectedOptionIndex === index ? (option === correctOptionText ? "default" : "destructive") : "outline"}
            className={cn(
              "w-full py-3 text-lg",
              selectedOptionIndex !== null && option === correctOptionText && "bg-green-500 hover:bg-green-600 text-white",
              selectedOptionIndex === index && option !== correctOptionText && "bg-red-500 hover:bg-red-600 text-white",
              selectedOptionIndex !== null && selectedOptionIndex !== index && option !== correctOptionText && "opacity-50 cursor-not-allowed"
            )}
            disabled={selectedOptionIndex !== null}
          >
            {index + 1}. {option}
          </Button>
        ))}
      </div>

      <div className="text-lg text-gray-700 mb-6 flex justify-center items-center space-x-2">
        <span>Cards Presented: {cardsPresentedCount}</span>
        <span>|</span>
        <span>
          Correct Answers:{" "}
          <motion.span
            key={correctAnswersCount} // Key changes to trigger animation
            initial={{ scale: 1, color: "#000000" }} // Start black
            animate={{
              scale: [1, 2.5, 1], // Increased scale for a more dramatic flash
              color: ["#000000", "#22C55E", "#000000"] // Flash vibrant green then back to black
            }}
            transition={{ duration: 0.7 }} // Slightly longer duration for visibility
            className="font-bold" // This class provides bolding, color is animated
          >
            {correctAnswersCount}
          </motion.span>
        </span>
      </div>

      <div className="flex space-x-4">
        <Button onClick={handleStatsReset} variant="outline">
          Reset Stats
        </Button>
        <Button onClick={onReset} variant="secondary">
          Start New Session
        </Button>
      </div>
    </div>
  );
};

export default FlashcardViewer;