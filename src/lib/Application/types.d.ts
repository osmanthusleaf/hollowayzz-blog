import { Readable } from 'svelte/store';
interface Store<T> {
  $state: Readable<T>;
  dispatch: (a: Action) => void;
}

type InitPayload = { name: string };
type InitAction = Action<InitPayload>;
type Payload = never;
type Action = { name: string };
