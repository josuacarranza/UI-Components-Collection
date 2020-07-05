# UI-Components-Collection
A react based repository for centralize the UI resources used by a web application.
Basically it's needed because it could avoid to share UI components between React JS projects.

## How to use

Clone this repository to your local computer, then run:

- `npm install && npm run build`

- To make this component available to other projects on your local computer, run `yarn link`.
- Then go to the project where you want to use this package and run `yarn link "dummy-counter"`.

Finally, to fix the multiple copies of React bug that shows up with linked React packages:

- navigate to the root of the `UI-Components-Collection` package
- run `npm link "../path/to/your/project"`

You can now import the components as a normal package installed from npm like so:


## Note:
This is only a experimental package. It's not ready for global use
