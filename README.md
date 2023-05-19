## Disclaimer
If you want to try it now on my link, it will gives you the error code 429 probably - that means, that the free trial usage is already consumed/expired. You can still clone/fork this project, register for your own api key and will get a free trial credit for usage. The code works properly. 

# ChatGPT-Messenger (OpenAi API) 
Everyone knows ChatGPT by now. It is an AI that answers the user's questions via text output, writes an essay, helps with research and much more.</br></br>

The topic is very interesting, so I thought I could combine this with my job as a software engineer. So I decided to rebuild ChatGPT as a NextJS project.</br></br>

I will extend this from time to time. The goal is that the user can freely choose if he wants to have a rational or creative answer, if it should be short and concise or very detailed, change model to generate essays, code or do research etc.</br></br>

I also thought that I would make this repo public, so that everyone who is interested in contributing to the development of ChatGPT, but unfortunately doesn't work at OpenAi, can at least contribute his ideas here.</br></br>

So feel free to fork the repo and join as a contributor if you want. But please read the contribute guidelines down below first.</br></br>

## Live Demo (free to use)
Of course I have also deployed this project. Here you can have a look at it and use it for free.</br>
[Live Demo](https://chatgpt-messenger.app)</br></br>

## How to Contribute
If you find a bug, you can always fix it and then make a pull request. I will then check this in a timely manner and merge if necessary.</br></br>

If you have an idea for a feature or something else you would like to add or change, please communicate it with me first. Feel free to contact me for this at any time. If your idea makes sense, you are welcome to put it into action and then make a pull request, which I will merge.</br></br>

## Contribute Guidelines
In an open source project it is always important that everyone understands what someone has changed or added to the code.</br></br>

Therefore, the following rules apply when you make a pull request:</br></br>

### For a bug fix:</br>
Write 'Bugfix:' without quotes, followed by a short but clear explanation of what you fixed, so it's clear what the bug was.</br></br>

### For a feature:</br>
Write 'Feature:' without quotes, followed by a short but clear explanation what your feature does. Note: This only after prior consultation with me!</br></br>

## Environment Variables
For the development version you still need the environment variables. For this the following is needed:</br></br>

NEXTAUTH_URL=http://localhost:3000 </br>
NEXTAUTH_SECRET=here you just need to type in something, doesn't matter </br>
GOOGLE_ID & GOOGLE_SECRET [(learn more here)](https://console.cloud.google.com) </br>
OPEN_API_KEY [(learn more here)](https://platform.openai.com/signup)</br>
FIREBASE_SERVICE_ACCOUNT_KEY [(learn more here)](https://firebase.google.com/docs/admin/setup?authuser=0#initialize_the_sdk_in_non-google_environments)
