# Flashcard Learner Application Specification

## 1. Purpose
The Flashcard Learner application is designed to help users memorize information efficiently through interactive flashcards. Users can input custom sets of flashcards and practice them using a flip-card interface and a multiple-choice quiz mode.

## 2. Key Features

### 2.1 Flashcard Input
-   **Format:** Users input flashcards in a simple "front - back" format, one per line, into a text area.
-   **Validation:** The application validates input lines, ensuring each has both a front and a back, and provides toast notifications for errors.
-   **Loading:** A "Load Flashcards" button processes the input and shuffles the cards for the learning session.
-   **Keyboard Shortcut:** Pressing 'Enter' (without 'Shift') in the input area triggers the "Load Flashcards" action.

### 2.2 Flashcard Viewing and Navigation
-   **Card Display:** Displays one flashcard at a time, showing either the front or the back.
-   **Flip Functionality:** A "Flip Card" button (or 'ArrowUp'/'ArrowDown' keys) toggles between the front and back of the current card.
-   **Navigation:** "Previous" ('ArrowLeft' key) and "Next" ('ArrowRight' key) buttons allow users to move through the flashcard deck.
-   **3D Flip Effect:** Cards have a visual 3D flip animation when toggling between front and back.

### 2.3 Quiz Mode
-   **Multiple Choice Options:** For each flashcard, three options are presented: the correct answer and two randomly selected incorrect answers from the current deck.
-   **Selection:** Users can click on an option or use number keys (1, 2, 3) to select an answer.
-   **Feedback:**
    -   Correct answer: The card background turns green, and the correct answer counter flashes.
    -   Incorrect answer: The card background turns red, and the selected incorrect option is highlighted.
-   **Auto-Next:** An "Auto-Next on Correct" toggle is enabled by default, automatically advancing to the next card 2 seconds after a correct answer is selected.

### 2.4 Statistics
-   **Counters:** Displays "Cards Presented" (in gray) and "Correct Answers" (in black, with a green flash animation) counts.
-   **Correct Answer Animation:** The "Correct Answers" counter visually flashes with a zoom and color change when a correct answer is given.
-   **Reset Stats:** A button to reset the "Cards Presented" and "Correct Answers" counts.

### 2.5 Session Management
-   **Start New Session:** A button to clear the current flashcards and return to the input screen. This can also be triggered by the 'Enter' key when not in the input field.

## 3. Technology Stack
-   **Frontend Framework:** React (with TypeScript)
-   **Routing:** React Router
-   **Styling:** Tailwind CSS
-   **UI Components:** shadcn/ui (pre-built components)
-   **Icons:** Lucide React
-   **Animation:** Framer Motion
-   **State Management/Data Fetching:** React Query (though not heavily utilized for this app's current scope)
-   **Build Tool:** Vite

## 4. User Flow
1.  **Initial State:** User sees a text area to input flashcards.
2.  **Input Cards:** User types or pastes flashcards in "front - back" format.
3.  **Load Cards:** User clicks "Load Flashcards" or presses 'Enter'.
4.  **Learning Session:**
    -   The first flashcard is displayed (front side).
    -   User can flip the card, navigate through cards, or select an answer from the options.
    -   If an answer is selected, feedback is provided (color change, counter update).
    -   If auto-next is enabled and the answer is correct, the app moves to the next card.
5.  **Session End/Reset:** User can reset statistics or start a new session at any time.