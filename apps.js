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
    states: {},
  },
  projects: {
    CounterButton: 'projects/CounterButton',
    InputObserver: 'projects/InputObserver',
  },
  snippets: {
    MouseTracker: 'snippets/MouseTracker',
    functionalHelloWorld: 'snippets/functionalHelloWorld',
    classHelloWorld: 'snippets/classHelloWorld',
  },
}

// const projectToLoad = APPS.fragments.css.StyledComponents
// const projectToLoad = APPS.snippets.MouseTracker
// const projectToLoad = APPS.snippets.classHelloWorld
const projectToLoad = APPS.snippets.functionalHelloWorld

export default projectToLoad
