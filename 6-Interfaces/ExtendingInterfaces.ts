interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean;
}

interface FutureMailable extends Mailable {
  later(email: string, after: number): boolean;
}

interface A {
  a(): void;
}

interface B extends A {
  b(): void;
}

class Mail implements FutureMailable {
  send(email: string): boolean {
    console.log(`Sent email to ${email} ms. `);
    return true;
  }
  later(email: string, after: number): boolean {
    console.log(`Send email to ${email} in ${after} ms.`);
    return true;
  }

  queue(email: string): boolean {
    console.log(`Queue an email to ${email}.`);
    return true;
  }
}

const mail = new Mail();
console.log(mail.send("exampl@gmail.com"));
console.log(mail.queue("myemail@example.com"));
console.log(mail.later("example123@gmail.com", 10));
