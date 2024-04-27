<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/CastillejaCode/dry-weekend">
    <img src="/static/android-chrome-512x512.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">dry weekend</h3>

  <p align="center">
    A curated list of local Antelope Valley and Los Angeles events.
    <br />
    <br />
    <a href="https://github.com/CastillejaCode/dry-weekend">View Demo</a>
    ·
    <a href="https://github.com/CastillejaCode/dry-weekend/issues">Report Bug</a>
    ·
    <a href="https://github.com/CastillejaCode/dry-weekend/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project
Desktop Light             |  Mobile Dark
-------------------------|-------------------------
<img src="https://i.imgur.com/6ls0TaP.png" alt="Desktop screenshot">  |  <img src="https://i.imgur.com/vJuTnhD.png" alt="Mobile screenshot">

### Built With


<a href="https://kit.svelte.dev/">  
<img alt="Svelte Static Badge" src="https://img.shields.io/badge/SvelteKit-2A233E?style=for-the-badge&logo=svelte&logoColor=ff3e00&color=2e2e2e" height="50">
</a>
<br/>
<a href="https://tailwindcss.com/">  
<img alt="TailwindCSS Static Badge" src="https://img.shields.io/badge/TailwindCSS-0b1120?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8" height="50">
</a> 

### How It's Made

I wanted to make this website as many ask me for information regarding what to do for the upcoming weekend.

I also wanted to try out SvelteKit after having a great time using Svelte in my portfolio website.
I set out to make this website quickly, so I used Skeleton UI, a SvelteKit based UI library, along with Pocketbase, a simple sqlite backend. 

### Optimizations

The whole webiste uses SSR, so everything is preloaded on the server and then delivered to the client. 

The simple nature of the site also lends itself for creating simple code. I also refactored some overall Svelte code as I am still learning how to use SvelteKit, which is one of the reasons I made this website to begin with. 


### Learning Outcomes

| The Good                               | The Bad                                              | The Ugly |
|----------------------------------------|------------------------------------------------------|----------|
| SvelteKit is fun   |   | Figuring out why Cloudflare Pages caused reloads to break           |
| Utilizing a UI library |                          |          |
|             Made a website that is easy to update            |                                                      |          |
|             Made a website I'm proud of           |                                                      |          |



<!-- GETTING STARTED -->
## Getting Started

If you want to get a local copy running, here ya go. 

### Prerequisites

* pnpm
  ```
  npm install -g pnpm
  ```

### Installation

1. Clone the repo
   ```
   git clone https://github.com/CastillejaCode/dry-weekend.git
   ```
2. Install NPM packages
   ```
   pnpm install 
   ```
3. Run local development server
   ```
   pnpm dev
   ```
 4. Switch out my info for yours

    I still need to replace the url with an environment variable, but I'm not worried about security for that due to API Rules put in place in the backend.
    You would also need to have the same sql data layout as me, which I may include as types in the future. 

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Julian Krzysiak - jkrzysiak13@gmail.com

Project Link: https://github.com/CastillejaCode/dry-weekend

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* Favicon generator - [favicon.io](https://favicon.io/)
* Favicon Emoji - [Twemoji](https://heroicons.com/](https://github.com/twitter/twemoji))

<p align="right">(<a href="#readme-top">back to top</a>)</p>
