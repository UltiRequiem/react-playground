/*
  Change `proyectToLoad` and then run `yarn start` to se the project on 
  http://localhost:3000/
*/

const APPS = {
  fragments: {
    css: {
      ExampleInline: 'fragments/css/ExampleInLine',
      StyledComponents: 'fragments/css/StyledComponents',
    },
    states: {
      classes: {},
      funcs: {},
    },
  },
  projects: {
    CounterButton: 'projects/CounterButton',
    MovieTheather: 'projects/MovieTheather',
    InputObserver: 'projects/InputObserver',
  },
  snippets: {
    MouseTracker: 'snippets/MouseTracker',
    functionalHelloWorld: 'snippets/functionalHelloWorld',
    classHelloWorld: 'snippets/classHelloWorld',
  },
}

const projectToLoad = APPS.projects.MovieTheather

export default projectToLoad
