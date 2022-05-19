interface State {
  isBlack: boolean;
}

interface ISuscriber {
  update: (state: State) => void;
}

class Publisher {
  public suscribers: ISuscriber[] = [];
  public state: State = {
    isBlack: false,
  };

  suscribe = (suscriber: ISuscriber) => {
    this.suscribers.push(suscriber);
  };
  unsuscribe = (suscriber: ISuscriber): string => {
    const isExist = this.suscribers.indexOf(suscriber);
    if (isExist !== -1) return "Ya estás suscrito!";
  };
  notify = () =>
    this.suscribers.forEach((suscriber: ISuscriber) =>
      suscriber.update(this.state)
    );
}

class Button implements ISuscriber {
  public name: string;
  public isBlack: boolean;

  constructor(name: string) {
    this.name = name;
  }

  update = (state: State) => {
    const { isBlack } = state;
    this.isBlack = isBlack;
    console.log(`${this.name} notificado`);
  };
}

function main() {
  console.log("Init...");
  function bussinesLogic(): void {
    publisher.state.isBlack = true;
    publisher.notify();
    createButton();
  }
  const createButton = () => {
    root.innerHTML = "";
    const button = document.createElement("button");
    button.classList.add(publisher.state.isBlack ? "black" : "red");
    root.appendChild(button);
  };

  const root = document.getElementById("root");
  const publisher = new Publisher();
  const button1 = new Button("Button One");
  const button2 = new Button("Button Two");
  publisher.suscribe(button1);
  publisher.suscribe(button2);

  setTimeout(() => {
    bussinesLogic();
  }, 3000);
}

main();
