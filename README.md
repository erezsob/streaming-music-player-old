# Mimi Hearing Top Artists Player

Technologies been used to built the project:

* React-Create-App (includes: Babel, Webpack, React-Scripts)
* React
* React-Router
* Reduxt
* Bootstrap
* ReactAudioPlayer

Because I needed the data (top artists json) to persist on all components (with react-router) I had to use a state management for that. At first I hoped Mobx would be enough for a project of this small scale (as Mobx known for its relative simplicity and small amount of boilerplate, as opposed to Redux), but I couldn't make it work for my use case. Instead I used Redux for the state persistent and as expected it did satisfy my needs (but took some time to setup).

Also, I had to use an external module for the audio player. At first I used HTML5 audio tag, and it was pretty much great, except that I couldn't make it load the audio files (after some reseach I found out that I needed to use the DOM API load() method, but doing that in React is a cumbersome task that invovles some duct taping code), so I settled on using the npm module ReactAudioPlayer that solved my issue in a easily.

I decided to not add a pagination feature, as this this project took a bit more time to finish than I expected. But I'm confident that this feature is a reasonable and not a complicated addition.

The same goes for the test coverage. Although I'm quite the TDD advocate, I didn't unit tested React components before. I hoped this project would be the first chance for me, but as I mentioned, the project took longer than I expected so with heavy heart I decided to not write a testing suite.

I hope you'd like and enjoy my solution :)