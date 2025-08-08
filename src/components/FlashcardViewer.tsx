import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Flashcard } from "@/types/flashcard";
import { cn } from "@/lib/utils";

interface FlashcardViewerProps {
  flashcards: Flashcard[];
  onReset: () => void;
}

const FlashcardViewer: React.FC<FlashcardViewerProps> = ({ flashcards, onReset }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [flashcards]);

  const currentCard = flashcards[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

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
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, isFlipped, flashcards.length, onReset]); // Dependencies for handlePrev, handleNext, handleFlip, onReset

  if (flashcards.length === 0) {
    return (
      <div className="text-center p-6">
        <p className="text-xl text-gray-600 mb-4">No flashcards loaded. Please add some to start!</p>
        <Button onClick={onReset}>Start New Session</Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl p-6 flex flex-col items-center">
      <Card className="w-full h-80 flex flex-col justify-between items-center p-6 mb-6 relative perspective-1000">
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