import { Controller } from 'stimulus'

export default class extends Controller {
  initialize() {
    this.nameElement.value = this.name
  }

  // logs the name entered
  // clears the value in the input
  log() {
    console.log(this.nameElement.value);
    this.nameElement.value = '';
  }

  // prevents the event from occuring and logs a message
  paste(event) {
    event.preventDefault();
    console.log("Pastes are not allowed");
  }

  // determines if a name (data-hello-name) attribute is set
  // if set, that is the default value
  // else, set the default value to Sara
  get name() {
    if(this.data.has("name")) {
      return this.data.get("name");
    } else {
      return "Sara";
    }
  }

  // gets the element based on the target (data-hello-target)
  get nameElement() {
    return this.targets.find("name");
  }
}