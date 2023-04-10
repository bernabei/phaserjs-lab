/// <reference types="vite/client" />

interface Window {
    sizeChanged: () => void;
    game: Phaser.Game;
  }