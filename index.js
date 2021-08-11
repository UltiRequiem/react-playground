// Uncomment to see the project!

// import loadApp from './proyects/CounterButton'
import loadApp from './proyects/InputObserver'

if (typeof loadApp === 'function') {
  loadApp()
} else {
  console.log("You haven't imported any application yet!")
}
