import Button from './components2/Button.tsx';
import Input from './components2/Input.tsx';

function App2() {
  return (
    <main>
      <Input id='name' label='Your name' type='text' />
      <Input id='age' label='Your age' type='number' />
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href='https://google.com'>A Link</Button>
      </p>
    </main>
  );
}

export default App2;
