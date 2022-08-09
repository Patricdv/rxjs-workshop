import { fromEvent } from "rxjs";

fromEvent(document, "click")
  .subscribe((event: PointerEvent) => {
    const redDot = document.createElement("div");
    redDot.style.position = "absolute";
    redDot.style.background = "red";
    redDot.style.width = "3px";
    redDot.style.height = "3px";
    redDot.style.borderRadius = "3px";
    redDot.style.left = `${event.x}px`;
    redDot.style.top = `${event.y}px`;

    document.body.append(redDot);
  });

// TODO: Create Listener for add new Info to array (onKeyPress = Enter && onClick on button);

// TODO: Create Subject and Observe it to dynamic generate a TODO list;

// TODO: Create Debounce for temporary card;

// TODO: Erase elements from the list;
