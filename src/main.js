import './styles/index.css';
import { buildMenu, render, goHome } from './app.js';
import { bindInput } from './input.js';
import { setupStatus } from './ui/status.js';
import { startClock, typeGreeting } from './ui/home.js';
import { boot } from './ui/boot.js';
import { resetIdle } from './ui/backlight.js';

setupStatus();
buildMenu();
startClock();
bindInput();
render();
boot(() => { goHome(); typeGreeting(); resetIdle(); });
