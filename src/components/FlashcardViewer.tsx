import React, { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Flashcard } from "@/types/flashcard";
import { cn, shuffleArray } from "@/lib/utils";
import { Switch } from "@/components/ui/switch"; // Import Switch component
import { Label } from "@/components/ui/label"; // Import Label component

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
  const [feedbackColor, setFeedbackColor] = useState<string>("bg-blue-100"); // Default light blue
  const [autoNextEnabled, setAutoNextEnabled] = useState<boolean>(false); // New state for auto-next
  const autoNextTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to store timeout ID

  // Function to generate quiz options
  const generateOptions = useCallback(() => {
    // This check is now handled by the main component's early return
    // if (flashcards.length === 0) { ... return; }

    const currentCardForOptions = flashcards[currentIndex]; // Access current card for options generation
    if (!currentCardForOptions) return; // Safety check in case of async issues or rapid state changes

    const correctAns = currentCardForOptions.back;
    setCorrectOptionText(correctAns);

    const allOtherBacks = flashcards
      .filter((_, index) => index !== currentIndex)
      .map(card => card.back);

    // Get unique incorrect options, excluding the correct answer
    const uniqueIncorrectOptions = Array.from(new Set(allOtherBacks)).filter(
      (option) => option !== correctAns
    );

    const selectedIncorrectOptions: string[] = [];
    // Randomly pick two distinct incorrect options
    while (selectedIncorrectOptions.length < 2 && uniqueIncorrectOptions.length > 0) {
      const randomIndex = Math.floor(Math.random() * uniqueIncorrectOptions.length);
      selectedIncorrectOptions.push(uniqueIncorrectOptions[randomIndex]);
      uniqueIncorrectOptions.splice(randomIndex, 1); // Remove to avoid re-picking
    }

    // Fallback: if not enough unique incorrect options, add generic ones
    while (selectedIncorrectOptions.length < 2) {
      selectedIncorrectOptions.push(`Another Option ${selectedIncorrectOptions.length + 1}`);
    }

    const allOptions = shuffleArray([correctAns, ...selectedIncorrectOptions]);
    setOptions(allOptions);
    setSelectedOptionIndex(null);
    setIsFlipped(false);
    setFeedbackColor("bg-blue-100"); // Reset background to light blue
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  }, [flashcards.length]);

  const handlePrev = useCallback(() => {
    if (autoNextTimeoutRef.current) {
      clearTimeout(autoNextTimeoutRef.current);
      autoNextTimeoutRef.current = null;
    }
    setIsFlipped(false);
    setSelectedOptionIndex(null);
    setFeedbackColor("bg-blue-100");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  }, [flashcards.length]);

  const handleOptionSelect = useCallback((selectedText: string, index: number) => {
    if (selectedOptionIndex !== null) return; // Prevent multiple selections

    setSelectedOptionIndex(index);
    setIsFlipped(true); // Automatically flip the card

    if (selectedText === correctOptionText) {
      setFeedbackColor("bg-green-100");
      if (autoNextEnabled) {
        autoNextTimeoutRef.current = setTimeout(() => {
          handleNext();
        }, 2000); // 2 seconds
      }
    } else {
      setFeedbackColor("bg-red-100");
      // No auto-next on incorrect selection
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
          onReset(); // Start new session
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

  if (flashcards.length === 0) {
    return (
      <div className="text-center p-6">
        <p className="text-xl text-gray-600 mb-4">No flashcards loaded. Please add some to start!</p>
        <Button onClick={onReset}>Start New Session</Button>
      </div>
    );
  }

  // Define currentCard here, after the check for empty flashcards
  const currentCard = flashcards[currentIndex];

  return (
    <div className={cn("w-full max-w-2xl p-6 flex flex-col items-center rounded-lg shadow-md transition-colors duration-300", feedbackColor)}>
      <div className="flex items-center space-x-2 mb-4 self-end">
        <Switch
          id="auto-next-mode"
          checked={autoNextEnabled}
          onCheckedChange={setAutoNextEnabled}
        />
        <Label htmlFor="auto-next-mode">Auto-Next on Correct</Label>
      </div>

      <Card className="w-full h-80 flex flex-col justify-between items-center p-6 mb-6 relative perspective-1000 bg-white">
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

      <div className="text-lg text-gray-700 mb-6">
        Card {currentIndex + 1} of {flashcards.length}
      </div>

      <Button onClick={onReset} variant="secondary">
        Start New Session
      </Button>
    </div>
  );
};

export default FlashcardViewer;