import { component$ } from "@builder.io/qwik";
import Infobox from "./starter/infobox/infobox";

export default component$(() => {
  return (
    <div class="container container-flex" style={{backgroundColor:"#121212"}}>
      <Infobox>
        <div q:slot="title" class="icon icon-cli">
          CLI Commands
        </div>
        <>
          <p>
            <code>npm run dev</code>
            <br />
            Starts the development server and watches for changes
          </p>
          <p>
            <code>npm run preview</code>
            <br />
            Creates production build and starts a server to preview it
          </p>
          <p>
            <code>npm run build</code>
            <br />
            Creates production build
          </p>
          <p>
            <code>npm run qwik add</code>
            <br />
            Runs the qwik CLI to add integrations
          </p>
        </>
      </Infobox>

      <div>
        <Infobox>
          <div q:slot="title" class="icon icon-apps">
            Example Apps
          </div>
          <p>
            Have a look at the <a href="/demo/flower">Flower App</a> or the{" "}
            <a href="/demo/todolist">Todo App</a>.
          </p>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-community">
            Community
          </div>
          <ul>
            <li>
              <span>Questions or just want to say hi?</span>
              <a href="https://qwik.builder.io/chat" target="_blank">
                Chat on discord!
              </a>
            </li>
            <li>
              <span>Follow</span>
              <a href="https://twitter.com/QwikDev" target="_blank">
                @QwikDev
              </a>
              <span>on Twitter</span>
            </li>
            <li>
              <span>Open issues and contribute on</span>
              <a href="https://github.com/BuilderIO/qwik" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <span>Watch</span>
              <a href="https://qwik.builder.io/media/" target="_blank">
                Presentations, Podcasts, Videos, etc.
              </a>
            </li>
          </ul>
        </Infobox>
      </div>
    </div>
  );
});
