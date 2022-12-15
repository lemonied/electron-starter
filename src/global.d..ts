
interface SmallTalkButtons {
  ok?: string;
  cancel?: string;
}

interface SmallTalkOptions {
  buttons?: SmallTalkButtons;
}

declare global {
  interface Window {
    smalltalk: {
      prompt: (title: string, content: string, defaultValue?: string, options?: { type?: 'password' } & SmallTalkOptions) => Promise<string>;
    };
  }
}

export {};
