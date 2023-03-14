# ChatGPT-Messenger (OpenAi API) 
Everyone knows ChatGPT by now. It is an AI that answers the user's questions via text output, writes an essay, helps with research and much more.

The topic is very interesting, so I thought I could combine this with my job as a software engineer. So I decided to rebuild ChatGPT as a NextJS project.

I will extend this from time to time. The goal is that the user can freely choose if he wants to have a rational or creative answer, if it should be short and concise or very detailed etc.

I also thought that I would make this repo public, so that everyone who is interested in contributing to the development of ChatGPT, but unfortunately doesn't work at OpenAi, can at least contribute his ideas here.

So feel free to fork the repo and join as a contributor if you want. But please read the guidelines first.

## Live Demo (free to use)
Of course I have also deployed this project. Here you can have a look at it and use it for free.
[Live Demo](https://chatgpt-messenger.app)

## How to Contribute
If you find a bug, you can always fix it and then make a pull request. I will then check this in a timely manner and merge if necessary.

If you have an idea for a feature or something else you would like to add or change, please communicate it with me first. Feel free to contact me for this at any time. If your idea makes sense, you are welcome to put it into action and then make a pull request, which I will merge.

## Environment Variables
For the development version you still need the environment variables. For this the following is needed:

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=here you just need to type in something, doesn't matter
GOOGLE_ID & GOOGLE_SECRET [learn more here](https://console.cloud.google.com)
OPEN_API_KEY [learn more here](https://platform.openai.com/signup)
FIREBASE_SERVICE_ACCOUNT_KEY [learn more here](https://firebase.google.com/docs/admin/setup?authuser=0#initialize_the_sdk_in_non-google_environments)
