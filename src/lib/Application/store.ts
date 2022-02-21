import { useMachine } from '@xstate/svelte';
import { assign, createMachine, EventObject } from 'xstate';

type AppState = {
  posts: Post[];
  tags: TagPostMap[];
  selectedPost?: Post;
};
class PostLoadedEvent implements EventObject {
  type = 'postLoaded';

  constructor(public posts: Post[]) {}
}

class PostSelectedEvent implements EventObject {
  type = 'postSelected';
  constructor(public post: Post) {}
}

// Actions
const postsLoaded = assign<AppState, PostLoadedEvent>({
  posts: (_, { posts }) => posts
});

const postNavigated = assign<AppState, PostSelectedEvent>({
  selectedPost: (_, { post }) => post
});

const appMachine = createMachine<AppState>(
  {
    id: 'app',
    initial: 'init',
    context: {
      posts: [],
      tags: [],
      selectedPost: undefined
    },
    states: {
      init: {
        on: {
          FIRST_LOAD: { target: 'initializing' }
        }
      },
      initializing: {},
      inactive: {
        on: { TOGGLE: 'active' }
      }
    }
  },
  {
    actions: {
      postsLoaded
    }
  }
);

export default useMachine(appMachine);