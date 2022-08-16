import { debounce, scan, filter, interval, fromEvent, merge, Subject, switchMap } from "rxjs";

const todoArray: any[] = [];
const todoSubject = new Subject();
const todo$ = todoSubject.asObservable();

const temporaryTodoSubject = new Subject();
const temporaryTodo$ = temporaryTodoSubject.asObservable();

const taskInput = document.querySelector("#task-input") as any;
const megablasterButton = document.querySelector('#megablaster-button');
const temporaryCard = document.querySelector('#temporary-card');

const keydownEvent$ = fromEvent(taskInput, "keydown");
const megablasterButton$ = fromEvent(megablasterButton, "click");
const clickEvent$ = fromEvent(document, "click");

keydownEvent$.pipe(debounce(() => interval(100))).subscribe(() => {
  temporaryTodoSubject.next(taskInput.value)
});

merge(
  keydownEvent$.pipe(filter((event: KeyboardEvent) => event.key === "Enter")),
  megablasterButton$
)
  .subscribe(() => {
  if (taskInput.value) {
    todoArray.push(taskInput.value);
    taskInput.value = "";
    temporaryTodoSubject.next("");
    todoSubject.next(todoArray);
  }
});

clickEvent$.subscribe((event: any) => {
  if (event.target.className === "card") {
    todoArray.splice(parseInt(event.target.dataset.index, 10), 1);
    todoSubject.next(todoArray);
  }
})

todo$.subscribe((todoList: string[]) => {
  document.querySelector("#list").innerHTML = "";

  todoList.forEach((todo, index) => {
    const todoCard = document.createElement("div");
    todoCard.innerText = todo;
    todoCard.className = "card";
    todoCard.dataset.index = `${index}`;
    document.querySelector("#list").prepend(todoCard);
  });
});

temporaryTodo$.subscribe((temporary: string) => {
  if (temporary) {
    temporaryCard.className = "show";
    temporaryCard.innerHTML = temporary;
    return;
  }
  temporaryCard.className = "";
});
